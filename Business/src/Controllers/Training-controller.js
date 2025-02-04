const config = require("../Config")
const { types } = require("../Constants/Defines")
const { trainingtypes } = require("../Constants/Trainingtypes")
const CreateNotification = require("../Utilities/CreateNotification")
const DoGet = require("../Utilities/DoGet")
const { sequelizeErrorCatcher } = require("../Utilities/Error")
const createValidationError = require("../Utilities/Error").createValidationError
const createNotFoundError = require("../Utilities/Error").createNotFoundError
const validator = require("../Utilities/Validator")
const uuid = require('uuid').v4

const TRAINING_TYPEDETAIL_USER = 0
const TRAINING_TYPEDETAIL_PATIENT = 1
const TRAINING_TYPEDETAIL_PATIENTCONTACT = 2

async function GetTrainings(req, res, next) {
    try {
        let data = null
        const trainings = await db.trainingModel.findAll()
        for (const training of trainings) {
            training.Trainingusers = await db.trainingusersModel.findAll({
                where: {
                    TrainingID: training?.Uuid,
                },
            });
        }
        if (req?.Uuid) {
            data = await db.trainingModel.findOne({ where: { Uuid: req?.Uuid } });
        }
        res.status(200).json({ list: trainings, data: data })
    } catch (error) {
        return next(sequelizeErrorCatcher(error))
    }
}

async function GetTraining(req, res, next) {

    let validationErrors = []
    if (!req.params.trainingId) {
        validationErrors.push(req.t('Tranings.Error.TrainingIDRequired'))
    }
    if (!validator.isUUID(req.params.trainingId)) {
        validationErrors.push(req.t('Tranings.Error.UnsupportedTrainingID'))
    }
    if (validationErrors.length > 0) {
        return next(createValidationError(validationErrors, req.t('Tranings'), req.language))
    }

    try {
        const training = await db.trainingModel.findOne({ where: { Uuid: req.params.trainingId } });
        training.Trainingusers = await db.trainingusersModel.findAll({
            where: {
                TrainingID: training?.Uuid,
            },
        });
        res.status(200).json(training)
    } catch (error) {
        return next(sequelizeErrorCatcher(error))
    }
}


async function AddTraining(req, res, next) {

    let validationErrors = []
    const {
        Type,
        Typedetail,
        Name,
        Trainingdate,
        Companyname,
        Duration,
        Educator,
        EducatoruserID,
        Trainingusers,
    } = req.body

    if (!validator.isNumber(Type)) {
        validationErrors.push(req.t('Tranings.Error.TypeRequired'))
    }
    if (!validator.isNumber(Typedetail)) {
        validationErrors.push(req.t('Tranings.Error.TypedetailRequired'))
    }
    if (!validator.isString(Name)) {
        validationErrors.push(req.t('Tranings.Error.NameRequired'))
    }
    if (!validator.isISODate(Trainingdate)) {
        validationErrors.push(req.t('Tranings.Error.TrainingdateRequired'))
    }
    if (!validator.isString(Duration)) {
        validationErrors.push(req.t('Tranings.Error.DurationRequired'))
    }
    if (Type === trainingtypes.Company && !validator.isString(Educator)) {
        validationErrors.push(req.t('Tranings.Error.EducatorRequired'))
    }
    if (Type === trainingtypes.Company && !validator.isString(Companyname)) {
        validationErrors.push(req.t('Tranings.Error.CompanynameRequired'))
    }
    if (Type === trainingtypes.Organization && !validator.isUUID(EducatoruserID)) {
        validationErrors.push(req.t('Tranings.Error.EducatoruserIDRequired'))
    }
    if (!validator.isArray(Trainingusers) || (Trainingusers || []).length <= 0) {
        validationErrors.push(req.t('Tranings.Error.TrainingusersRequired'))
    } else {
        for (const user of Trainingusers) {
            switch (Typedetail) {
                case TRAINING_TYPEDETAIL_USER:
                    if (!validator.isUUID(user)) {
                        validationErrors.push(req.t('Tranings.Error.TraininguserIDRequired'))
                    }
                    break;
                case TRAINING_TYPEDETAIL_PATIENT:
                    if (!validator.isUUID(user)) {
                        validationErrors.push(req.t('Tranings.Error.TraininpatientIDRequired'))
                    }
                    break;
                case TRAINING_TYPEDETAIL_PATIENTCONTACT:
                    if (!validator.isString(user)) {
                        validationErrors.push(req.t('Tranings.Error.TrainingpatientcontactRequired'))
                    }
                    break;
            }
        }
    }

    if (validationErrors.length > 0) {
        return next(createValidationError(validationErrors, req.t('Tranings'), req.language))
    }

    let traininguuid = uuid()

    const t = await db.sequelize.transaction();
    const username = req?.identity?.user?.Username || 'System'

    try {
        await db.trainingModel.create({
            ...req.body,
            Uuid: traininguuid,
            Isonpreview: true,
            Isapproved: false,
            Iscompleted: false,
            Createduser: username,
            Createtime: new Date(),
            Isactive: true
        }, { transaction: t })

        for (const user of Trainingusers) {
            let userValue = {}
            switch (Typedetail) {
                case TRAINING_TYPEDETAIL_USER:
                    userValue.UserID = user
                    break;
                case TRAINING_TYPEDETAIL_PATIENT:
                    userValue.PatientID = user
                    break;
                case TRAINING_TYPEDETAIL_PATIENTCONTACT:
                    userValue.Patientcontact = user
                    break;
            }
            await db.trainingusersModel.create({
                Uuid: uuid(),
                TrainingID: traininguuid,
                Iscompleted: false,
                Createduser: username,
                Createtime: new Date(),
                Isactive: true,
                ...userValue
            }, { transaction: t })
        }

        await CreateNotification({
            type: types.Create,
            service: req.t('Tranings'),
            role: 'traningnotification',
            message: {
                tr: `${Name} Eğitimi ${username} tarafından Oluşturuldu.`,
                en: `${Name} Training Created By ${username}`
            }[req.language],
            pushurl: '/Tranings'
        })

        await t.commit()
    } catch (err) {
        await t.rollback()
        return next(sequelizeErrorCatcher(err))
    }
    req.Uuid = traininguuid
    GetTrainings(req, res, next)
}

