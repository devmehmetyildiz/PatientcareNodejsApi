const createAccessDenied = require("../../Utilities/Error").createAccessDenied
const permissionchecker = require("../../Utilities/Permissionchecker")

async function GetStockdefines(req, res, next) {
    if ((req.identity.privileges && req.identity.privileges.includes('stockdefineview')) || permissionchecker(req)) {
        next()
    } else {
        next(createAccessDenied('Stockdefines View', req.language, { en: 'Stockdefines View', tr: 'Stockdefines View' }))
    }
}

async function GetStockdefine(req, res, next) {
    if ((req.identity.privileges && req.identity.privileges.includes('stockdefineview')) || permissionchecker(req)) {
        next()
    } else {
        next(createAccessDenied('Stockdefines View', req.language, { en: 'Stockdefines View', tr: 'Stockdefines View' }))
    }
}

async function AddStockdefine(req, res, next) {
    if ((req.identity.privileges && req.identity.privileges.includes('stockdefineadd')) || permissionchecker(req)) {
        next()
    } else {
        next(createAccessDenied('Stockdefines Add', req.language, { en: 'Stockdefines Add', tr: 'Stockdefines Add' }))
    }
}

async function UpdateStockdefine(req, res, next) {
    if ((req.identity.privileges && req.identity.privileges.includes('stockdefineupdate')) || permissionchecker(req)) {
        next()
    } else {
        next(createAccessDenied('Stockdefines Update', req.language, { en: 'Stockdefines Update', tr: 'Stockdefines Update' }))
    }
}

async function DeleteStockdefine(req, res, next) {
    if ((req.identity.privileges && req.identity.privileges.includes('stockdefinedelete')) || permissionchecker(req)) {
        next()
    } else {
        next(createAccessDenied('Stockdefines Delete', req.language, { en: 'Stockdefines Delete', tr: 'Stockdefines Delete' }))
    }
}

module.exports = {
    GetStockdefines,
    GetStockdefine,
    AddStockdefine,
    UpdateStockdefine,
    DeleteStockdefine,
}