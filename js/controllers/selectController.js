angular.module('gal')
    .controller('selectController', function ($scope, plotService) {
        'use strict';

        $scope.selection = {
            show: false,
            selections: []
        }

        $scope.playerSelect = function (selection, $event) {
            console.log('playerSelect triggered');
            console.log(selection);
            plotService.playerSelect(selection);
            $event.stopPropagation();
            $scope.$emit('next', {});
        }

        $scope.$on('sele', function (event, currentToken) {
            $scope.selection.selections = currentToken.selections;
            $scope.selection.show = true;
        })

        $scope.$on('dsele', function (event, currentToken) {
            $scope.selection.show = false;
        })
    });