async function UpdateTraining(req, res, next) {

    let validationErrors = []
    const {
        Uuid,
        Type,
        Typedetail,
        Name,
        Trainingdate,
        Companyname,
        Duration,
        Educator,
        EducatoruserID,
        Trainingusers
    } = req.body

    if (!Uuid) {
        validationErrors.push(req.t('Tranings.Error.TrainingIDRequired'))
    }
    if (!validator.isUUID(Uuid)) {
        validationErrors.push(req.t('Tranings.Error.UnsupportedTrainingID'))
    }
    if (!validator.isNumber(Type)) {
        validationErrors.push(req.t('Tranings.Error.TypeRequired'))
    }
    if (!validator.isNumber(Typedetail)) {
        validationErrors.push(req.t('Tranings.Error.TypedetailRequired'))
    }
    if (!validator.isString(Name)) {
        validationErrors.push(req.t('Tranings.Error.NameRequired'))
    }
    if (!validator.isISODate(Trainingdate)) {
        validationErrors.push(req.t('Tranings.Error.TrainingdateRequired'))
    }
    if (!validator.isString(Duration)) {
        validationErrors.push(req.t('Tranings.Error.DurationRequired'))
    }
    if (Type === trainingtypes.Company && !validator.isString(Educator)) {
        validationErrors.push(req.t('Tranings.Error.EducatorRequired'))
    }
    if (Type === trainingtypes.Company && !validator.isString(Companyname)) {
        validationErrors.push(req.t('Tranings.Error.CompanynameRequired'))
    }
    if (Type === trainingtypes.Organization && !validator.isUUID(EducatoruserID)) {
        validationErrors.push(req.t('Tranings.Error.EducatoruserIDRequired'))
    }
    if (!validator.isArray(Trainingusers) || (Trainingusers || []).length <= 0) {
        validationErrors.push(req.t('Tranings.Error.TrainingusersRequired'))
    } else {
        for (const user of Trainingusers) {
            switch (Typedetail) {
                case TRAINING_TYPEDETAIL_USER:
                    if (!validator.isUUID(user)) {
                        validationErrors.push(req.t('Tranings.Error.TraininguserIDRequired'))
                    }
                    break;
                case TRAINING_TYPEDETAIL_PATIENT:
                    if (!validator.isUUID(user)) {
                        validationErrors.push(req.t('Tranings.Error.TraininguserIDRequired'))
                    }
                    break;
                case TRAINING_TYPEDETAIL_PATIENTCONTACT:
                    if (!validator.isString(user)) {
                        validationErrors.push(req.t('Tranings.Error.TraininguserIDRequired'))
                    }
                    break;
            }
        }
    }

    if (validationErrors.length > 0) {
        return next(createValidationError(validationErrors, req.t('Tranings'), req.language))
    }

    const t = await db.sequelize.transaction();
    const username = req?.identity?.user?.Username || 'System'

    try {
        const training = await db.trainingModel.findOne({ where: { Uuid: Uuid } })
        if (!training) {
            return next(createNotFoundError(req.t('Tranings.Error.NotFound'), req.t('Tranings'), req.language))
        }
        if (training.Isactive === false) {
            return next(createNotFoundError(req.t('Tranings.Error.NotActive'), req.t('Tranings'), req.language))
        }

        await db.trainingModel.update({
            ...req.body,
            Updateduser: username,
            Updatetime: new Date(),
        }, { where: { Uuid: Uuid }, transaction: t })

        await db.trainingusersModel.destroy({ where: { TrainingID: Uuid }, transaction: t });

        for (const user of Trainingusers) {
            let userValue = {}
            switch (Typedetail) {
                case TRAINING_TYPEDETAIL_USER:
                    userValue.UserID = user
                    break;
                case TRAINING_TYPEDETAIL_PATIENT:
                    userValue.PatientID = user
                    break;
                case TRAINING_TYPEDETAIL_PATIENTCONTACT:
                    userValue.Patientcontact = user
                    break;
            }
            await db.trainingusersModel.create({
                Uuid: uuid(),
                TrainingID: Uuid,
                Iscompleted: false,
                Createduser: username,
                Createtime: new Date(),
                Isactive: true,
                ...userValue
            }, { transaction: t })
        }

        await CreateNotification({
            type: types.Update,
            service: req.t('Tranings'),
            role: 'traningnotification',
            message: {
                tr: `${Name} Eğitimi ${username} tarafından Güncellendi.`,
                en: `${Name} Training Updated By ${username}`
            }[req.language],
            pushurl: '/Tranings'
        })

        await t.commit()
    } catch (error) {
        return next(sequelizeErrorCatcher(error))
    }
    req.Uuid = Uuid
    GetTrainings(req, res, next)

}

