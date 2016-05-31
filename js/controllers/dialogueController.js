angular.module('gal')
    .controller('dialogueController', function ($scope, plotService) {
        'use strict';
        $scope.dialogue = 'test';

        var previous = {};

        $scope.$on('dialogue', function (direction, currentToken) {

            switch (previous.direction) {
                case 'p':
                    $scope.dialogue = currentToken.dialogue;
                    break;
                case 'r':
                    $scope.dialogue += '\n';
                    $scope.dialogue += currentToken.dialogue;
                    break;
                default:
                    $scope.dialogue = currentToken.dialogue;

            }
        });
        $scope.$on('p', function (direction, currentToken) {
            previous = currentToken;
            $scope.$emit('next', {});
        })

        $scope.$on('r', function (direction, currentToken) {
            previous = currentToken;
            $scope.$emit('next', {});
        })
        $scope.$on('name', function (direction, currentToken) {
            $scope.name = currentToken.name;
        })
        $scope.$on('dname', function (direction, currentToken) {
            $scope.name = '';
        })
        $scope.$on('dmessage', function (direction, currentToken) {
            $scope.dialogue = '';
        })
    });
