const Priveleges = [
    { code: 'basic', text: 'Basic', group: ['BaseGroup'], required: [] },
    { code: 'admin', text: 'Admin', group: ['BaseGroup'], required: [] },

    { code: 'bedscreen', text: 'Beds Screen', group: ['Beds'], required: [] },
    { code: 'bedview', text: 'Beds View', group: ['Beds'], required: [] },
    { code: 'bedadd', text: 'Beds Add', group: ['Beds'], required: [] },
    { code: 'bedupdate', text: 'Beds Update', group: ['Beds'], required: [] },
    { code: 'beddelete', text: 'Beds Delete', group: ['Beds'], required: [] },
    { code: 'bedmanageview', text: 'Beds Manage View', group: ['Beds'], required: [] },
    { code: 'bedgetreport', text: 'Beds Get Report', group: ['Beds'], required: [] },

    { code: 'casescreen', text: 'Cases Screen', group: ['Cases'], required: [] },
    { code: 'caseview', text: 'Cases View', group: ['Cases'], required: [] },
    { code: 'caseadd', text: 'Cases Add', group: ['Cases'], required: [] },
    { code: 'caseupdate', text: 'Cases Update', group: ['Cases'], required: [] },
    { code: 'casedelete', text: 'Cases Delete', group: ['Cases'], required: [] },
    { code: 'casemanageview', text: 'Cases Manage View', group: ['Cases'], required: [] },
    { code: 'casegetreport', text: 'Cases Get Report', group: ['Cases'], required: [] },

    { code: 'checkperiodscreen', text: 'Checkperiods Screen', group: ['Checkperiods'], required: [] },
    { code: 'checkperiodview', text: 'Checkperiods View', group: ['Checkperiods'], required: [] },
    { code: 'checkperiodadd', text: 'Checkperiods Add', group: ['Checkperiods'], required: [] },
    { code: 'checkperiodupdate', text: 'Checkperiods Update', group: ['Checkperiods'], required: [] },
    { code: 'checkperioddelete', text: 'Checkperiods Delete', group: ['Checkperiods'], required: [] },
    { code: 'checkperiodmanageview', text: 'Checkperiods Manage View', group: ['Checkperiods'], required: [] },
    { code: 'checkperiodgetreport', text: 'Checkperiods Get Report', group: ['Checkperiods'], required: [] },

    { code: 'costumertypescreen', text: 'Costumertypes Screen', group: ['Costumertypes'], required: [] },
    { code: 'costumertypeview', text: 'Costumertypes View', group: ['Costumertypes'], required: [] },
    { code: 'costumertypeadd', text: 'Costumertypes Add', group: ['Costumertypes'], required: [] },
    { code: 'costumertypeupdate', text: 'Costumertypes Update', group: ['Costumertypes'], required: [] },
    { code: 'costumertypedelete', text: 'Costumertypes Delete', group: ['Costumertypes'], required: [] },
    { code: 'costumertypemanageview', text: 'Costumertypes Manage View', group: ['Costumertypes'], required: [] },
    { code: 'costumertypegetreport', text: 'Costumertypes Get Report', group: ['Costumertypes'], required: [] },

    { code: 'departmentscreen', text: 'Departments Screen', group: ['Departments'], required: [] },
    { code: 'departmentview', text: 'Departments View', group: ['Departments'], required: [] },
    { code: 'departmentadd', text: 'Departments Add', group: ['Departments'], required: [] },
    { code: 'departmentupdate', text: 'Departments Update', group: ['Departments'], required: [] },
    { code: 'departmentdelete', text: 'Departments Delete', group: ['Departments'], required: [] },
    { code: 'departmentmanageview', text: 'Departments Manage View', group: ['Departments'], required: [] },
    { code: 'departmentgetreport', text: 'Departments Get Report', group: ['Departments'], required: [] },

    { code: 'floorscreen', text: 'Floors Screen', group: ['Floors'], required: [] },
    { code: 'floorview', text: 'Floors View', group: ['Floors'], required: [] },
    { code: 'flooradd', text: 'Floors Add', group: ['Floors'], required: [] },
    { code: 'floorupdate', text: 'Floors Update', group: ['Floors'], required: [] },
    { code: 'floordelete', text: 'Floors Delete', group: ['Floors'], required: [] },
    { code: 'floormanageview', text: 'Floors Manage View', group: ['Floors'], required: [] },
    { code: 'floorgetreport', text: 'Floors Get Report', group: ['Floors'], required: [] },

    { code: 'patienttypescreen', text: 'Patienttypes Screen', group: ['Patienttypes'], required: [] },
    { code: 'patienttypeview', text: 'Patienttypes View', group: ['Patienttypes'], required: [] },
    { code: 'patienttypeadd', text: 'Patienttypes Add', group: ['Patienttypes'], required: [] },
    { code: 'patienttypeupdate', text: 'Patienttypes Update', group: ['Patienttypes'], required: [] },
    { code: 'patienttypedelete', text: 'Patienttypes Delete', group: ['Patienttypes'], required: [] },
    { code: 'patienttypemanageview', text: 'Patienttypes Manage View', group: ['Patienttypes'], required: [] },
    { code: 'patienttypegetreport', text: 'Patienttypes Get Report', group: ['Patienttypes'], required: [] },

    { code: 'periodscreen', text: 'Periods Screen', group: ['Periods'], required: [] },
    { code: 'periodview', text: 'Periods View', group: ['Periods'], required: [] },
    { code: 'periodadd', text: 'Periods Add', group: ['Periods'], required: [] },
    { code: 'periodupdate', text: 'Periods Update', group: ['Periods'], required: [] },
    { code: 'perioddelete', text: 'Periods Delete', group: ['Periods'], required: [] },
    { code: 'periodmanageview', text: 'Periods Manage View', group: ['Periods'], required: [] },
    { code: 'periodgetreport', text: 'Periods Get Report', group: ['Periods'], required: [] },

    { code: 'roomscreen', text: 'Rooms Screen', group: ['Rooms'], required: [] },
    { code: 'roomview', text: 'Rooms View', group: ['Rooms'], required: [] },
    { code: 'roomadd', text: 'Rooms Add', group: ['Rooms'], required: [] },
    { code: 'roomupdate', text: 'Rooms Update', group: ['Rooms'], required: [] },
    { code: 'roomdelete', text: 'Rooms Delete', group: ['Rooms'], required: [] },
    { code: 'roommanageview', text: 'Rooms Manage View', group: ['Rooms'], required: [] },
    { code: 'roomgetreport', text: 'Rooms Get Report', group: ['Rooms'], required: [] },

    { code: 'shiftscreen', text: 'Shifts Screen', group: ['Shifts'], required: [] },
    { code: 'shiftview', text: 'Shifts View', group: ['Shifts'], required: [] },
    { code: 'shiftadd', text: 'Shifts Add', group: ['Shifts'], required: [] },
    { code: 'shiftupdate', text: 'Shifts Update', group: ['Shifts'], required: [] },
    { code: 'shiftdelete', text: 'Shifts Delete', group: ['Shifts'], required: [] },
    { code: 'shiftmanageview', text: 'Shifts Manage View', group: ['Shifts'], required: [] },
    { code: 'shiftgetreport', text: 'Shifts Get Report', group: ['Shifts'], required: [] },

    { code: 'stationscreen', text: 'Stations Screen', group: ['Stations'], required: [] },
    { code: 'stationview', text: 'Stations View', group: ['Stations'], required: [] },
    { code: 'stationadd', text: 'Stations Add', group: ['Stations'], required: [] },
    { code: 'stationupdate', text: 'Stations Update', group: ['Stations'], required: [] },
    { code: 'stationdelete', text: 'Stations Delete', group: ['Stations'], required: [] },
    { code: 'stationmanageview', text: 'Stations Manage View', group: ['Stations'], required: [] },
    { code: 'stationgetreport', text: 'Stations Get Report', group: ['Stations'], required: [] },

    { code: 'tododefinescreen', text: 'Tododefines Screen', group: ['Tododefines'], required: [] },
    { code: 'tododefineview', text: 'Tododefines View', group: ['Tododefines'], required: [] },
    { code: 'tododefineadd', text: 'Tododefines Add', group: ['Tododefines'], required: [] },
    { code: 'tododefineupdate', text: 'Tododefines Update', group: ['Tododefines'], required: [] },
    { code: 'tododefinedelete', text: 'Tododefines Delete', group: ['Tododefines'], required: [] },
    { code: 'tododefinemanageview', text: 'Tododefines Manage View', group: ['Tododefines'], required: [] },
    { code: 'tododefinegetreport', text: 'Tododefines Get Report', group: ['Tododefines'], required: [] },

    { code: 'todogroupdefinescreen', text: 'Todogroupdefines Screen', group: ['Todogroupdefines'], required: [] },
    { code: 'todogroupdefineview', text: 'Todogroupdefines View', group: ['Todogroupdefines'], required: [] },
    { code: 'todogroupdefineadd', text: 'Todogroupdefines Add', group: ['Todogroupdefines'], required: [] },
    { code: 'todogroupdefineupdate', text: 'Todogroupdefines Update', group: ['Todogroupdefines'], required: [] },
    { code: 'todogroupdefinedelete', text: 'Todogroupdefines Delete', group: ['Todogroupdefines'], required: [] },
    { code: 'todogroupdefinemanageview', text: 'Todogroupdefines Manage View', group: ['Todogroupdefines'], required: [] },
    { code: 'todogroupdefinegetreport', text: 'Todogroupdefines Get Report', group: ['Todogroupdefines'], required: [] },

    { code: 'unitscreen', text: 'Units Screen', group: ['Units'], required: [] },
    { code: 'unitview', text: 'Units View', group: ['Units'], required: [] },
    { code: 'unitadd', text: 'Units Add', group: ['Units'], required: [] },
    { code: 'unitupdate', text: 'Units Update', group: ['Units'], required: [] },
    { code: 'unitdelete', text: 'Units Delete', group: ['Units'], required: [] },
    { code: 'unitmanageview', text: 'Units Manage View', group: ['Units'], required: [] },
    { code: 'unitgetreport', text: 'Units Get Report', group: ['Units'], required: [] },

    { code: 'mailsettingscreen', text: 'Mailsettings Screen', group: ['Mailsettings'], required: [] },
    { code: 'mailsettingview', text: 'Mailsettings View', group: ['Mailsettings'], required: [] },
    { code: 'mailsettingadd', text: 'Mailsettings Add', group: ['Mailsettings'], required: [] },
    { code: 'mailsettingupdate', text: 'Mailsettings Update', group: ['Mailsettings'], required: [] },
    { code: 'mailsettingdelete', text: 'Mailsettings Delete', group: ['Mailsettings'], required: [] },
    { code: 'mailsettingmanageview', text: 'Mailsettings Manage View', group: ['Mailsettings'], required: [] },
    { code: 'mailsettinggetreport', text: 'Mailsettings Get Report', group: ['Mailsettings'], required: [] },

    { code: 'printtemplatescreen', text: 'Printtemplates Screen', group: ['Printtemplates'], required: [] },
    { code: 'printtemplateview', text: 'Printtemplates View', group: ['Printtemplates'], required: [] },
    { code: 'printtemplateadd', text: 'Printtemplates Add', group: ['Printtemplates'], required: [] },
    { code: 'printtemplateupdate', text: 'Printtemplates Update', group: ['Printtemplates'], required: [] },
    { code: 'printtemplatedelete', text: 'Printtemplates Delete', group: ['Printtemplates'], required: [] },
    { code: 'printtemplatemanageview', text: 'Printtemplates Manage View', group: ['Printtemplates'], required: [] },
    { code: 'printtemplategetreport', text: 'Printtemplates Get Report', group: ['Printtemplates'], required: [] },

    { code: 'rulescreen', text: 'Rules Screen', group: ['Rules'], required: [] },
    { code: 'ruleview', text: 'Rules View', group: ['Rules'], required: [] },
    { code: 'ruleadd', text: 'Rules Add', group: ['Rules'], required: [] },
    { code: 'ruleupdate', text: 'Rules Update', group: ['Rules'], required: [] },
    { code: 'ruledelete', text: 'Rules Delete', group: ['Rules'], required: [] },
    { code: 'rulemanageview', text: 'Rules Manage View', group: ['Rules'], required: [] },
    { code: 'rulegetreport', text: 'Rules Get Report', group: ['Rules'], required: [] },

    { code: 'patientstockscreen', text: 'Patientstocks Screen', group: ['Patientstocks'], required: [] },
    { code: 'patientstockview', text: 'Patientstocks View', group: ['Patientstocks'], required: [] },
    { code: 'patientstockadd', text: 'Patientstocks Add', group: ['Patientstocks'], required: [] },
    { code: 'patientstockupdate', text: 'Patientstocks Update', group: ['Patientstocks'], required: [] },
    { code: 'patientstockdelete', text: 'Patientstocks Delete', group: ['Patientstocks'], required: [] },
    { code: 'patientstockmanageview', text: 'Patientstocks Manage View', group: ['Patientstocks'], required: [] },
    { code: 'patientstockgetreport', text: 'Patientstocks Get Report', group: ['Patientstocks'], required: [] },

    { code: 'patientstockmovementscreen', text: 'Patientstockmovements Screen', group: ['Patientstockmovements'], required: [] },
    { code: 'patientstockmovementview', text: 'Patientstockmovements View', group: ['Patientstockmovements'], required: [] },
    { code: 'patientstockmovementadd', text: 'Patientstockmovements Add', group: ['Patientstockmovements'], required: [] },
    { code: 'patientstockmovementupdate', text: 'Patientstockmovements Update', group: ['Patientstockmovements'], required: [] },
    { code: 'patientstockmovementdelete', text: 'Patientstockmovements Delete', group: ['Patientstockmovements'], required: [] },
    { code: 'patientstockmovementmanageview', text: 'Patientstockmovements Manage View', group: ['Patientstockmovements'], required: [] },
    { code: 'patientstockmovementgetreport', text: 'Patientstockmovements Get Report', group: ['Patientstockmovements'], required: [] },

    { code: 'purchaseorderscreen', text: 'Purchaseorders Screen', group: ['Purchaseorders'], required: [] },
    { code: 'purchaseorderview', text: 'Purchaseorders View', group: ['Purchaseorders'], required: [] },
    { code: 'purchaseorderadd', text: 'Purchaseorders Add', group: ['Purchaseorders'], required: [] },
    { code: 'purchaseorderupdate', text: 'Purchaseorders Update', group: ['Purchaseorders'], required: [] },
    { code: 'purchaseorderdelete', text: 'Purchaseorders Delete', group: ['Purchaseorders'], required: [] },
    { code: 'purchaseordermanageview', text: 'Purchaseorders Manage View', group: ['Purchaseorders'], required: [] },
    { code: 'purchaseordergetreport', text: 'Purchaseorders Get Report', group: ['Purchaseorders'], required: [] },

    { code: 'purchaseorderstockscreen', text: 'Purchaseorderstocks Screen', group: ['Purchaseorderstocks'], required: [] },
    { code: 'purchaseorderstockview', text: 'Purchaseorderstocks View', group: ['Purchaseorderstocks'], required: [] },
    { code: 'purchaseorderstockadd', text: 'Purchaseorderstocks Add', group: ['Purchaseorderstocks'], required: [] },
    { code: 'purchaseorderstockupdate', text: 'Purchaseorderstocks Update', group: ['Purchaseorderstocks'], required: [] },
    { code: 'purchaseorderstockdelete', text: 'Purchaseorderstocks Delete', group: ['Purchaseorderstocks'], required: [] },
    { code: 'purchaseorderstockmanageview', text: 'Purchaseorderstocks Manage View', group: ['Purchaseorderstocks'], required: [] },
    { code: 'purchaseorderstockgetreport', text: 'Purchaseorderstocks Get Report', group: ['Purchaseorderstocks'], required: [] },

    { code: 'purchaseorderstockmovementscreen', text: 'Purchaseorderstockmovements Screen', group: ['Purchaseorderstockmovements'], required: [] },
    { code: 'purchaseorderstockmovementview', text: 'Purchaseorderstockmovements View', group: ['Purchaseorderstockmovements'], required: [] },
    { code: 'purchaseorderstockmovementadd', text: 'Purchaseorderstockmovements Add', group: ['Purchaseorderstockmovements'], required: [] },
    { code: 'purchaseorderstockmovementupdate', text: 'Purchaseorderstockmovements Update', group: ['Purchaseorderstockmovements'], required: [] },
    { code: 'purchaseorderstockmovementdelete', text: 'Purchaseorderstockmovements Delete', group: ['Purchaseorderstockmovements'], required: [] },
    { code: 'purchaseorderstockmovementmanageview', text: 'Purchaseorderstockmovements Manage View', group: ['Purchaseorderstockmovements'], required: [] },
    { code: 'purchaseorderstockmovementgetreport', text: 'Purchaseorderstockmovements Get Report', group: ['Purchaseorderstockmovements'], required: [] },

    { code: 'stockscreen', text: 'Stocks Screen', group: ['Stocks'], required: [] },
    { code: 'stockview', text: 'Stocks View', group: ['Stocks'], required: [] },
    { code: 'stockadd', text: 'Stocks Add', group: ['Stocks'], required: [] },
    { code: 'stockupdate', text: 'Stocks Update', group: ['Stocks'], required: [] },
    { code: 'stockdelete', text: 'Stocks Delete', group: ['Stocks'], required: [] },
    { code: 'stockmanageview', text: 'Stocks Manage View', group: ['Stocks'], required: [] },
    { code: 'stockgetreport', text: 'Stocks Get Report', group: ['Stocks'], required: [] },

    { code: 'stockdefinescreen', text: 'Stockdefines Screen', group: ['Stockdefines'], required: [] },
    { code: 'stockdefineview', text: 'Stockdefines View', group: ['Stockdefines'], required: [] },
    { code: 'stockdefineadd', text: 'Stockdefines Add', group: ['Stockdefines'], required: [] },
    { code: 'stockdefineupdate', text: 'Stockdefines Update', group: ['Stockdefines'], required: [] },
    { code: 'stockdefinedelete', text: 'Stockdefines Delete', group: ['Stockdefines'], required: [] },
    { code: 'stockdefinemanageview', text: 'Stockdefines Manage View', group: ['Stockdefines'], required: [] },
    { code: 'stockdefinegetreport', text: 'Stockdefines Get Report', group: ['Stockdefines'], required: [] },

    { code: 'stockmovementscreen', text: 'Stockmovements Screen', group: ['Stockmovements'], required: [] },
    { code: 'stockmovementview', text: 'Stockmovements View', group: ['Stockmovements'], required: [] },
    { code: 'stockmovementadd', text: 'Stockmovements Add', group: ['Stockmovements'], required: [] },
    { code: 'stockmovementupdate', text: 'Stockmovements Update', group: ['Stockmovements'], required: [] },
    { code: 'stockmovementdelete', text: 'Stockmovements Delete', group: ['Stockmovements'], required: [] },
    { code: 'stockmovementmanageview', text: 'Stockmovements Manage View', group: ['Stockmovements'], required: [] },
    { code: 'stockmovementgetreport', text: 'Stockmovements Get Report', group: ['Stockmovements'], required: [] },

    { code: 'warehousescreen', text: 'Warehouses Screen', group: ['Warehouses'], required: [] },
    { code: 'warehouseview', text: 'Warehouses View', group: ['Warehouses'], required: [] },
    { code: 'warehouseadd', text: 'Warehouses Add', group: ['Warehouses'], required: [] },
    { code: 'warehouseupdate', text: 'Warehouses Update', group: ['Warehouses'], required: [] },
    { code: 'warehousedelete', text: 'Warehouses Delete', group: ['Warehouses'], required: [] },
    { code: 'warehousemanageview', text: 'Warehouses Manage View', group: ['Warehouses'], required: [] },
    { code: 'warehousegetreport', text: 'Warehouses Get Report', group: ['Warehouses'], required: [] },

    { code: 'equipmentgroupscreen', text: 'Equipmentgroups Screen', group: ['Equipmentgroups'], required: [] },
    { code: 'equipmentgroupview', text: 'Equipmentgroups View', group: ['Equipmentgroups'], required: [] },
    { code: 'equipmentgroupadd', text: 'Equipmentgroups Add', group: ['Equipmentgroups'], required: [] },
    { code: 'equipmentgroupupdate', text: 'Equipmentgroups Update', group: ['Equipmentgroups'], required: [] },
    { code: 'equipmentgroupdelete', text: 'Equipmentgroups Delete', group: ['Equipmentgroups'], required: [] },
    { code: 'equipmentgroupmanageview', text: 'Equipmentgroups Manage View', group: ['Equipmentgroups'], required: [] },
    { code: 'equipmentgroupgetreport', text: 'Equipmentgroups Get Report', group: ['Equipmentgroups'], required: [] },

    { code: 'equipmentscreen', text: 'Equipments Screen', group: ['Equipments'], required: [] },
    { code: 'equipmentview', text: 'Equipments View', group: ['Equipments'], required: [] },
    { code: 'equipmentadd', text: 'Equipments Add', group: ['Equipments'], required: [] },
    { code: 'equipmentupdate', text: 'Equipments Update', group: ['Equipments'], required: [] },
    { code: 'equipmentdelete', text: 'Equipments Delete', group: ['Equipments'], required: [] },
    { code: 'equipmentmanageview', text: 'Equipments Manage View', group: ['Equipments'], required: [] },
    { code: 'equipmentgetreport', text: 'Equipments Get Report', group: ['Equipments'], required: [] },

    { code: 'rolescreen', text: 'Roles Screen', group: ['Roles'], required: [] },
    { code: 'roleview', text: 'Roles View', group: ['Roles'], required: [] },
    { code: 'roleadd', text: 'Roles Add', group: ['Roles'], required: [] },
    { code: 'roleupdate', text: 'Roles Update', group: ['Roles'], required: [] },
    { code: 'roledelete', text: 'Roles Delete', group: ['Roles'], required: [] },
    { code: 'rolemanageview', text: 'Roles Manage View', group: ['Roles'], required: [] },
    { code: 'rolegetreport', text: 'Roles Get Report', group: ['Roles'], required: [] },

    { code: 'userscreen', text: 'Users Screen', group: ['Users'], required: [] },
    { code: 'userview', text: 'Users View', group: ['Users'], required: [] },
    { code: 'useradd', text: 'Users Add', group: ['Users'], required: [] },
    { code: 'userupdate', text: 'Users Update', group: ['Users'], required: [] },
    { code: 'userdelete', text: 'Users Delete', group: ['Users'], required: [] },
    { code: 'usermanageview', text: 'Users Manage View', group: ['Users'], required: [] },
    { code: 'usergetreport', text: 'Users Get Report', group: ['Users'], required: [] },

    { code: 'filescreen', text: 'Files Screen', group: ['Files'], required: [] },
    { code: 'fileview', text: 'Files View', group: ['Files'], required: [] },
    { code: 'fileadd', text: 'Files Add', group: ['Files'], required: [] },
    { code: 'fileupdate', text: 'Files Update', group: ['Files'], required: [] },
    { code: 'filedelete', text: 'Files Delete', group: ['Files'], required: [] },
    { code: 'filemanageview', text: 'Files Manage View', group: ['Files'], required: [] },
    { code: 'filegetreport', text: 'Files Get Report', group: ['Files'], required: [] },

    { code: 'usernotificationscreen', text: 'Usernotifications Screen', group: ['Usernotifications'], required: [] },
    { code: 'usernotificationview', text: 'Usernotifications View', group: ['Usernotifications'], required: [] },
    { code: 'usernotificationadd', text: 'Usernotifications Add', group: ['Usernotifications'], required: [] },
    { code: 'usernotificationupdate', text: 'Usernotifications Update', group: ['Usernotifications'], required: [] },
    { code: 'usernotificationdelete', text: 'Usernotifications Delete', group: ['Usernotifications'], required: [] },
    { code: 'usernotificationmanageview', text: 'Usernotifications Manage View', group: ['Usernotifications'], required: [] },
    { code: 'usernotificationgetreport', text: 'Usernotifications Get Report', group: ['Usernotifications'], required: [] },

    { code: 'patientscreen', text: 'Patients Screen', group: ['Patients'], required: [] },
    { code: 'patientview', text: 'Patients View', group: ['Patients'], required: [] },
    { code: 'patientadd', text: 'Patients Add', group: ['Patients'], required: [] },
    { code: 'patientupdate', text: 'Patients Update', group: ['Patients'], required: [] },
    { code: 'patientdelete', text: 'Patients Delete', group: ['Patients'], required: [] },
    { code: 'patientmanageview', text: 'Patients Manage View', group: ['Patients'], required: [] },
    { code: 'patientgetreport', text: 'Patients Get Report', group: ['Patients'], required: [] },

    { code: 'patientdefinescreen', text: 'Patientdefines Screen', group: ['Patientdefines'], required: [] },
    { code: 'patientdefineview', text: 'Patientdefines View', group: ['Patientdefines'], required: [] },
    { code: 'patientdefineadd', text: 'Patientdefines Add', group: ['Patientdefines'], required: [] },
    { code: 'patientdefineupdate', text: 'Patientdefines Update', group: ['Patientdefines'], required: [] },
    { code: 'patientdefinedelete', text: 'Patientdefines Delete', group: ['Patientdefines'], required: [] },
    { code: 'patientdefinemanageview', text: 'Patientdefines Manage View', group: ['Patientdefines'], required: [] },
    { code: 'patientdefinegetreport', text: 'Patientdefines Get Report', group: ['Patientdefines'], required: [] },

    { code: 'patientmovementscreen', text: 'Patientmovements Screen', group: ['Patientmovements'], required: [] },
    { code: 'patientmovementview', text: 'Patientmovements View', group: ['Patientmovements'], required: [] },
    { code: 'patientmovementadd', text: 'Patientmovements Add', group: ['Patientmovements'], required: [] },
    { code: 'patientmovementupdate', text: 'Patientmovements Update', group: ['Patientmovements'], required: [] },
    { code: 'patientmovementdelete', text: 'Patientmovements Delete', group: ['Patientmovements'], required: [] },
    { code: 'patientmovementmanageview', text: 'Patientmovements Manage View', group: ['Patientmovements'], required: [] },
    { code: 'patientmovementgetreport', text: 'Patientmovements Get Report', group: ['Patientmovements'], required: [] },

    { code: 'personelscreen', text: 'Personels Screen', group: ['Personels'], required: [] },
    { code: 'personelview', text: 'Personels View', group: ['Personels'], required: [] },
    { code: 'personeladd', text: 'Personels Add', group: ['Personels'], required: [] },
    { code: 'personelupdate', text: 'Personels Update', group: ['Personels'], required: [] },
    { code: 'personeldelete', text: 'Personels Delete', group: ['Personels'], required: [] },
    { code: 'personelmanageview', text: 'Personels Manage View', group: ['Personels'], required: [] },
    { code: 'personelgetreport', text: 'Personels Get Report', group: ['Personels'], required: [] },

    { code: 'breakdownscreen', text: 'Breakdowns Screen', group: ['Breakdowns'], required: [] },
    { code: 'breakdownview', text: 'Breakdowns View', group: ['Breakdowns'], required: [] },
    { code: 'breakdownadd', text: 'Breakdowns Add', group: ['Breakdowns'], required: [] },
    { code: 'breakdownupdate', text: 'Breakdowns Update', group: ['Breakdowns'], required: [] },
    { code: 'breakdowndelete', text: 'Breakdowns Delete', group: ['Breakdowns'], required: [] },
    { code: 'breakdownmanageview', text: 'Breakdowns Manage View', group: ['Breakdowns'], required: [] },
    { code: 'breakdowngetreport', text: 'Breakdowns Get Report', group: ['Breakdowns'], required: [] },

    { code: 'mainteancescreen', text: 'Mainteancies Screen', group: ['Mainteancies'], required: [] },
    { code: 'mainteanceview', text: 'Mainteancies View', group: ['Mainteancies'], required: [] },
    { code: 'mainteanceadd', text: 'Mainteancies Add', group: ['Mainteancies'], required: [] },
    { code: 'mainteanceupdate', text: 'Mainteancies Update', group: ['Mainteancies'], required: [] },
    { code: 'mainteancedelete', text: 'Mainteancies Delete', group: ['Mainteancies'], required: [] },
    { code: 'mainteancemanageview', text: 'Mainteancies Manage View', group: ['Mainteancies'], required: [] },
    { code: 'mainteancegetreport', text: 'Mainteancies Get Report', group: ['Mainteancies'], required: [] },

    { code: 'todoscreen', text: 'Todos Screen', group: ['Todos'], required: [] },
    { code: 'todoview', text: 'Todos View', group: ['Todos'], required: [] },
    { code: 'todoadd', text: 'Todos Add', group: ['Todos'], required: [] },
    { code: 'todoupdate', text: 'Todos Update', group: ['Todos'], required: [] },
    { code: 'tododelete', text: 'Todos Delete', group: ['Todos'], required: [] },
    { code: 'todomanageview', text: 'Todos Manage View', group: ['Todos'], required: [] },
    { code: 'todogetreport', text: 'Todos Get Report', group: ['Todos'], required: [] },

    { code: 'patientcashregisterscreen', text: 'Patientcashregisters Screen', group: ['Patientcashregisters'], required: [] },
    { code: 'patientcashregisterview', text: 'Patientcashregisters View', group: ['Patientcashregisters'], required: [] },
    { code: 'patientcashregisteradd', text: 'Patientcashregisters Add', group: ['Patientcashregisters'], required: [] },
    { code: 'patientcashregisterupdate', text: 'Patientcashregisters Update', group: ['Patientcashregisters'], required: [] },
    { code: 'patientcashregisterdelete', text: 'Patientcashregisters Delete', group: ['Patientcashregisters'], required: [] },
    { code: 'patientcashregistermanageview', text: 'Patientcashregisters Manage View', group: ['Patientcashregisters'], required: [] },
    { code: 'patientcashregistergetreport', text: 'Patientcashregisters Get Report', group: ['Patientcashregisters'], required: [] },

    { code: 'patientcashmovementscreen', text: 'Patientcashmovements Screen', group: ['Patientcashmovements'], required: [] },
    { code: 'patientcashmovementview', text: 'Patientcashmovements View', group: ['Patientcashmovements'], required: [] },
    { code: 'patientcashmovementadd', text: 'Patientcashmovements Add', group: ['Patientcashmovements'], required: [] },
    { code: 'patientcashmovementupdate', text: 'Patientcashmovements Update', group: ['Patientcashmovements'], required: [] },
    { code: 'patientcashmovementdelete', text: 'Patientcashmovements Delete', group: ['Patientcashmovements'], required: [] },
    { code: 'patientcashmovementmanageview', text: 'Patientcashmovements Manage View', group: ['Patientcashmovements'], required: [] },
    { code: 'patientcashmovementgetreport', text: 'Patientcashmovements Get Report', group: ['Patientcashmovements'], required: [] },

    { code: 'companycashmovementscreen', text: 'Companycashmovements Screen', group: ['Companycashmovements'], required: [] },
    { code: 'companycashmovementview', text: 'Companycashmovements View', group: ['Companycashmovements'], required: [] },
    { code: 'companycashmovementadd', text: 'Companycashmovements Add', group: ['Companycashmovements'], required: [] },
    { code: 'companycashmovementupdate', text: 'Companycashmovements Update', group: ['Companycashmovements'], required: [] },
    { code: 'companycashmovementdelete', text: 'Companycashmovements Delete', group: ['Companycashmovements'], required: [] },
    { code: 'companycashmovementmanageview', text: 'Companycashmovements Manage View', group: ['Companycashmovements'], required: [] },
    { code: 'companycashmovementgetreport', text: 'Companycashmovements Get Report', group: ['Companycashmovements'], required: [] },

    { code: 'usagetypescreen', text: 'Usagetypes Screen', group: ['Usagetypes'], required: [] },
    { code: 'usagetypeview', text: 'Usagetypes View', group: ['Usagetypes'], required: [] },
    { code: 'usagetypeadd', text: 'Usagetypes Add', group: ['Usagetypes'], required: [] },
    { code: 'usagetypeupdate', text: 'Usagetypes Update', group: ['Usagetypes'], required: [] },
    { code: 'usagetypedelete', text: 'Usagetypes Delete', group: ['Usagetypes'], required: [] },
    { code: 'usagetypemanageview', text: 'Usagetypes Manage View', group: ['Usagetypes'], required: [] },
    { code: 'usagetypegetreport', text: 'Usagetypes Get Report', group: ['Usagetypes'], required: [] },

    { code: 'supportplanlistscreen', text: 'Supportplanlists Screen', group: ['Supportplanlists'], required: [] },
    { code: 'supportplanlistview', text: 'Supportplanlists View', group: ['Supportplanlists'], required: [] },
    { code: 'supportplanlistadd', text: 'Supportplanlists Add', group: ['Supportplanlists'], required: [] },
    { code: 'supportplanlistupdate', text: 'Supportplanlists Update', group: ['Supportplanlists'], required: [] },
    { code: 'supportplanlistdelete', text: 'Supportplanlists Delete', group: ['Supportplanlists'], required: [] },
    { code: 'supportplanlistmanageview', text: 'Supportplanlists Manage View', group: ['Supportplanlists'], required: [] },
    { code: 'supportplanlistgetreport', text: 'Supportplanlists Get Report', group: ['Supportplanlists'], required: [] },
   
    { code: 'supportplanscreen', text: 'Supportplans Screen', group: ['Supportplans'], required: [] },
    { code: 'supportplanview', text: 'Supportplans View', group: ['Supportplans'], required: [] },
    { code: 'supportplanadd', text: 'Supportplans Add', group: ['Supportplans'], required: [] },
    { code: 'supportplanupdate', text: 'Supportplans Update', group: ['Supportplans'], required: [] },
    { code: 'supportplandelete', text: 'Supportplans Delete', group: ['Supportplans'], required: [] },
    { code: 'supportplanmanageview', text: 'Supportplans Manage View', group: ['Supportplans'], required: [] },
    { code: 'supportplangetreport', text: 'Supportplans Get Report', group: ['Supportplans'], required: [] },

    { code: 'careplanscreen', text: 'Careplans Screen', group: ['Careplans'], required: [] },
    { code: 'careplanview', text: 'Careplans View', group: ['Careplans'], required: [] },
    { code: 'careplanadd', text: 'Careplans Add', group: ['Careplans'], required: [] },
    { code: 'careplanupdate', text: 'Careplans Update', group: ['Careplans'], required: [] },
    { code: 'careplandelete', text: 'Careplans Delete', group: ['Careplans'], required: [] },
    { code: 'careplanmanageview', text: 'Careplans Manage View', group: ['Careplans'], required: [] },
    { code: 'careplangetreport', text: 'Careplans Get Report', group: ['Careplans'], required: [] },

    { code: 'helpstatuscreen', text: 'Helpstatus Screen', group: ['Helpstatus'], required: [] },
    { code: 'helpstatuview', text: 'Helpstatus View', group: ['Helpstatus'], required: [] },
    { code: 'helpstatuadd', text: 'Helpstatus Add', group: ['Helpstatus'], required: [] },
    { code: 'helpstatuupdate', text: 'Helpstatus Update', group: ['Helpstatus'], required: [] },
    { code: 'helpstatudelete', text: 'Helpstatus Delete', group: ['Helpstatus'], required: [] },
    { code: 'helpstatumanageview', text: 'Helpstatus Manage View', group: ['Helpstatus'], required: [] },
    { code: 'helpstatugetreport', text: 'Helpstatus Get Report', group: ['Helpstatus'], required: [] },

    { code: 'makingtypescreen', text: 'Makingtypes Screen', group: ['Makingtypes'], required: [] },
    { code: 'makingtypeview', text: 'Makingtypes View', group: ['Makingtypes'], required: [] },
    { code: 'makingtypeadd', text: 'Makingtypes Add', group: ['Makingtypes'], required: [] },
    { code: 'makingtypeupdate', text: 'Makingtypes Update', group: ['Makingtypes'], required: [] },
    { code: 'makingtypedelete', text: 'Makingtypes Delete', group: ['Makingtypes'], required: [] },
    { code: 'makingtypemanageview', text: 'Makingtypes Manage View', group: ['Makingtypes'], required: [] },
    { code: 'makingtypegetreport', text: 'Makingtypes Get Report', group: ['Makingtypes'], required: [] },

    { code: 'ratingscreen', text: 'Ratings Screen', group: ['Ratings'], required: [] },
    { code: 'ratingview', text: 'Ratings View', group: ['Ratings'], required: [] },
    { code: 'ratingadd', text: 'Ratings Add', group: ['Ratings'], required: [] },
    { code: 'ratingupdate', text: 'Ratings Update', group: ['Ratings'], required: [] },
    { code: 'ratingdelete', text: 'Ratings Delete', group: ['Ratings'], required: [] },
    { code: 'ratingmanageview', text: 'Ratings Manage View', group: ['Ratings'], required: [] },
    { code: 'ratinggetreport', text: 'Ratings Get Report', group: ['Ratings'], required: [] },

    { code: 'requiredperiodscreen', text: 'Requiredperiods Screen', group: ['Requiredperiods'], required: [] },
    { code: 'requiredperiodview', text: 'Requiredperiods View', group: ['Requiredperiods'], required: [] },
    { code: 'requiredperiodadd', text: 'Requiredperiods Add', group: ['Requiredperiods'], required: [] },
    { code: 'requiredperiodupdate', text: 'Requiredperiods Update', group: ['Requiredperiods'], required: [] },
    { code: 'requiredperioddelete', text: 'Requiredperiods Delete', group: ['Requiredperiods'], required: [] },
    { code: 'requiredperiodmanageview', text: 'Requiredperiods Manage View', group: ['Requiredperiods'], required: [] },
    { code: 'requiredperiodgetreport', text: 'Requiredperiods Get Report', group: ['Requiredperiods'], required: [] },

]

module.exports = Priveleges