async function DeleteTraining(req, res, next) {

    let validationErrors = []
    const Uuid = req.params.trainingId

    if (!Uuid) {
        validationErrors.push(req.t('Tranings.Error.TrainingIDRequired'))
    }
    if (!validator.isUUID(Uuid)) {
        validationErrors.push(req.t('Tranings.Error.UnsupportedTrainingID'))
    }
    if (validationErrors.length > 0) {
        return next(createValidationError(validationErrors, req.t('Tranings'), req.language))
    }

    const t = await db.sequelize.transaction();
    const username = req?.identity?.user?.Username || 'System'

    try {
        const training = await db.trainingModel.findOne({ where: { Uuid: Uuid } })
        if (!training) {
            return next(createNotFoundError(req.t('Tranings.Error.NotFound'), req.t('Tranings'), req.language))
        }
        if (training.Isactive === false) {
            return next(createNotFoundError(req.t('Tranings.Error.NotActive'), req.t('Tranings'), req.language))
        }

        await db.trainingModel.update({
            Deleteduser: username,
            Deletetime: new Date(),
            Isactive: false
        }, { where: { Uuid: Uuid }, transaction: t })

        await db.trainingusersModel.update({
            Deleteduser: username,
            Deletetime: new Date(),
            Isactive: false
        }, { where: { TrainingID: Uuid }, transaction: t })

        await CreateNotification({
            type: types.Delete,
            service: req.t('Tranings'),
            role: 'traningnotification',
            message: {
                tr: `${training?.Name} Eğitimi ${username} tarafından Silindi.`,
                en: `${training?.Name} Training Deleted By ${username}`
            }[req.language],
            pushurl: '/Tranings'
        })

        await t.commit();
    } catch (error) {
        await t.rollback();
        return next(sequelizeErrorCatcher(error))
    }
    req.Uuid = Uuid
    GetTrainings(req, res, next)
}

