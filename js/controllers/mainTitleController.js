angular.module('gal')
    .controller('mainTitleController', function ($scope, $location) {
        'use strict';
        $scope.menuItems = [
            {'title': 'game'},
            {'title': 'load'},
            {'title': 'extra'},
            {'title': 'end'},
            {'title': 'page'},
        ];

        for(var item in $scope.menuItems){
            console.log(item);
            $scope.menuItems[item].background = 'url(http://localhost:63343/deadGirl/data/image/t_' + $scope.menuItems[item].title + '_1.png) no-repeat'
        }

        $scope.mouseenter = function (item, $event) {
            item.background = 'url(http://localhost:63343/deadGirl/data/image/t_' + item.title + '_2.png) no-repeat'
        }
        $scope.mouseleave = function (item, $event) {
            item.background = 'url(http://localhost:63343/deadGirl/data/image/t_' + item.title + '_1.png) no-repeat'
        }

        $scope.click = function (item, $event) {
            $location.path(item.title)
            $event.stopPropagation();
        }
    });
