const messages = require("../Constants/Messages")
const { sequelizeErrorCatcher, createAccessDenied } = require("../Utilities/Error")
const createValidationError = require("../Utilities/Error").createValidation
const createNotfounderror = require("../Utilities/Error").createNotfounderror
const validator = require("../Utilities/Validator")
const uuid = require('uuid').v4


async function GetFloors(req, res, next) {
    try {
        const floors = await db.floorModel.findAll({ where: { Isactive: true } })
        res.status(200).json(floors)
    } catch (error) {
        return next(sequelizeErrorCatcher(error))
    }
}

async function GetFloor(req, res, next) {

    let validationErrors = []
    if (!req.params.floorId) {
        validationErrors.push(messages.VALIDATION_ERROR.FILEID_REQUIRED)
    }
    if (!validator.isUUID(req.params.floorId)) {
        validationErrors.push(messages.VALIDATION_ERROR.UNSUPPORTED_FLOORID)
    }
    if (validationErrors.length > 0) {
        return next(createValidationError(validationErrors, req.language))
    }

    try {
        const floor = await db.floorModel.findOne({ where: { Uuid: req.params.floorId } });
        res.status(200).json(floor)
    } catch (error) {
        return next(sequelizeErrorCatcher(error))
    }
}


async function AddFloor(req, res, next) {

    let validationErrors = []
    const {
        Name,
    } = req.body

    if (!validator.isString(Name)) {
        validationErrors.push(messages.VALIDATION_ERROR.NAME_REQUIRED)
    }

    if (validationErrors.length > 0) {
        return next(createValidationError(validationErrors, req.language))
    }

    let flooruuid = uuid()

    const t = await db.sequelize.transaction();

    try {
        await db.floorModel.create({
            ...req.body,
            Uuid: flooruuid,
            Createduser: "System",
            Createtime: new Date(),
            Isactive: true
        }, { transaction: t })

        await t.commit()
    } catch (err) {
        await t.rollback()
        return next(sequelizeErrorCatcher(err))
    }
    GetFloors(req, res, next)
}

async function UpdateFloor(req, res, next) {

    let validationErrors = []
    const {
        Name,
        Uuid,
    } = req.body

    if (!validator.isString(Name)) {
        validationErrors.push(messages.VALIDATION_ERROR.NAME_REQUIRED)
    }
    if (!Uuid) {
        validationErrors.push(messages.VALIDATION_ERROR.BEDID_REQUIRED)
    }
    if (!validator.isUUID(Uuid)) {
        validationErrors.push(messages.VALIDATION_ERROR.UNSUPPORTED_BEDID)
    }
    if (validationErrors.length > 0) {
        return next(createValidationError(validationErrors, req.language))
    }

    const t = await db.sequelize.transaction();
    try {
        const floor = db.floorModel.findOne({ where: { Uuid: Uuid } })
        if (!floor) {
            return next(createNotfounderror([messages.ERROR.FLOOR_NOT_FOUND], req.language))
        }
        if (floor.Isactive === false) {
            return next(createAccessDenied([messages.ERROR.FLOOR_NOT_ACTIVE], req.language))
        }

        await db.floorModel.update({
            ...req.body,
            Updateduser: "System",
            Updatetime: new Date(),
        }, { where: { Uuid: Uuid } }, { transaction: t })

        await t.commit()
    } catch (error) {
        return next(sequelizeErrorCatcher(error))
    }
    GetFloors(req, res, next)
}

async function DeleteFloor(req, res, next) {

    let validationErrors = []
    const Uuid = req.params.floorId

    if (!Uuid) {
        validationErrors.push(messages.VALIDATION_ERROR.BEDID_REQUIRED)
    }
    if (!validator.isUUID(Uuid)) {
        validationErrors.push(messages.VALIDATION_ERROR.UNSUPPORTED_BEDID)
    }
    if (validationErrors.length > 0) {
        return next(createValidationError(validationErrors, req.language))
    }

    try {
        const floor = db.floorModel.findOne({ where: { Uuid: Uuid } })
        if (!floor) {
            return next(createNotfounderror([messages.ERROR.FLOOR_NOT_FOUND], req.language))
        }
        if (floor.Isactive === false) {
            return next(createAccessDenied([messages.ERROR.FLOOR_NOT_ACTIVE], req.language))
        }
        const t = await db.sequelize.transaction();

        await db.floorModel.destroy({ where: { Uuid: Uuid }, transaction: t });
        await t.commit();
    } catch (error) {
        await t.rollback();
        return next(sequelizeErrorCatcher(error))
    }
    GetFloors(req, res, next)
}

module.exports = {
    GetFloors,
    GetFloor,
    AddFloor,
    UpdateFloor,
    DeleteFloor,
}