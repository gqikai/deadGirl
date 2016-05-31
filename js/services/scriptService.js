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
        }

        var checkComment = function (token) {
            if(token.direction === 'dialogue' && token.dialogue[0] === ';'){
                token.direction = 'comment';
            }
        }

        var checkSelection = function(token){
            if(token.direction.slice(0,4) === 'sele'){
                var seletionArr =  token.direction.split(' ');
                token.selections = [];

                for(var i = 0; i < (seletionArr.length - 1)/2; i ++){
                    var seleArr = seletionArr[i * 2 + 1].split('=');
                    var selArr = seletionArr[i * 2 + 2].split('=');

                    token.selections.push([seleArr[1], selArr[1]]);
                }
                token.direction = 'sele';
            }
        }

        var checkJump = function (token) {
            if(token.direction.slice(0,4) === 'jump'){
                var string = token.direction;
                string = token.direction.slice(string.indexOf('"') + 1, string.length - 1);
                jumpTo(string);
                token.direction = 'jump';
                token.terget = string;
            }
        }

        var jumpTo = function (string) {
            script = script.slice(index);
            index = script.indexOf(string);
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
                        checkComment(currentToken);
                        return currentToken;
                    }
                    currentToken.direction = readDirection();
                    checkName(currentToken);
                    checkSelection(currentToken);
                    checkJump(currentToken);

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
            next: next,
            jumpTo : jumpTo
        };
    });
