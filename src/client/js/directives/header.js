app.directive("header", function() {
  return {
    restrict: "E",
    templateUrl: "views/header.html",
    controller: function($scope, $cookies) {
      var user = $cookies.get('userName');
      console.log(user);
      $scope.userName = user;
    },
    link: function($scope) {

    }
  };
});
