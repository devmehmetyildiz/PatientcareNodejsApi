export const ROUTES = {
    DATATABLE: 'Datatable',

    AUTH: 'Auth',
    ROLE: 'Roles',
    USER: 'Users',
    USERNOTIFICATION: 'Usernotifications',

    ACTIVEPATIENT: 'Activepatient',
    PATIENT: 'Patients',
    TODO: 'Todos',

    TRAINING: 'Trainings',
    CLAIMPAYMENT: 'Claimpayments',
    CLAIMPAYMENTPARAMETER: 'Claimpaymentparameters',
    PATIENTTYPE: 'Patienttypes',
    PATIENTREPORT: 'Patientreport',
    PATIENTDEFINE: 'Patientdefines',
    PERSONEL: 'Personels',
    COMPANYCASHMOVEMENT: 'Companycashmovements',
    PATIENTCASHMOVEMENT: 'Patientcashmovements',
    PATIENTCASHREGISTER: 'Patientcashregisters',
    CAREPLAN: 'Careplans',
    PROFESSION: 'Professions',
    PERSONELPRESETTING: 'Personelpresettings',
    PROFESSIONPRESETTING: 'Professionpresettings',
    PERSONELSHIFT: 'Personelshifts',
    PERSONELSHIFTDETAIL: 'Personelshiftdetails',
    PATIENTEVENTDEFINE: 'Patienteventdefines',
    PATIENTHEALTHCASEDEFINE: 'Patienthealthcasedefines',
    PATIENTHEALTHCASE: 'Patienthealthcases',
    PATIENTEVENTMOVEMENT: 'Patienteventmovements',
    SURVEY: 'Surveys',
    PATIENTACTIVITY: 'Patientactivities',
    PATIENTVISIT: 'Patientvisits',
    USERINCIDENT: 'Userincidents',
    OVERVIEWCARD: 'Overviewcards',

    COSTUMERTYPE: 'Costumertypes',
    CASE: 'Cases',
    DEPARTMENT: 'Departments',
    FILE: 'Files',
    STATION: 'Stations',
    STOCKDEFINE: 'Stockdefines',
    UNIT: 'Units',
    ROOM: 'Rooms',
    BED: 'Beds',
    USAGETYPE: 'Usagetypes',
    FLOOR: 'Floors',
    SHIFTDEFINE: 'Shiftdefines',
    CAREPLANPARAMETER: 'Careplanparameters',

    PURCHASEORDER: 'Purchaseorders',
    STOCK: 'Stocks',
    STOCKMOVEMENT: 'Stockmovements',
    STOCKTYPE: 'Stocktypes',
    STOCKTYPEGROUP: 'Stocktypegroups',
    WAREHOUSE: 'Warehouses',
    EQUIPMENTGROUP: 'Equipmentgroups',
    EQUIPMENT: 'Equipments',
    BREAKDOWN: 'Breakdowns',
    MAINTEANCEPLAN: 'Mainteanceplans',
    MAINTEANCE: 'Mainteancies',

    TODODEFINE: 'Tododefines',
    TODOGROUPDEFINE: 'Todogroupdefines',
    PATIENTMOVEMENT: 'Patientmovements',
    CHECKPERIOD: 'Checkperiods',
    PERIOD: 'Periods',
    SUPPORTPLAN: 'Supportplans',
    SUPPORTPLANLIST: 'Supportplanlists',

    MAILSETTING: 'Mailsettings',
    PRINTTEMPLATE: 'Printtemplates',
    RULE: 'Rules',
    LOG: 'Logs',

}

export const MOVEMENTTYPES = [
    { Name: "STOKTAN DÜŞME", value: -1, color: 'gray' },
    { Name: "TRANSFER", value: 0, color: 'green' },
    { Name: "STOK EKLEMESİ", value: 1, color: 'orange' },
]

export const PATIENTMOVEMENTTYPE = [
    { Name: "İŞLEM YOK", value: 0 },
    { Name: "KURUMDA", value: 1 },
    { Name: "İLK KAYITTA", value: 2 },
    { Name: "HASTANEDE", value: 3 },
    { Name: "ÖLÜM", value: 4 },
    { Name: "KONTROL", value: 5 },
    { Name: "AYRILMIŞ", value: 6 },
    { Name: "YER DEĞİŞİKLİĞİ", value: 7 },
    { Name: "İZİNDE", value: 8 },
]

export const COL_PROPS = {
    sortable: true,
    canGroupBy: true,
    canFilter: true
}

export const PERSONEL_CASE_TYPE_PASSIVE = 0
export const PERSONEL_CASE_TYPE_START = 1
export const PERSONEL_CASE_TYPE_WORK = 2
export const PERSONEL_CASE_TYPE_PERMIT = 3
export const PERSONEL_CASE_TYPE_ANNUALPERMIT = 4

