angular.module('gal')
    .controller('gameController', function ($scope, plotService) {
        'use strict';

        //$scope.next = function () {
        //    do{
        //        var next = plotService.next();
        //        console.log(next);
        //    }while(next.direction != 'end')
        //    //$scope.dialogue = plotService.next();
        //}
        //

        $scope.$on('next', function (event, data) {

            $scope.next();
        })


        $scope.next = function () {
            console.log('next triggered');

            do {
                var currentToken = plotService.next();
                console.log(currentToken);
                switch (currentToken.direction) {
                    //广播后等待玩家点击的事件
                    case 'dialogue':
                    case 'r':
                    case 'p':
                    case 'sele':
                        $scope.$broadcast(currentToken.direction, currentToken);
                        return {};
                    //不需要等待点击的事件
                    case 'name':
                    case 'dsele':
                    case 'dname':
                    case 'dmessage':
                        $scope.$broadcast(currentToken.direction, currentToken);
                        break;
                }
            } while (currentToken.direction != 'end')
        }
    });