async function SavepreviewTraining(req, res, next) {

    let validationErrors = []
    const Uuid = req.params.trainingId

    if (!Uuid) {
        validationErrors.push(req.t('Tranings.Error.TrainingIDRequired'))
    }
    if (!validator.isUUID(Uuid)) {
        validationErrors.push(req.t('Tranings.Error.UnsupportedTrainingID'))
    }
    if (validationErrors.length > 0) {
        return next(createValidationError(validationErrors, req.t('Tranings'), req.language))
    }


    const t = await db.sequelize.transaction();
    const username = req?.identity?.user?.Username || 'System'

    try {
        const training = await db.trainingModel.findOne({ where: { Uuid: Uuid } })
        if (!training) {
            return next(createNotFoundError(req.t('Tranings.Error.NotFound'), req.t('Tranings'), req.language))
        }
        if (training.Isactive === false) {
            return next(createNotFoundError(req.t('Tranings.Error.NotActive'), req.t('Tranings'), req.language))
        }

        await db.trainingModel.update({
            Isonpreview: false,
            Updateduser: username,
            Updatetime: new Date(),
        }, { where: { Uuid: Uuid }, transaction: t })

        await CreateNotification({
            type: types.Update,
            service: req.t('Tranings'),
            role: 'traningnotification',
            message: {
                tr: `${training?.Name} Eğitimi ${username} tarafından Kayıt Edildi.`,
                en: `${training?.Name} Training Saved By ${username}`
            }[req.language],
            pushurl: '/Tranings'
        })

        await t.commit();
    } catch (error) {
        await t.rollback();
        return next(sequelizeErrorCatcher(error))
    }
    req.Uuid = Uuid
    GetTrainings(req, res, next)
}

async function ApproveTraining(req, res, next) {

    let validationErrors = []
    const Uuid = req.params.trainingId

    if (!Uuid) {
        validationErrors.push(req.t('Tranings.Error.TrainingIDRequired'))
    }
    if (!validator.isUUID(Uuid)) {
        validationErrors.push(req.t('Tranings.Error.UnsupportedTrainingID'))
    }
    if (validationErrors.length > 0) {
        return next(createValidationError(validationErrors, req.t('Tranings'), req.language))
    }

    const t = await db.sequelize.transaction();
    const username = req?.identity?.user?.Username || 'System'

    try {
        const training = await db.trainingModel.findOne({ where: { Uuid: Uuid } })
        if (!training) {
            return next(createNotFoundError(req.t('Tranings.Error.NotFound'), req.t('Tranings'), req.language))
        }
        if (training.Isactive === false) {
            return next(createNotFoundError(req.t('Tranings.Error.NotActive'), req.t('Tranings'), req.language))
        }

        await db.trainingModel.update({
            Isapproved: true,
            Approveduser: username,
            Updateduser: username,
            Approvetime: new Date(),
            Updatetime: new Date(),
        }, { where: { Uuid: Uuid }, transaction: t })

        await CreateNotification({
            type: types.Update,
            service: req.t('Tranings'),
            role: 'traningnotification',
            message: {
                tr: `${training?.Name} Eğitimi ${username} tarafından Onaylandı.`,
                en: `${training?.Name} Training Approved By ${username}`
            }[req.language],
            pushurl: '/Tranings'
        })

        await t.commit();
    } catch (error) {
        await t.rollback();
        return next(sequelizeErrorCatcher(error))
    }
    req.Uuid = Uuid
    GetTrainings(req, res, next)
}

async function CompleteTraininguser(req, res, next) {

    let validationErrors = []
    const Uuid = req.params.traininguserId

    if (!Uuid) {
        validationErrors.push(req.t('Tranings.Error.TraininguserIDRequired'))
    }
    if (!validator.isUUID(Uuid)) {
        validationErrors.push(req.t('Tranings.Error.UnsupportedTraininguserID'))
    }
    if (validationErrors.length > 0) {
        return next(createValidationError(validationErrors, req.t('Tranings'), req.language))
    }

    const t = await db.sequelize.transaction();
    const username = req?.identity?.user?.Username || 'System'

    try {
        const traininguser = await db.trainingusersModel.findOne({ where: { Uuid: Uuid } })
        if (!traininguser) {
            return next(createNotFoundError(req.t('Tranings.Error.TraininguserNotFound'), req.t('Tranings'), req.language))
        }
        if (traininguser.Isactive === false) {
            return next(createNotFoundError(req.t('Tranings.Error.TraininguserNotActive'), req.t('Tranings'), req.language))
        }

        await db.trainingusersModel.update({
            Iscompleted: true,
            Updateduser: username,
            Updatetime: new Date(),
        }, { where: { Uuid: Uuid }, transaction: t })

        const training = await db.trainingModel.findOne({ where: { Uuid: traininguser?.TrainingID || '' } });
        const user = DoGet(config.services.Userrole, 'Users' + traininguser?.Uuid)

        await CreateNotification({
            type: types.Update,
            service: req.t('Tranings'),
            role: 'traningnotification',
            message: {
                tr: `${user?.Username} Kullanıcısı ${training?.Name} Eğitimini Tamamladı.`,
                en: `${user?.Username} User Completed ${training?.Name} Training`
            }[req.language],
            pushurl: '/Tranings'
        })

        await t.commit();
    } catch (error) {
        await t.rollback();
        return next(sequelizeErrorCatcher(error))
    }
    GetTrainings(req, res, next)
}

