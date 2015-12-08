app.controller("userController", function($scope, users, api){
  var userData = users.plain();
  $scope.users = pruneUsers(users);
})

var pruneUsers = function(apiUsers){
  var userData = apiUsers.plain();
  var users = userData
  return users;
};
