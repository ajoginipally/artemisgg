var app = angular.module('artemisgg', [
  "ui.router",
  "ngAnimate",
  "ngTouch",
  "restangular"
]);


app.config(function($stateProvider, $urlRouterProvider)  {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('primary', {
            url: '/',
            templateUrl: 'views/primary.html',
            controller: 'mainController'
        })
        .state('users', {
          url: '/users',
          templateUrl: 'views/users.html',
          controller: 'userController',
          resolve: {
            users: function(api){
              return api.getUsers(true);
            }
          }
        });
});

//restangular
app.config(function(RestangularProvider){
  RestangularProvider.setBaseUrl("/api");

  RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
    if(data.data){
      return data.data;
    }
    //for now just logging and failing
    else if(data.error) {
      console.error(data.error);
      return false;
    }
  });
});
