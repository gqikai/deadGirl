angular.module('gal')
    .factory('scriptService', function () {
        'use strict';

        var script = galScript;
        var index = 0;
        var currentChar = '';


        var readDirection = function () {
            index ++;
            var direction = '';

            while(script.charAt(index) != ']'){
                direction += script.charAt(index);
                index ++;
            }
            index ++;
            return direction;
        }

        var checkName = function (token) {
            //console.log(token.direction.slice(0,4));
            if(token.direction.slice(0,4) === 'name'){
                token.name = token.direction.slice(10);
                token.direction = 'name';
                //console.log(token.direction.slice(10));
            }
            return token;
        }

        var checkSelection = function(token){

            var seletionArr =  token.direction.split(' ');

            for(var i = 0; i < (seletionArr.length - 1)/2; i ++){
                var seleArr = arr[i * 2 + 1].spilt('=');
                var selArr = arr[i * 2 + 2].spilt('=');

            }

            //console.log(token.direction.slice(0,4));
            if(token.direction.slice(0,4) === 'sele'){
                token.name = token.direction.slice(10);
                token.direction = 'name';
                //console.log(token.direction.slice(10));
            }
            return token;
        }


        var next = function () {
            var currentToken = {
                dialogue: '',
                direction: '',
                name: ''
            };
            while(index < script.length){
                //读对话,读到[返回对话,
                currentChar = script.charAt(index);

                //如果在对话之前读到[,则返回指令
                if(currentChar === '['){
                    if(currentToken.dialogue != ''){
                        currentToken.direction = 'dialogue';
                        return currentToken;
                    }
                    currentToken.direction = readDirection();
                    currentToken = checkName(currentToken);
                    currentToken = checkSelection(currentToken);

                    return currentToken;
                }
                currentToken.dialogue += currentChar;
                index ++;
            }
            //到底了
            currentToken.direction = 'end';
            return currentToken;
        };

        return {
            next: next
        };
    });
