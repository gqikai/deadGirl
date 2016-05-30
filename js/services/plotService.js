angular.module('gal')
    .factory('plotService', function (scriptService) {
        'use strict';
        var next = function () {
            return scriptService.next();
        }

        return {
            next : next
        };
    });