export const PERSONEL_MOVEMENTTYPES_WORKSTART = 'userworkstart'
export const PERSONEL_MOVEMENTTYPES_WORKEND = 'userworkend'
export const PERSONEL_MOVEMENTTYPES_CASECHANGE = 'usercasechange'

export const PURCHASEORDER_MOVEMENTTYPES_CREATE = 'create'
export const PURCHASEORDER_MOVEMENTTYPES_UPDATE = 'update'
export const PURCHASEORDER_MOVEMENTTYPES_DELETE = 'delete'
export const PURCHASEORDER_MOVEMENTTYPES_CHECK = 'check'
export const PURCHASEORDER_MOVEMENTTYPES_APPROVE = 'approve'
export const PURCHASEORDER_MOVEMENTTYPES_COMPLETE = 'complete'
export const PURCHASEORDER_MOVEMENTTYPES_CANCELCHECK = 'cancelcheck'
export const PURCHASEORDER_MOVEMENTTYPES_CANCELAPPROVE = 'cancelapprove'

export const PATIENTS_MOVEMENTTYPES_CREATE = 'patientcreate'
export const PATIENTS_MOVEMENTTYPES_UPDATE = 'patientupdate'
export const PATIENTS_MOVEMENTTYPES_DELETE = 'patientdelete'
export const PATIENTS_MOVEMENTTYPES_CHECK = 'patientcheck'
export const PATIENTS_MOVEMENTTYPES_APPROVE = 'patientapprove'
export const PATIENTS_MOVEMENTTYPES_COMPLETE = 'patientcomplete'
export const PATIENTS_MOVEMENTTYPES_CANCELCHECK = 'patientcancelcheck'
export const PATIENTS_MOVEMENTTYPES_CANCELAPPROVE = 'patientcancelapprove'
export const PATIENTS_MOVEMENTTYPES_LEFT = 'patientleft'
export const PATIENTS_MOVEMENTTYPES_DEAD = 'patientdead'
export const PATIENTS_MOVEMENTTYPES_CASECHANGE = 'patientcasechange'
export const PATIENTS_MOVEMENTTYPES_PLACECHANGE = 'patientplacechange'

export const SUPPORTPLAN_TYPE_CAREPLAN = 0
export const SUPPORTPLAN_TYPE_PSYCHOSOCIAL = 1
export const SUPPORTPLAN_TYPE_RATING = 2

export const ANNUALTYPES = [
    { Name: "ÇALIŞIYOR", value: 0, color: 'green' },
    { Name: "İZİNLİ", value: 1, color: 'red' },
]

export const DELIVERY_TYPE_PATIENT = 0
export const DELIVERY_TYPE_WAREHOUSE = 1
export const DELIVERY_TYPES = [
    { Name: { tr: 'HASTAYA', en: 'TO PATIENT' }, value: DELIVERY_TYPE_PATIENT, key: DELIVERY_TYPE_PATIENT },
    { Name: { tr: 'AMBARA', en: 'TO WAREHOUSE' }, value: DELIVERY_TYPE_WAREHOUSE, key: DELIVERY_TYPE_WAREHOUSE },
]

export const LIVE_OPTION_LIVING = false
export const LIVE_OPTION_NOT_LIVING = true
export const LIVE_OPTION = [
    { key: 0, text: { en: "NO, NOT LIVING", tr: 'HAYIR, YAŞAMIYOR' }, value: LIVE_OPTION_NOT_LIVING },
    { key: 1, text: { en: "YES, LIVING", tr: 'EVET, YAŞIYOR' }, value: LIVE_OPTION_LIVING },
]


export const GENDER_OPTION_MEN = "0"
export const GENDER_OPTION_WOMEN = "1"
export const GENDER_OPTION = [
    { key: 0, text: { en: "MEN", tr: 'ERKEK' }, value: GENDER_OPTION_MEN },
    { key: 1, text: { en: "WOMEN", tr: 'KADIN' }, value: GENDER_OPTION_WOMEN },
]

export const AFFINITY_OPTION_OWN = "0"
export const AFFINITY_OPTION_STEP = "1"
export const AFFINITY_OPTION = [
    { key: 0, text: { en: "OWN", tr: 'ÖZ' }, value: AFFINITY_OPTION_OWN },
    { key: 1, text: { en: "STEP", tr: 'ÜVEY' }, value: AFFINITY_OPTION_STEP },
]

export const MEDICALBOARDREPORT_OPTION_SPIRITUAL = "0"
export const MEDICALBOARDREPORT_OPTION_PHYSICAL = "1"
export const MEDICALBOARDREPORT_OPTION_MENTAL = "2"
export const MEDICALBOARDREPORT_OPTION = [
    { key: 0, text: { tr: "RUHSAL", en: 'SPIRITUAL' }, value: MEDICALBOARDREPORT_OPTION_SPIRITUAL },
    { key: 1, text: { tr: "BEDENSEL", en: 'PHYSICAL' }, value: MEDICALBOARDREPORT_OPTION_PHYSICAL },
    { key: 2, text: { tr: "ZİHİNSEL", en: 'MENTAL' }, value: MEDICALBOARDREPORT_OPTION_MENTAL },
]

