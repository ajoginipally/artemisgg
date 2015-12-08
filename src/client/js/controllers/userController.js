app.controller("userController", function($scope, users, api){
  var userData = users.plain();
  $scope.users = pruneUsers(users);
})

var pruneUsers = function(apiUsers){
  var userData = apiUsers.plain();
  var users = userData
  console.log(userData);
  // var users = {};
  // for(var i in userData){
  //   var s = userData[i];
  //
  //   users[s].push(s);
  // }
  return users;
};
