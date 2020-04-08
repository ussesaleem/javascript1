window.Test = (function () {
    'use strict';

    var questions = window.Questions;
    var fizzbuzz = window.FizzBuzz;
    var memory = window.Memory;
    var randomHide = fizzbuzz.randomHide;

    var grayboxes = document.getElementsByClassName("graybox");
    var pointholder = document.getElementsByClassName("points")[0];
    var btnStart = document.getElementById("start");
    var btnOne = document.getElementById("nextOne");
    var btnTwo = document.getElementById("nextTwo");
    var btnThree = document.getElementById("nextThree");
    var btnFour = document.getElementById("result");
    var btnReset = document.getElementById("reset");
    var counter = -1;
    var answerCounter = -1;
    var clickCounter = -1;
    var nextTwoCounter = -1;
    var nextThreeCounter = -1;
    var counting = -1;
    var resetCount = 0;
    var points = 0;
    var pointsPartOne = 0;
    var pointsPartTwo = 0;
    var pointsPartThree = 0;
    var maxpoints = 25;

    btnOne.setAttribute("style", "visibility: hidden;");
    btnTwo.setAttribute("style", "visibility: hidden;");
    btnThree.setAttribute("style", "visibility: hidden;");
    btnFour.setAttribute("style", "visibility: hidden;");
    btnReset.setAttribute("style", "visibility: hidden;");
    pointholder.innerHTML = "Poäng: " + points + "/" + maxpoints;
    pointholder.setAttribute("style", "visibility: hidden;");

    /** STARTSKÄRM
     * Start-knapp och informationsbild.
     */
    var start = function() {
        var containerStart = document.getElementById("container");

        containerStart.innerHTML = "";
        containerStart.innerHTML = "<h2>Deltest 1</h2><p>Deltestet består av 5 st" +
        " flervalsfrågor. Välj det alternativ som passar bäst. Rätt svar ger 3p och" +
        " fel svar ger 0p.</p><p>Lycka till!</p>";
        document.getElementById("start").setAttribute("style", "display: none;");
        btnOne.setAttribute("style", "visibility: visible;");
        pointholder.setAttribute("style", "visibility: visible;");
    };
    /** DELTEST 1
     * Next-knapp för att starta testet, importerar data från questions.js.
     * Start-knappen döljs.
     */
    var nextOne = function() {
        resetCount = 1;
        pointholder.setAttribute("style", "visibility: visible;");
        btnReset.setAttribute("style", "visibility: visible;");
        var container = document.getElementById("container");

        if ((counter + 1) < questions.length) {
            counter += 1;
            container.innerHTML = "";

            var qContainer = document.createElement("div");
            var question = document.createElement("div");
            var opt = questions[counter].options;

            question.innerHTML = questions[counter].question;
            qContainer.appendChild(question);

            for (var i = 0; i < opt.length; i++) {
                var options = document.createElement("div");

                options.className = "answerOptions";
                options.innerHTML = opt[i];
                options.setAttribute("id", questions[counter].id);
                options.addEventListener("click", clickOption);
                qContainer.appendChild(options);
            }
            container.appendChild(qContainer);
        } else {
            container.innerHTML = "";
            container.innerHTML = "<h2>Deltest 2</h2><p>Detta deltest består av en fråga." +
            " I frågan kommer du att få se en talserie, som slumpas vid uppdatering av sidan," +
            " med en bit som saknas. Du får 4 st alternativ att välja mellan bland vilka du" +
            " ska ange vilket alternativ som passar bäst.</p><p>Detta är ett Fizz Buzz quiz," +
            " om siffran är delbar med 3 ersätts den av ordet 'Fizz', om den är delbar med 5" +
            " ersätts siffran med 'Buzz' och är den delbar med både 3 och 5 ersätts den av ordet" +
            " 'Fizz Buzz'. Rätt svar ger 1p, fel svar ger 0p.</p><p>Lycka till!</p>";
            document.getElementById("nextOne").setAttribute("style", "display: none;");
            document.getElementById("nextTwo").setAttribute("style", "visibility: visible;");
            btnReset.setAttribute("style", "visibility: hidden;");
            console.log("Slut på deltest 1");
        }
    };
    /** KLICKFUNKTION FÖR DELTEST 1
     */
    var clickOption = function(event) {
        var qId = event.target.id;

        if (qId == (answerCounter + 2)) {
            answerCounter += 1;

            var currentOption = event.target.innerHTML;
            var answer = questions[answerCounter].answer;
            var siblingArray = document.getElementsByClassName("answerOptions");

            if (currentOption == answer) {
                for (var j = 0; j < siblingArray.length; j++) {
                    siblingArray[j].setAttribute("style", "pointer-events: none");
                }
                event.target.setAttribute("style", "background-color: green");
                event.target.removeEventListener("click", clickOption);
                pointsPartOne += 3;
                points = pointsPartOne;
                pointholder.innerHTML = "Poäng: " + points + "/" + maxpoints;
            } else {
                for (var k = 0; k < siblingArray.length; k++) {
                    var eachOption = siblingArray[k].innerHTML;

                    if (eachOption == answer) {
                        siblingArray[k].setAttribute("style", "pointer-events: none");
                        siblingArray[k].setAttribute("style", "background-color: green");
                    } else {
                        siblingArray[k].setAttribute("style", "pointer-events: none");
                        event.target.setAttribute("style", "background-color: red");
                    }
                }
            }
            event.target.removeEventListener("click", clickOption);
        }
    };
    /** DELTEST 2
     * Next-knapp för deltest 1 döljs.
     * Next-knapp för deltest 2 visas och importerar data från fizzbuzz.js.
     */
    var nextTwo = function() {
        var containerTwo = document.getElementById("container");
        var qContainerTwo = document.createElement("div");
        var questionTwo = document.createElement("div");
        var answeringArray = document.createElement("div");
        var answeringArrayVal = fizzbuzz.answeringArray;
        var optTwo = fizzbuzz.options;
        var random = fizzbuzz.random;

        btnReset.setAttribute("style", "visibility: visible;");
        nextTwoCounter += 1;
        resetCount = 2;

        if (nextTwoCounter == 0) {
            containerTwo.innerHTML = "";
            containerTwo.innerHTML = "<h2>Deltest 2</h2>";
            questionTwo.innerHTML = fizzbuzz.question;
            qContainerTwo.appendChild(questionTwo);
            qContainerTwo.appendChild(answeringArray);
            containerTwo.appendChild(qContainerTwo);

            for (var n = 0; n < answeringArrayVal.length; n++) {
                var ans = document.createElement("span");

                ans.setAttribute("style", "margin-right: 10px;");
                ans.setAttribute("id", n);
                ans.innerHTML = answeringArrayVal[n];
                answeringArray.appendChild(ans);
            }

            document.getElementById(random).innerHTML = "";
            document.getElementById(random).innerHTML = "__";

            for (var o = 0; o < optTwo.length; o++) {
                var options = document.createElement("div");

                options.className = "answerOptions";
                options.innerHTML = optTwo[o];
                options.addEventListener("click", clickOptionTwo);
                qContainerTwo.appendChild(options);
            }
        } else {
            containerTwo.innerHTML = "";
            containerTwo.innerHTML = "<h2>Deltest 3</h2><p>I detta deltest kommer du att" +
            " få se 9 st flaggor. Efter 5 sekunder kommer dessa att döljas och du kommer att" +
            " få se en lista med namnet på 9 st länder. Du ska klicka på de grå rutorna i" +
            " samma ordning som i listan som visas, där flaggorna befann sig tidigare. Vid" +
            " felklick avslutas momentet. För varje rätt svar får du 1p.</p><p>Tänk på att" +
            " tiden börjar så snabbt du klickar på 'Nästa' nedan.</p><p>Lycka till!</p>";
            document.getElementById("nextTwo").setAttribute("style", "display: none;");
            document.getElementById("nextThree").setAttribute("style", "visibility: visible;");
            btnReset.setAttribute("style", "visibility: hidden;");
            console.log("Slut på deltest 2");
        }
    };
    /** KLICKFUNKTION FÖR DELTEST 2
     */
    var clickOptionTwo = function(event) {
        clickCounter += 1;
        var currentClick = event.target.innerHTML;

        var siblingArrayTwo = document.getElementsByClassName("answerOptions");

        if (clickCounter == 0) {
            if (currentClick == randomHide) {
                for (var p = 0; p < siblingArrayTwo.length; p++) {
                    siblingArrayTwo[p].setAttribute("style", "pointer-events: none");
                }
                event.target.setAttribute("style", "background-color: green");
                event.target.removeEventListener("click", clickOptionTwo);
                pointsPartTwo += 1;
                points = pointsPartOne + pointsPartTwo;
                pointholder.innerHTML = "Poäng: " + points + "/" + maxpoints;
            } else {
                for (var q = 0; q < siblingArrayTwo.length; q++) {
                    var eachOptionTwo = siblingArrayTwo[q].innerHTML;

                    if (eachOptionTwo == randomHide) {
                        siblingArrayTwo[q].setAttribute("style", "pointer-events: none");
                        siblingArrayTwo[q].setAttribute("style", "background-color: green");
                    } else {
                        siblingArrayTwo[q].setAttribute("style", "pointer-events: none");
                        event.target.setAttribute("style", "background-color: red");
                    }
                }
            }
        }
    };
    /** DELTEST 3
     * Next-knapp för deltest 2 döljs.
     * Next-knapp för deltest 3 visas och importerar data från memory.js.
     */
    var nextThree = function() {
        nextThreeCounter += 1;
        resetCount = 3;

        var containerThree = document.getElementById("container");

        if (nextThreeCounter == 0) {
            containerThree.innerHTML = "";
            containerThree.innerHTML = "<h2>Deltest 3</h2>";
            memory.createFlagGrid();
            document.getElementById("nextThree").setAttribute("style", "visibility: hidden;");
            btnReset.setAttribute("style", "visibility: hidden;");
            setTimeout(function() {
                memory.swapGrid();
                memory.countryList();
                document.getElementById("nextThree").setAttribute("style", "visibility: visible;");
                btnReset.setAttribute("style", "visibility: visible;");

                for (var r = 0; r < grayboxes.length; r++) {
                    grayboxes[r].addEventListener("click", clickOptionThree);
                }
            }, 5000);
        } else {
            containerThree.innerHTML = "";
            containerThree.innerHTML = "<h2>Tack för din medverkan!</h2>" +
                "<p>Klicka på Resultat för att få ditt slutresultat.</p>";
            document.getElementById("nextThree").setAttribute("style", "display: none;");
            document.getElementById("result").setAttribute("style", "visibility: visible;");
            btnReset.setAttribute("style", "visibility: hidden;");
            console.log("Slut på deltest 3");
        }
    };
    /** KLICKFUNKTION FÖR DELTEST 3
     */
    var clickOptionThree = function(event) {
        counting += 1;
        var correctOrder = memory.countryCheck;
        var elemId = event.target.id;
        var elemCountry = elemId.substring("2");
        var indexCountry = elemId.substring("1", "2");
        var countryCheck = correctOrder[counting];

        if (elemCountry == countryCheck && counting < 9) {
            document.getElementById(elemId).setAttribute("style", "width: 120px;" +
            "height: 80px; margin-right: 5px; z-index: -1;");
            document.getElementById("img" + indexCountry).setAttribute("style", "width: 120px;" +
            "height: 80px; margin-right: 5px; z-index: 1;");
            document.getElementById(countryCheck).setAttribute("style", "padding: 2px;" +
            "border: 1px solid black; background-color: green;");
            pointsPartThree += 1;
            points = pointsPartOne + pointsPartTwo + pointsPartThree;
            pointholder.innerHTML = "Poäng: " + points + "/" + maxpoints;
            console.log("Correct match");
        } else {
            document.getElementById(countryCheck).setAttribute("style", "padding: 2px;" +
            "border: 1px solid black; background-color: red;");
            console.log("Game over!");
            for (var s = 0; s < grayboxes.length; s++) {
                grayboxes[s].removeEventListener("click", clickOptionThree);
                grayboxes[s].setAttribute("style", "width: 120px; height: 80px;" +
                "margin-right: 5px; z-index: -1;");
            }
        }
    };
    /** RESULTAT
     * Next-knapp för deltest 3 döljs.
     * Resultat-knapp visas och visar sammanlagda poängen.
     */
    var result = function() {
        var containerFour = document.getElementById("container");

        containerFour.innerHTML = "";
        containerFour.innerHTML = "<h2>Resultat</h2><p>Du har fått " + points + " poäng av " +
            maxpoints + " möjliga.</p><p>Ladda om sidan för att komma till Introduktionen" +
            " igen.</p>";
        document.getElementById("result").setAttribute("style", "display: none;");
        pointholder.setAttribute("style", "display: none;");
    };
    /** RESET
     * Reset-knapp för att hoppa tillbaka i ett deltest.
     * Nollställer räknarna och poängen för deltesten.
     */
    var reset = function() {
        if (resetCount == 1) {
            start();
            counter = -1;
            answerCounter = -1;
            resetCount = 0;
            points = pointsPartTwo + pointsPartThree;
            pointsPartOne = 0;
        } else if (resetCount == 2) {
            nextOne();
            nextTwoCounter = -1;
            clickCounter = -1;
            resetCount = 1;
            points = pointsPartOne + pointsPartThree;
            pointsPartTwo = 0;
        } else if (resetCount == 3) {
            nextTwo();
            nextThreeCounter = -1;
            counting = -1;
            resetCount = 2;
            points = pointsPartOne + pointsPartTwo;
            pointsPartThree = 0;
        } else {
            console.log("Funktionen ej tillgänglig.");
        }
    };

    /** BUTTONS
     * Gör start-, next- och resultat-knapparna klickbara.
     * Kopplar samman knapparna till funktionerna.
     */
    btnStart.addEventListener("click", start);
    btnOne.addEventListener("click", nextOne);
    btnTwo.addEventListener("click", nextTwo);
    btnThree.addEventListener("click", nextThree);
    btnFour.addEventListener("click", result);
    btnReset.addEventListener("click", reset);

    /** RESET
     * Möjliggör funktionen Test.reset() i console.log.
     */
    return {
        reset: reset,
    };
})();
