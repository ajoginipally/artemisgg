app.controller("userController", function($scope, users, api){
  var userData = users.plain();
  $scope.users = pruneUsers(users);
})

var pruneUsers = function(apiUsers){
  var userData = apiUsers.plain();
  var users = {};
  for(var i in userData){
    var s = userData[i];

    speakers[s].push(s);
  }
  return speakers;
};
