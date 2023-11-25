const Routes = [
  { method: 'get', path: '/Cases/GetCompleteCase', controller: 'Case', action: 'GetCompleteCase' },
  { method: 'get', path: '/Cases/GetDeactivateCase', controller: 'Case', action: 'GetDeactivateCase' },
  { method: 'get', path: '/Cases/:caseId', controller: 'Case', action: 'GetCase' },
  { method: 'get', path: '/Cases', controller: 'Case', action: 'GetCases' },
  { method: 'post', path: '/Cases', controller: 'Case', action: 'AddCase' },
  { method: 'put', path: '/Cases', controller: 'Case', action: 'UpdateCase' },
  { method: 'delete', path: '/Cases/:caseId', controller: 'Case', action: 'DeleteCase' },

  { method: 'get', path: '/Costumertypes/:costumertypeId', controller: 'Costumertype', action: 'GetCostumertype' },
  { method: 'get', path: '/Costumertypes', controller: 'Costumertype', action: 'GetCostumertypes' },
  { method: 'post', path: '/Costumertypes', controller: 'Costumertype', action: 'AddCostumertype' },
  { method: 'put', path: '/Costumertypes', controller: 'Costumertype', action: 'UpdateCostumertype' },
  { method: 'delete', path: '/Costumertypes/:costumertypeId', controller: 'Costumertype', action: 'DeleteCostumertype' },

  { method: 'get', path: '/Departments/:departmentId', controller: 'Department', action: 'GetDepartment' },
  { method: 'get', path: '/Departments', controller: 'Department', action: 'GetDepartments' },
  { method: 'post', path: '/Departments', controller: 'Department', action: 'AddDepartment' },
  { method: 'put', path: '/Departments', controller: 'Department', action: 'UpdateDepartment' },
  { method: 'delete', path: '/Departments/:departmentId', controller: 'Department', action: 'DeleteDepartment' },

  { method: 'get', path: '/Patienttypes/:patienttypeId', controller: 'Patienttype', action: 'GetPatienttype' },
  { method: 'get', path: '/Patienttypes', controller: 'Patienttype', action: 'GetPatienttypes' },
  { method: 'post', path: '/Patienttypes', controller: 'Patienttype', action: 'AddPatienttype' },
  { method: 'put', path: '/Patienttypes', controller: 'Patienttype', action: 'UpdatePatienttype' },
  { method: 'delete', path: '/Patienttypes/:patienttypeId', controller: 'Patienttype', action: 'DeletePatienttype' },

  { method: 'get', path: '/Periods/:periodId', controller: 'Period', action: 'GetPeriod' },
  { method: 'get', path: '/Periods', controller: 'Period', action: 'GetPeriods' },
  { method: 'post', path: '/Periods/FastcreatePeriod', controller: 'Period', action: 'FastcreatePeriod' },
  { method: 'post', path: '/Periods', controller: 'Period', action: 'AddPeriod' },
  { method: 'put', path: '/Periods', controller: 'Period', action: 'UpdatePeriod' },
  { method: 'delete', path: '/Periods/:periodId', controller: 'Period', action: 'DeletePeriod' },

  { method: 'get', path: '/Stations/:stationId', controller: 'Station', action: 'GetStation' },
  { method: 'get', path: '/Stations', controller: 'Station', action: 'GetStations' },
  { method: 'post', path: '/Stations', controller: 'Station', action: 'AddStation' },
  { method: 'put', path: '/Stations', controller: 'Station', action: 'UpdateStation' },
  { method: 'delete', path: '/Stations/:stationId', controller: 'Station', action: 'DeleteStation' },

  { method: 'get', path: '/Tododefines/:tododefineId', controller: 'Tododefine', action: 'GetTododefine' },
  { method: 'get', path: '/Tododefines', controller: 'Tododefine', action: 'GetTododefines' },
  { method: 'post', path: '/Tododefines', controller: 'Tododefine', action: 'AddTododefine' },
  { method: 'put', path: '/Tododefines', controller: 'Tododefine', action: 'UpdateTododefine' },
  { method: 'delete', path: '/Tododefines/:tododefineId', controller: 'Tododefine', action: 'DeleteTododefine' },

  { method: 'get', path: '/Todogroupdefines/:todogroupdefineId', controller: 'Todogroupdefine', action: 'GetTodogroupdefine' },
  { method: 'get', path: '/Todogroupdefines', controller: 'Todogroupdefine', action: 'GetTodogroupdefines' },
  { method: 'post', path: '/Todogroupdefines', controller: 'Todogroupdefine', action: 'AddTodogroupdefine' },
  { method: 'put', path: '/Todogroupdefines', controller: 'Todogroupdefine', action: 'UpdateTodogroupdefine' },
  { method: 'delete', path: '/Todogroupdefines/:todogroupdefineId', controller: 'Todogroupdefine', action: 'DeleteTodogroupdefine' },

  { method: 'get', path: '/Units/:unitId', controller: 'Unit', action: 'GetUnit' },
  { method: 'get', path: '/Units', controller: 'Unit', action: 'GetUnits' },
  { method: 'post', path: '/Units', controller: 'Unit', action: 'AddUnit' },
  { method: 'put', path: '/Units', controller: 'Unit', action: 'UpdateUnit' },
  { method: 'delete', path: '/Units/:unitId', controller: 'Unit', action: 'DeleteUnit' },

  { method: 'get', path: '/Floors/:floorId', controller: 'Floor', action: 'GetFloor' },
  { method: 'get', path: '/Floors', controller: 'Floor', action: 'GetFloors' },
  { method: 'post', path: '/Floors/FastcreateFloor', controller: 'Floor', action: 'FastcreateFloor' },
  { method: 'post', path: '/Floors', controller: 'Floor', action: 'AddFloor' },
  { method: 'put', path: '/Floors', controller: 'Floor', action: 'UpdateFloor' },
  { method: 'delete', path: '/Floors/:floorId', controller: 'Floor', action: 'DeleteFloor' },

  { method: 'get', path: '/Beds/:bedId', controller: 'Bed', action: 'GetBed' },
  { method: 'get', path: '/Beds', controller: 'Bed', action: 'GetBeds' },
  { method: 'post', path: '/Beds', controller: 'Bed', action: 'AddBed' },
  { method: 'put', path: '/Beds/ChangeBedstatus', controller: 'Bed', action: 'ChangeBedstatus' },
  { method: 'put', path: '/Beds', controller: 'Bed', action: 'UpdateBed' },
  { method: 'delete', path: '/Beds/:bedId', controller: 'Bed', action: 'DeleteBed' },

  { method: 'get', path: '/Rooms/:roomId', controller: 'Room', action: 'GetRoom' },
  { method: 'get', path: '/Rooms', controller: 'Room', action: 'GetRooms' },
  { method: 'post', path: '/Rooms', controller: 'Room', action: 'AddRoom' },
  { method: 'put', path: '/Rooms', controller: 'Room', action: 'UpdateRoom' },
  { method: 'delete', path: '/Rooms/:roomId', controller: 'Room', action: 'DeleteRoom' },

]

module.exports = Routes