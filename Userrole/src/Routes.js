const Routes = [
  { method: 'get', path: '/Users', controller: 'User', action: 'GetUsers' },
  { method: 'get', path: '/Users/:userId', controller: 'User', action: 'GetUser' },
  { method: 'post', path: '/Users/GetUsersforshift', controller: 'User', action: 'GetUsersforshift' },
  { method: 'post', path: '/Users/Register', controller: 'User', action: 'Register' },
  { method: 'post', path: '/Users', controller: 'User', action: 'AddUser' },
  { method: 'put', path: '/Users', controller: 'User', action: 'UpdateUser' },
  { method: 'delete', path: '/Users/:userId', controller: 'User', action: 'DeleteUser' },
  
  { method: 'get', path: '/Profile/Getusersalt/:userId', controller: 'Profile', action: 'Getusersalt' },
  { method: 'get', path: '/Profile/Getuserbyemail/:email', controller: 'Profile', action: 'Getuserbyemail' },
  { method: 'get', path: '/Profile/Getuserbyusername/:username', controller: 'Profile', action: 'Getuserbyusername' },
  { method: 'get', path: '/Profile/Gettablemeta', controller: 'Profile', action: 'Gettablemeta' },
  { method: 'get', path: '/Profile/Getusername', controller: 'Profile', action: 'Getusername' },
  { method: 'get', path: '/Profile/Getmeta', controller: 'Profile', action: 'Getmeta' },
  { method: 'post', path: '/Profile/Changepassword', controller: 'Profile', action: 'Changepassword' },
  { method: 'post', path: '/Profile/Savetablemeta', controller: 'Profile', action: 'Savetablemeta' },
  { method: 'put', path: '/Profile/Changepasswordbyrequest', controller: 'Profile', action: 'Changepasswordbyrequest' },
  { method: 'delete', path: '/Profile/Resettablemeta/:metaKey', controller: 'Profile', action: 'Resettablemeta' },

  { method: 'get', path: '/Roles/GetCount', controller: 'Role', action: 'GetRolescount' },
  { method: 'get', path: '/Roles', controller: 'Role', action: 'GetRoles' },
  { method: 'get', path: '/Roles/GetActiveuserprivileges', controller: 'Role', action: 'GetActiveuserprivileges' },
  { method: 'get', path: '/Roles/Getprivileges', controller: 'Role', action: 'Getprivileges' },
  { method: 'get', path: '/Roles/Getprivilegegroups', controller: 'Role', action: 'Getprivilegegroups' },
  { method: 'get', path: '/Roles/:roleId', controller: 'Role', action: 'GetRole' },
  { method: 'get', path: '/Roles/Getprivilegesbyuserid/:userId', controller: 'Role', action: 'Getprivilegesbyuserid' },
  { method: 'post', path: '/Roles', controller: 'Role', action: 'AddRole' },
  { method: 'put', path: '/Roles', controller: 'Role', action: 'UpdateRole' },
  { method: 'delete', path: '/Roles/:roleId', controller: 'Role', action: 'DeleteRole' },

  { method: 'get', path: '/Usernotifications/GetUsernotificationsbyUserid/:userId', controller: 'Usernotification', action: 'GetUsernotificationsbyUserid' },
  { method: 'get', path: '/Usernotifications/:notificationId', controller: 'Usernotification', action: 'GetUsernotification' },
  { method: 'get', path: '/Usernotifications', controller: 'Usernotification', action: 'GetUsernotifications' },
  { method: 'post', path: '/Usernotifications/AddUsernotificationbyrole', controller: 'Usernotification', action: 'AddUsernotificationbyrole' },
  { method: 'post', path: '/Usernotifications', controller: 'Usernotification', action: 'AddUsernotification' },
  { method: 'put', path: '/Usernotifications/Editrecord', controller: 'Usernotification', action: 'UpdateUsernotifications' },
  { method: 'put', path: '/Usernotifications', controller: 'Usernotification', action: 'UpdateUsernotification' },
  { method: 'delete', path: '/Usernotifications/DeleteUsernotificationbyidreaded/:userId', controller: 'Usernotification', action: 'DeleteUsernotificationbyidreaded' },
  { method: 'delete', path: '/Usernotifications/DeleteUsernotificationbyid/:userId', controller: 'Usernotification', action: 'DeleteUsernotificationbyid' },
  { method: 'delete', path: '/Usernotifications/:notificationId', controller: 'Usernotification', action: 'DeleteUsernotification' },
]

module.exports = Routes