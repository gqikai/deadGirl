angular.module('gal')
    .controller('optionController', function ($scope) {
        'use strict';
        $scope.options = [
            {'title': 'log', 'right': '5px', 'bottom': '90px'},
            {'title': 'title', 'right': '35px', 'bottom': '75px'},
            {'title': 'system', 'right': '70px', 'bottom': '95px'},
            {'title': 'load', 'right': '80px', 'bottom': '125px'},
            {'title': 'save', 'right': '70px', 'bottom': '155px'},
            {'title': 'auto', 'right': '35px', 'bottom': '170px'},
            {'title': 'skip', 'right': '5px', 'bottom': '155px'}
        ];

        for(var option in $scope.options){
            console.log(option);
            $scope.options[option].imgArea = {'background': 'url(http://localhost:63343/deadGirl/data/image/m_' + $scope.options[option].title + '_1.png) no-repeat'}
        }

        $scope.mouseenter = function (option, $event) {
            option.imgArea = {'background': 'url(http://localhost:63343/deadGirl/data/image/m_' + option.title + '_2.png) no-repeat'}
        }
        $scope.mouseleave = function (option, $event) {
            option.imgArea = {'background': 'url(http://localhost:63343/deadGirl/data/image/m_' + option.title + '_1.png) no-repeat'}
        }

        $scope.click = function (option, $event) {
            $event.stopPropagation();
        }
    });
