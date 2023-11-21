const messages = require("../Constants/Messages")
const { sequelizeErrorCatcher, createAccessDenied } = require("../Utilities/Error")
const createValidationError = require("../Utilities/Error").createValidation
const createNotfounderror = require("../Utilities/Error").createNotfounderror
const validator = require("../Utilities/Validator")
const uuid = require('uuid').v4
const Priveleges = require("../Constants/Privileges")

async function GetUsernotifications(req, res, next) {
    try {
        const notifications = await db.usernotificationModel.findAll()
        res.status(200).json(notifications)
    } catch (error) {
        return next(sequelizeErrorCatcher(error))
    }
}

async function GetUsernotification(req, res, next) {

    let validationErrors = []
    if (req.params.notificationId === undefined) {
        validationErrors.push(messages.VALIDATION_ERROR.ROLEID_REQUIRED)
    }
    if (!validator.isUUID(req.params.notificationId)) {
        validationErrors.push(messages.VALIDATION_ERROR.UNSUPPORTED_ROLEID)
    }
    if (validationErrors.length > 0) {
        return next(createValidationError(validationErrors, req.language))
    }

    try {
        const notification = await db.usernotificationModel.findOne({ where: { Uuid: req.params.roleId } });
        if (!notification) {
            return next(createNotfounderror([messages.ERROR.ROLE_NOT_FOUND]))
        }
        if (!notification.Isactive) {
            return next(createNotfounderror([messages.ERROR.ROLE_NOT_ACTIVE]))
        }
        res.status(200).json(notification)
    } catch (error) {
        return next(sequelizeErrorCatcher(error))
    }
}

async function GetUsernotificationsbyUserid(req, res, next) {
    try {
        let validationErrors = []
        if (req.params.userId === undefined) {
            validationErrors.push(messages.VALIDATION_ERROR.USERID_REQUIRED)
        }
        if (!validator.isUUID(req.params.userId)) {
            validationErrors.push(messages.VALIDATION_ERROR.UNSUPPORTED_USERID)
        }
        if (validationErrors.length > 0) {
            return next(createValidationError(validationErrors, req.language))
        }
        const notifications = await db.usernotificationModel.findAll({ where: { UserID: req.params.userId } })
        if (!notifications) {
            return next(createNotfounderror([messages.ERROR.USERROLE_NOT_FOUND], req.language))
        }
        res.status(200).json(notifications)
    } catch (error) {
        return next(sequelizeErrorCatcher(error))
    }
}

async function AddUsernotification(req, res, next) {


    let notificationuuid = uuid()

    const t = await db.sequelize.transaction();

    try {
        await db.usernotificationModel.create({
            ...req.body,
            Uuid: notificationuuid,
            Createduser: "System",
            Createtime: new Date(),
            Isactive: true
        }, { transaction: t })

        await t.commit()
    } catch (err) {
        await t.rollback()
        return next(sequelizeErrorCatcher(err))
    }
    GetUsernotifications(req, res, next)
}

async function UpdateUsernotification(req, res, next) {

    const t = await db.sequelize.transaction();
    try {
        const notification = await db.usernotificationModel.findOne({ where: { Uuid: Uuid } })
        if (!notification) {
            return next(createNotfounderror([messages.ERROR.ROLE_NOT_FOUND], req.language))
        }
        if (notification.Isactive === false) {
            return next(createAccessDenied([messages.ERROR.ROLE_NOT_ACTIVE], req.language))
        }

        await db.usernotificationModel.update({
            ...req.body,
            Updateduser: "System",
            Updatetime: new Date(),
        }, { where: { Uuid: req.body?.Uuid } }, { transaction: t })

        await t.commit()
    } catch (error) {
        return next(sequelizeErrorCatcher(error))
    }
    GetUsernotifications(req, res, next)
}

async function DeleteUsernotification(req, res, next) {

    let validationErrors = []
    const Uuid = req.params.notificationId

    if (!Uuid) {
        validationErrors.push(messages.VALIDATION_ERROR.USERID_REQUIRED)
    }
    if (!validator.isUUID(Uuid)) {
        validationErrors.push(messages.VALIDATION_ERROR.UNSUPPORTED_USERID)
    }
    if (validationErrors.length > 0) {
        return next(createValidationError(validationErrors, req.language))
    }

    const t = await db.sequelize.transaction();
    try {
        const notification = await db.usernotificationModel.findOne({ where: { Uuid: Uuid } })
        if (!notification) {
            return next(createNotfounderror([messages.ERROR.ROLE_NOT_FOUND], req.language))
        }
        if (!notification.Isactive) {
            return next(createNotfounderror([messages.ERROR.ROLE_NOT_ACTIVE], req.language))
        }

        await db.usernotificationModel.update({
            Updateduser: "System",
            Updatetime: new Date(),
            Isactive: false
        }, { where: { Uuid: Uuid } }, { transaction: t })
        await t.commit();
    } catch (error) {
        await t.rollback();
        return next(sequelizeErrorCatcher(error))
    }
    GetUsernotifications(req, res, next)
}


module.exports = {
    GetUsernotifications,
    GetUsernotification,
    AddUsernotification,
    UpdateUsernotification,
    DeleteUsernotification,
    GetUsernotificationsbyUserid,
}