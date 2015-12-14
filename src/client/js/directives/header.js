app.directive("header", function() {
  return {
    restrict: "E",
    templateUrl: "views/header.html",
    controller: function($scope, $cookies) {
      var user = $cookies.get('userName');
      var admin = $cookies.get('admin');
      $scope.userAdmin = admin;
      $scope.userName = user;
    },
    link: function($scope) {

    }
  };
});
