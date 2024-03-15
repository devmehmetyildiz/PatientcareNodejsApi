const createAccessDenied = require("../../Utilities/Error").createAccessDenied
const permissionchecker = require("../../Utilities/Permissionchecker")

async function GetPatientcashregisters(req, res, next) {
    if ((req.identity.privileges && req.identity.privileges.includes('patientcashregisterscreen')) || permissionchecker(req)) {
        next()
    } else {
        next(createAccessDenied('Patientcashregisters screen', req.language, { en: 'Patientcashregisters screen', tr: 'Patientcashregisters screen' }))
    }
}

async function GetPatientcashregister(req, res, next) {
    if ((req.identity.privileges && req.identity.privileges.includes('patientcashregisterscreen')) || permissionchecker(req)) {
        next()
    } else {
        next(createAccessDenied('Patientcashregisters screen', req.language, { en: 'Patientcashregisters screen', tr: 'Patientcashregisters screen' }))
    }
}

async function AddPatientcashregister(req, res, next) {
    if ((req.identity.privileges && req.identity.privileges.includes('patientcashregisteradd')) || permissionchecker(req)) {
        next()
    } else {
        next(createAccessDenied('Patientcashregisters Add', req.language, { en: 'Patientcashregisters Add', tr: 'Patientcashregisters Add' }))
    }
}

async function UpdatePatientcashregister(req, res, next) {
    if ((req.identity.privileges && req.identity.privileges.includes('patientcashregisterupdate')) || permissionchecker(req)) {
        next()
    } else {
        next(createAccessDenied('Patientcashregisters Update', req.language, { en: 'Patientcashregisters Update', tr: 'Patientcashregisters Update' }))
    }
}

async function DeletePatientcashregister(req, res, next) {
    if ((req.identity.privileges && req.identity.privileges.includes('patientcashregisterdelete')) || permissionchecker(req)) {
        next()
    } else {
        next(createAccessDenied('Patientcashregisters Delete', req.language, { en: 'Patientcashregisters Delete', tr: 'Patientcashregisters Delete' }))
    }
}

module.exports = {
    GetPatientcashregisters,
    GetPatientcashregister,
    AddPatientcashregister,
    UpdatePatientcashregister,
    DeletePatientcashregister,
}