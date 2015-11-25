var app = angular.module('artemisgg', [
	"ui.router",
	"ngAnimate",
	"ngTouch",
]);

// routing
app.config(function($stateProvider, $urlRouterProvider)  {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('primary', {
            url: '/',
            templateUrl: 'views/primary.html',
            controller: 'mainController'
        });
});