export const DEPENDENCY_OPTION_FULLY = "0"
export const DEPENDENCY_OPTION_PARTIAL = "1"
export const DEPENDENCY_OPTION_NON = "2"
export const DEPENDENCY_OPTION = [
    { key: 0, text: { tr: "TAM BAĞIMLI", en: 'FULLY DEPENDENCY' }, value: MEDICALBOARDREPORT_OPTION_SPIRITUAL },
    { key: 1, text: { tr: "KISMİ BAĞIMLI", en: 'PARTIAL DEPENDENCY' }, value: MEDICALBOARDREPORT_OPTION_PHYSICAL },
    { key: 2, text: { tr: "BAĞIMSIZ", en: 'NON DEPENDENCY' }, value: MEDICALBOARDREPORT_OPTION_MENTAL },
]

export const CASE_STATUS_DEACTIVE = -1
export const CASE_STATUS_PASSIVE = 0
export const CASE_STATUS_COMPLETE = 1
export const CASE_STATUS_START = 2

export const CASE_PATIENT_STATUS_PASSIVE = 0
export const CASE_PATIENT_STATUS_ONORGANIZATION = 1
export const CASE_PATIENT_STATUS_FIRST_REGISTER = 2
export const CASE_PATIENT_STATUS_ONHOSPITAL = 3
export const CASE_PATIENT_STATUS_DEATH = 4
export const CASE_PATIENT_STATUS_CHECK = 5
export const CASE_PATIENT_STATUS_LEFT = 6
export const CASE_PATIENT_STATUS_PLACE_CHANGE = 7
export const CASE_PATIENT_STATUS_NOTONORGANIZATION = 8

export const STOCK_TYPE_WAREHOUSE = 0
export const STOCK_TYPE_PURCHASEORDER = 1
export const STOCK_TYPE_PATIENT = 2

export const CLAIMPAYMENT_TYPE_PATIENT = 0
export const CLAIMPAYMENT_TYPE_BHKS = 1
export const CLAIMPAYMENT_TYPE_KYS = 2
export const CLAIMPAYMENT_TYPE_PERSONEL = 3

export const TRAINING_TYPE_ORGANIZATION = 0
export const TRAINING_TYPE_COMPANY = 1

export const CAREPLANPARAMETER_TYPE_HELPSTATU = 0
export const CAREPLANPARAMETER_TYPE_PRESENTATIONPERIOD = 1
export const CAREPLANPARAMETER_TYPE_PRESENTATIONMAKINGTYPE = 2
export const CAREPLANPARAMETER_TYPE_RATING = 3
export const CAREPLANPARAMETER_TYPE_CURRENTSITUATIONRATİNG = 4
export const CAREPLANPARAMETER_TYPE_PLANNEDSITUATIONRATİNG = 5
export const CAREPLANPARAMETER_TYPE_PURPOSETARGET = 6
export const CAREPLANPARAMETER_TYPE_PURPOSETARGETWORKS = 7

export const SURVEY_TYPE_PATIENT = 0
export const SURVEY_TYPE_PATIENTCONTACT = 1
export const SURVEY_TYPE_USER = 2

export const USER_INCIDENT_TOPERSONELS = 0
export const USER_INCIDENT_BYCONTACT = 1
export const USER_INCIDENT_PHYSICAL = 2

export const TRAINING_TYPEDETAIL_USER = 0
export const TRAINING_TYPEDETAIL_PATIENT = 1
export const TRAINING_TYPEDETAIL_PATIENTCONTACT = 2

export const PATIENTEVENT_MOVEMENT_TYPE_INDOOR = 0
export const PATIENTEVENT_MOVEMENT_TYPE_OUTDOOR = 1

export const STORAGE_KEY_PATIENTCARE_ACCESSTOKEN = 'ELDERCAMP_STORAGE_KEY_1'
export const STORAGE_KEY_PATIENTCARE_REFRESHTOKEN = 'ELDERCAMP_STORAGE_KEY_2'
export const STORAGE_KEY_PATIENTCARE_LANGUAGE = 'ELDERCAMP_STORAGE_KEY_3'
export const STORAGE_KEY_PATIENTCARE_EXPIRETIME = 'ELDERCAMP_STORAGE_KEY_4'
export const STORAGE_KEY_PATIENTCARE_SHOWEDVERSION = 'ELDERCAMP_STORAGE_KEY_5'

export const CASH_TYPE_OUTCOME = -1
export const CASH_TYPE_INCOME = 1

export const USERNAME_REGEX = /^[a-z][a-z0-9]{2,24}$/

export const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;