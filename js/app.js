var gal = angular.module('gal', []);
gal.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/main-title', {
                controller: 'mainTitleController',
                templateUrl: 'view/main-title.html'
            })
            .when('/game', {
                controller: 'gameController',
                templateUrl: 'view/main-title.html'
            })
            .when('/main-title', {
                controller: 'mainTitleController',
                templateUrl: 'view/main-title.html'
            })
            .otherwise({redirectTo: '/main-title'});
    }])
