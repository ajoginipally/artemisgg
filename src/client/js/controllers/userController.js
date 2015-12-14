app.controller("userController", function($scope, users, api, $cookies){
  var userData = users.plain();
  var admin = $cookies.get('admin');
  $scope.adminUser = admin;
  $scope.users = pruneUsers(users);

})

var pruneUsers = function(apiUsers){
  var userData = apiUsers.plain();
  var users = userData
  return users;
};
