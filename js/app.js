var gal = angular.module('gal', ['ngRoute']);
gal.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/main-title', {
                controller: 'mainTitleController',
                templateUrl: 'view/main-title.html'
            })
            .when('/game', {
                controller: 'gameController',
                templateUrl: 'view/game.html'
            })
            .when('/load', {
                controller: 'loadController',
                templateUrl: 'view/load.html'
            })
            .otherwise({redirectTo: '/main-title'});
    }])
