(function () {
    'use strict';

    var hangman = window.Hangman;
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVXYZÅÄÖ".split("");
    var letterArea = document.getElementsByClassName("letterArea")[0];
    var usedLetters = [];
    var counterWrong = -1;
    var counterRight = hangman.currentWordLength();
    var counterRightDynamic = 0;
    var currentWord = hangman.currentWord();
    var currentWordSplit = currentWord.split("");
    var indexArray = [];
    var clickLetter = function(event) {
        var currentLetter = event.target.innerHTML;
        var indexNumberArray = targetIndex(indexArray, currentWordSplit, currentLetter);

        if (indexNumberArray.length > 0) {
            for (var m = 0; m < indexNumberArray.length; m++) {
                var spanElem = document.getElementById(indexNumberArray[m]);

                spanElem.innerText = currentLetter;
                counterRightDynamic += 1;
            }
        } else {
            counterWrong += 1;
            hangman.show(hangman.validParts[counterWrong]);
        }

        if (counterWrong >= 8) {
            letterArea.innerHTML = "<h1 style='font-size: 3em;" +
            "color: red;'>GAME OVER!</h1>";
        } else if (counterRightDynamic == counterRight) {
            letterArea.innerHTML = "<h1 style='font-size: 3em;" +
            "color: green;'>YOU WON THE GAME!</h1>";
        }
        indexArray = [];

        if (!letterAlreadyUsed(event.target.innerHTML)) {
            usedLetters.push(event.target.innerHTML);
            event.target.style.backgroundColor = "gray";
            event.target.removeEventListener("click", clickLetter);
        }
    };

    hangman.resultArea();

    for (var i = 0; i < hangman.validParts.length; i++) {
        hangman.hide(hangman.validParts[i]);
    }

    function letterAlreadyUsed(letter) {
        for (var k = 0; k < usedLetters.length; k++) {
            if (usedLetters[k] == letter) {
                return true;
            }
        }
        return false;
    }

    function targetIndex(indexArray, currentWordSplit, currentLetter) {
        for (var l = 0; l < currentWordSplit.length; l++) {
            if (currentWordSplit[l] === currentLetter) {
                indexArray.push(l);
            }
        }
        return indexArray;
    }

    for (var j = 0; j < alphabet.length; j++) {
        var temp = document.createElement("div");

        temp.className = "letter";
        temp.innerHTML = alphabet[j];
        temp.addEventListener("click", clickLetter);
        letterArea.appendChild(temp);
    }
})();
