(function () {
    'use strict';

    function rollDice() {
        var numDice = document.getElementById("amount").value;
        var numSides = document.getElementById("sides").value;
        var containerSum = document.getElementById("diceContainerSum");
        var containerMean = document.getElementById("diceContainerMean");

        containerSum.innerHTML = "";
        containerMean.innerHTML = "";

        var sum = 0;
        var mean = 0;

        for (var i = 0; i < numDice; i++) {
            var diceRoll = Math.floor(Math.random() * numSides) + 1;

            console.log(diceRoll);
            sum += diceRoll;
            containerSum.innerHTML = '<div id="diceContainerSum">' + sum + '</div>';
            mean = sum / numDice;
            containerMean.innerHTML = '<div id="diceContainerMean">' + mean + '</div>';
        }
    }

    var button = document.getElementById("button");

    button.addEventListener("click", rollDice);
})();
