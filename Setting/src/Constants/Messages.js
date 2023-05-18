const messages = {
  ERROR: {
    CASE_NOT_FOUND: {
      code: 'CASE_NOT_FOUND', description: {
        en: 'Case not found',
        tr: 'Durum bulunamadı',
      }
    },
    CASE_NOT_ACTIVE: {
      code: 'CASE_NOT_ACTIVE', description: {
        en: 'Case not active',
        tr: 'Durum aktif değil',
      }
    },
    DEPARTMENT_NOT_FOUND: {
      code: 'DEPARTMENT_NOT_FOUND', description: {
        en: 'Department not found',
        tr: 'Departman bulunamadı',
      }
    },
    DEPARTMENT_NOT_ACTIVE: {
      code: 'DEPARTMENT_NOT_ACTIVE', description: {
        en: 'Department not active',
        tr: 'Departman aktif değil',
      }
    },
    CHECKPERIOD_NOT_FOUND: {
      code: 'CHECKPERIOD_NOT_FOUND', description: {
        en: 'Checkperiod not found',
        tr: 'Kontrol periyodu bulunamadı',
      }
    },
    CHECKPERIOD_NOT_ACTIVE: {
      code: 'CHECKPERIOD_NOT_ACTIVE', description: {
        en: 'Checkperiod not active',
        tr: 'Kontrol periyodu aktif değil',
      }
    },
    COSTUMERTYPE_NOT_FOUND: {
      code: 'COSTUMERTYPE_NOT_FOUND', description: {
        en: 'Costumer type not found',
        tr: 'Müşteri türü bulunamadı',
      }
    },
    COSTUMERTYPE_NOT_ACTIVE: {
      code: 'COSTUMERTYPE_NOT_ACTIVE', description: {
        en: 'Costumer type not active',
        tr: 'Müşteri türü aktif değil',
      }
    },
    PATIENTTYPE_NOT_FOUND: {
      code: 'PATIENTTYPE_NOT_FOUND', description: {
        en: 'Patient type not found',
        tr: 'Hasta türü bulunamadı',
      }
    },
    PATIENTTYPE_NOT_ACTIVE: {
      code: 'PATIENTTYPE_NOT_ACTIVE', description: {
        en: 'Patienttype not active',
        tr: 'Hasta türü aktif değil',
      }
    },
    PERIOD_NOT_FOUND: {
      code: 'PERIOD_NOT_FOUND', description: {
        en: 'Period not found',
        tr: 'Periyot bulunamadı',
      }
    },
    PERIOD_NOT_ACTIVE: {
      code: 'PERIOD_NOT_ACTIVE', description: {
        en: 'Period not active',
        tr: 'Periyot aktif değil',
      }
    },
    STATION_NOT_FOUND: {
      code: 'STATION_NOT_FOUND', description: {
        en: 'Station not found',
        tr: 'İstasyon bulunamadı',
      }
    },
    STATION_NOT_ACTIVE: {
      code: 'STATION_NOT_ACTIVE', description: {
        en: 'Station not active',
        tr: 'İstasyon aktif değil',
      }
    },
    TODODEFINE_NOT_FOUND: {
      code: 'TODODEFINE_NOT_FOUND', description: {
        en: 'Station not found',
        tr: 'İstasyon bulunamadı',
      }
    },
    TODODEFINE_NOT_ACTIVE: {
      code: 'TODODEFINE_NOT_ACTIVE', description: {
        en: 'Station not active',
        tr: 'İstasyon aktif değil',
      }
    },

  },
  VALIDATION_ERROR: {
    NAME_REQUIRED: {
      code: 'NAME_REQUIRED', description: {
        en: 'The name required',
        tr: 'Bu işlem için isim gerekli',
      }
    },
    SHORTNAME_REQUIRED: {
      code: 'SHORTNAME_REQUIRED', description: {
        en: 'The shortname required',
        tr: 'Bu işlem için kısaltma gerekli',
      }
    },
    CASECOLOR_REQUIRED: {
      code: 'CASECOLOR_REQUIRED', description: {
        en: 'The casecolor required',
        tr: 'Bu işlem için durum rengi gerekli',
      }
    },
    DEPARTMENTS_REQUIRED: {
      code: 'DEPARTMENTS_REQUIRED', description: {
        en: 'The departments required',
        tr: 'Bu işlem için departmanlar gerekli',
      }
    },
    CASEID_REQUIRED: {
      code: 'CASEID_REQUIRED', description: {
        en: 'The caseId required',
        tr: 'Bu işlem için caseid bilgisi gerekli',
      }
    },
    DEPARTMENTID_REQUIRED: {
      code: 'DEPARTMENTID_REQUIRED', description: {
        en: 'The departmentId required',
        tr: 'Bu işlem için departmentId bilgisi gerekli',
      }
    },
    UNSUPPORTED_CASEID: {
      code: 'UNSTUPPORTED_CASEID', description: {
        en: 'The caseId is not supported',
        tr: 'geçersiz durum numarası',
      }
    },
    UNSUPPORTED_DEPARTMENTID: {
      code: 'UNSUPPORTED_DEPARTMENTID', description: {
        en: 'The department id is not supported',
        tr: 'geçersiz departman numarası',
      }
    },
    PERIODTYPE_REQUIRED: {
      code: 'PERIODTYPE_REQUIRED', description: {
        en: 'The Periodtype required',
        tr: 'Periyot türü gereklidir',
      }
    },
    OCCUREDDAYS_REQUIRED: {
      code: 'OCCUREDDAYS_REQUIRED', description: {
        en: 'The Occureddays is required',
        tr: 'Gerçekleşme günleri gereklidir',
      }
    },
    PERIODS_REQUIRED: {
      code: 'PERIODS_REQUIRED', description: {
        en: 'The Periods is required',
        tr: 'Periyotlar gereklidir',
      }
    },
    CHECKPERIODID_REQUIRED: {
      code: 'CHECKPERIODID_REQUIRED', description: {
        en: 'The Checkperiodid is required',
        tr: 'Kontrol periyot idsi gereklidir',
      }
    },
    UNSUPPORTED_CHECKPERIODID: {
      code: 'UNSUPPORTED_CHECKPERIODID', description: {
        en: 'The Checkperiodid is unsupported',
        tr: 'Geçersiz kontrol periyot idsi',
      }
    },
    UNSUPPORTED_PERIODID: {
      code: 'UNSUPPORTED_PERIODID', description: {
        en: 'The Periodid is unsupported',
        tr: 'Geçersiz  periyot idsi',
      }
    },
    UNSUPPORTED_COSTUMERTYPEID: {
      code: 'UNSUPPORTED_COSTUMERTYPEID', description: {
        en: 'The costumertypeid is unsupported',
        tr: 'Geçersiz  costumertypeid',
      }
    },
    UNSUPPORTED_PATIENTTYPEID: {
      code: 'UNSUPPORTED_PATIENTTYPEID', description: {
        en: 'The patienttypeid is unsupported',
        tr: 'Geçersiz  patienttypeid',
      }
    },
    UNSUPPORTED_STATIONID: {
      code: 'UNSUPPORTED_COSTUMERTYPEID', description: {
        en: 'The costumertypeid is unsupported',
        tr: 'Geçersiz  costumertypeid',
      }
    },
    UNSUPPORTED_PERIODID: {
      code: 'UNSUPPORTED_PERIODID', description: {
        en: 'The periodid is unsupported',
        tr: 'Geçersiz  periodid',
      }
    },
    UNSUPPORTED_STATIONID: {
      code: 'UNSUPPORTED_STATIONID', description: {
        en: 'The stationid is unsupported',
        tr: 'Geçersiz  stationid',
      }
    },
    COSTUMERTYPEID_REQUIRED: {
      code: 'COSTUMERTYPEID_REQUIRED', description: {
        en: 'The costumertypeid required',
        tr: 'Bu işlem için costumertypeid bilgisi gerekli',
      }
    },
    PERIODID_REQUIRED: {
      code: 'PERIODID_REQUIRED', description: {
        en: 'The periodid required',
        tr: 'Bu işlem için periodid bilgisi gerekli',
      }
    },
    STATIONID_REQUIRED: {
      code: 'STATIONID_REQUIRED', description: {
        en: 'The stationid required',
        tr: 'Bu işlem için stationid bilgisi gerekli',
      }
    },
    PATIENTTYPEID_REQUIRED: {
      code: 'PATIENTTYPEID_REQUIRED', description: {
        en: 'The patienttypeId required',
        tr: 'Bu işlem için patienttypeId bilgisi gerekli',
      }
    },
    STATIONS_REQUIRED: {
      code: 'STATIONS_REQUIRED', description: {
        en: 'The stations required',
        tr: 'Bu işlem için istasyonlar gerekli',
      }
    },
    ISHAVEPATIENTS_REQUIRED: {
      code: 'ISHAVEPATIENTS_REQUIRED', description: {
        en: 'The ishavepatients required',
        tr: 'Bu işlem için hastalara sahipmi bilgisi gerekli',
      }
    },
    CHECKTIME_REQUIRED: {
      code: 'CHECKTIME_REQUIRED', description: {
        en: 'Check time required',
        tr: 'Bu işlem için kontrol süresi bilgisi gerekli',
      }
    },
    OCCUREDTIME_REQUIRED: {
      code: 'OCCUREDTIME_REQUIRED', description: {
        en: 'The occured time required',
        tr: 'Bu işlem için gerçekleşme zamanı bilgisi gerekli',
      }
    },
    UNSUPPORTED_TODODEFINEID: {
      code: 'UNSUPPORTED_TODODEFINEID', description: {
        en: 'The tododefineid is unsupported',
        tr: 'Geçersiz tododefineid',
      }
    },
    TODODEFINEID_REQUIRED: {
      code: 'TODODEFINEID_REQUIRED', description: {
        en: 'The tododefineid is required',
        tr: 'Bu işlem için tododefineid gerekli',
      }
    },
    INFO_REQUIRED: {
      code: 'INFO_REQUIRED', description: {
        en: 'The info required',
        tr: 'Bu işlem için açıklama gerekli',
      }
    },
    ISREQUIRED_REQUIRED: {
      code: 'INFO_REQUIRED', description: {
        en: 'The isrequired required',
        tr: 'Bu işlem için zorunlu mu? bilgisi gerekli',
      }
    },
    ISNEEDACTIVATION_REQUIRED: {
      code: 'ISNEEDACTIVATION_REQUIRED', description: {
        en: 'The isneedactivation required',
        tr: 'Bu işlem için aktivasyon gereklimi bilgisi gerekli',
      }
    },
  }

}
module.exports = messages
