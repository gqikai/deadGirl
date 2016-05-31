angular.module('gal')
    .factory('plotService', function (scriptService) {
        'use strict';
        var next = function () {
            return scriptService.next();
        }

        var playerSelect = function (selection) {
            scriptService.jumpTo(selection[1]);
        }
        return {
            next : next,
            playerSelect : playerSelect
        };
    });
