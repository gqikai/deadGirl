angular.module('gal')
    .controller('mainController', function ($scope, plotService) {
        'use strict';

        //$scope.dialogue = 'test';
        //$scope.next = function () {
        //    do{
        //        var next = plotService.next();
        //        console.log(next);
        //    }while(next.direction != 'end')
        //    //$scope.dialogue = plotService.next();
        //}

        $scope.dialogue = 'test';
        var previous = {};

        $scope.next = function() {
            do{
                var currentToken = plotService.next();
                console.log(currentToken);
                switch(currentToken.direction){
                    case 'dialogue':
                        switch(previous.direction){
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
                        break;
                    case 'p':
                        previous = currentToken;
                        return {};
                    case 'r':
                        previous = currentToken;
                        return {};
                    case 'name':
                        $scope.name = currentToken.name;
                        break;
                }
            }while(currentToken.direction != 'end')
            //$scope.dialogue = plotService.currentToken();
        }
    });