async function CompleteTraining(req, res, next) {

    let validationErrors = []
    const Uuid = req.params.trainingId

    if (!Uuid) {
        validationErrors.push(req.t('Tranings.Error.TrainingIDRequired'))
    }
    if (!validator.isUUID(Uuid)) {
        validationErrors.push(req.t('Tranings.Error.UnsupportedTrainingID'))
    }
    if (validationErrors.length > 0) {
        return next(createValidationError(validationErrors, req.t('Tranings'), req.language))
    }

    const t = await db.sequelize.transaction();
    const username = req?.identity?.user?.Username || 'System'

    try {
        const training = await db.trainingModel.findOne({ where: { Uuid: Uuid } })
        if (!training) {
            return next(createNotFoundError(req.t('Tranings.Error.NotFound'), req.t('Tranings'), req.language))
        }
        if (training.Isactive === false) {
            return next(createNotFoundError(req.t('Tranings.Error.NotActive'), req.t('Tranings'), req.language))
        }

        await db.trainingModel.update({
            Iscompleted: true,
            Completeduser: username,
            Completedtime: new Date(),
            Updateduser: username,
            Updatetime: new Date(),
        }, { where: { Uuid: Uuid }, transaction: t })

        await CreateNotification({
            type: types.Update,
            service: req.t('Tranings'),
            role: 'traningnotification',
            message: {
                tr: `${training?.Name} Eğitimi ${username} tarafından Tamamlandı.`,
                en: `${training?.Name} Training Completed By ${username}`
            }[req.language],
            pushurl: '/Tranings'
        })

        await t.commit();
    } catch (error) {
        await t.rollback();
        return next(sequelizeErrorCatcher(error))
    }
    req.Uuid = Uuid
    GetTrainings(req, res, next)
}

async function CompleteTrainingAll(req, res, next) {

    let validationErrors = []
    const Uuid = req.params.trainingId
    console.log('Uuid: ', Uuid);

    if (!Uuid) {
        validationErrors.push(req.t('Tranings.Error.TrainingIDRequired'))
    }
    if (!validator.isUUID(Uuid)) {
        validationErrors.push(req.t('Tranings.Error.UnsupportedTrainingID'))
    }
    if (validationErrors.length > 0) {
        return next(createValidationError(validationErrors, req.t('Tranings'), req.language))
    }

    const t = await db.sequelize.transaction();
    const username = req?.identity?.user?.Username || 'System'

    try {
        const training = await db.trainingModel.findOne({ where: { Uuid: Uuid } })
        if (!training) {
            return next(createNotFoundError(req.t('Tranings.Error.NotFound'), req.t('Tranings'), req.language))
        }
        if (training.Isactive === false) {
            return next(createNotFoundError(req.t('Tranings.Error.NotActive'), req.t('Tranings'), req.language))
        }

        await db.trainingModel.update({
            Iscompleted: true,
            Completeduser: username,
            Completedtime: new Date(),
            Updateduser: username,
            Updatetime: new Date(),
        }, { where: { Uuid: Uuid }, transaction: t })

        await db.trainingusersModel.update({
            Iscompleted: true,
            Updateduser: username,
            Updatetime: new Date(),
        }, { where: { TrainingID: Uuid }, transaction: t })

        await CreateNotification({
            type: types.Update,
            service: req.t('Tranings'),
            role: 'traningnotification',
            message: {
                tr: `${training?.Name} Eğitimi ${username} tarafından Tamamlandı.`,
                en: `${training?.Name} Training Completed By ${username}`
            }[req.language],
            pushurl: '/Tranings'
        })

        await t.commit();
    } catch (error) {
        await t.rollback();
        return next(sequelizeErrorCatcher(error))
    }
    req.Uuid = Uuid
    GetTrainings(req, res, next)
}

module.exports = {
    GetTrainings,
    GetTraining,
    AddTraining,
    UpdateTraining,
    DeleteTraining,
    SavepreviewTraining,
    ApproveTraining,
    CompleteTraining,
    CompleteTraininguser,
    CompleteTrainingAll
}