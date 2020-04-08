window.Memory = (function () {
    "use strict";

    /** DELTEST 3
     */
    var imgArray = ["./img/Gambia.png", "./img/Greece.png", "./img/India.png",
        "./img/Papua_New_Guinea.png", "./img/Seychelles.png", "./img/Spain.png",
        "./img/Sweden.png", "./img/UK.png", "./img/USA.png"];
    var memoryObj = {
        country: ["Spain", "Gambia", "UK", "Seychelles", "India", "Papua New Guinea",
            "Greece", "Sweden", "USA"],
        countryCheck: ["Spain", "Gambia", "UK", "Seychelles", "India", "PapuaNewGuinea",
            "Greece", "Sweden", "USA"],
        correctOrder: ["Gambia", "Greece", "India", "PapuaNewGuinea", "Seychelles",
            "Spain", "Sweden", "UK", "USA"]
    };
    var numbering = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    var drawImgGrid = function() {
        var content = document.getElementById("container");
        var images = document.createElement("div");
        var rowOne = document.createElement("div");
        var rowTwo = document.createElement("div");
        var rowThree = document.createElement("div");

        images.setAttribute("id", "images");
        images.setAttribute("style", "width: 400px; display: inline-block;");
        rowOne.setAttribute("class", "rowOne");
        rowTwo.setAttribute("class", "rowTwo");
        rowThree.setAttribute("class", "rowThree");
        rowOne.setAttribute("style", "height: 85px;");
        rowTwo.setAttribute("style", "height: 85px;");
        rowThree.setAttribute("style", "height: 85px;");
        rowOne.setAttribute("position", "relative;");
        rowTwo.setAttribute("position", "relative;");
        rowThree.setAttribute("position", "relative;");

        images.appendChild(rowOne);
        images.appendChild(rowTwo);
        images.appendChild(rowThree);
        content.appendChild(images);

        for (var i = 0; i < 3; i++) {
            var flagOne = document.createElement("img");

            flagOne.setAttribute("class", "img");
            flagOne.setAttribute("id", "img" + i);
            flagOne.setAttribute("src", imgArray[i]);
            flagOne.setAttribute("style", "width: 120px; height: 80px;" +
            "margin-right: 5px; z-index: 1;");
            rowOne.appendChild(flagOne);
        }

        for (var j = 3; j < 6; j++) {
            var flagTwo = document.createElement("img");

            flagTwo.setAttribute("class", "img");
            flagTwo.setAttribute("id", "img" + j);
            flagTwo.setAttribute("src", imgArray[j]);
            flagTwo.setAttribute("style", "width: 120px; height: 80px;" +
            "margin-right: 5px; z-index: 1;");
            rowTwo.appendChild(flagTwo);
        }

        for (var k = 6; k < 9; k++) {
            var flagThree = document.createElement("img");

            flagThree.setAttribute("class", "img");
            flagThree.setAttribute("id", "img" + k);
            flagThree.setAttribute("src", imgArray[k]);
            flagThree.setAttribute("style", "width: 120px; height: 80px;" +
            "margin-right: 5px; z-index: 1;");
            rowThree.appendChild(flagThree);
        }

        for (var l = 0; l < 3; l++) {
            var grayBoxOne = document.createElement("div");

            grayBoxOne.setAttribute("class", "graybox");
            grayBoxOne.setAttribute("id", "g" + l + memoryObj.correctOrder[l]);
            grayBoxOne.setAttribute("style", "width: 120px; height: 80px;" +
            "margin-right: 5px;");
            rowOne.appendChild(grayBoxOne);
        }

        for (var m = 3; m < 6; m++) {
            var grayBoxTwo = document.createElement("div");

            grayBoxTwo.setAttribute("class", "graybox");
            grayBoxTwo.setAttribute("id", "g" + m + memoryObj.correctOrder[m]);
            grayBoxTwo.setAttribute("style", "width: 120px; height: 80px;" +
            "margin-right: 5px;");
            rowTwo.appendChild(grayBoxTwo);
        }

        for (var n = 6; n < 9; n++) {
            var grayBoxThree = document.createElement("div");

            grayBoxThree.setAttribute("class", "graybox");
            grayBoxThree.setAttribute("id", "g" + n + memoryObj.correctOrder[n]);
            grayBoxThree.setAttribute("style", "width: 120px; height: 80px;" +
            "margin-right: 5px;");
            rowThree.appendChild(grayBoxThree);
        }
    };

    var hideFlagGrid = function() {
        var imgGrid = document.getElementsByClassName("img");
        var gbGrid = document.getElementsByClassName("graybox");

        for (var o = 0; o < imgGrid.length; o++) {
            imgGrid[o].setAttribute("style", "width: 120px; height: 80px;" +
            "margin-right: 5px; z-index: -1;");
        }

        for (var p = 0; p < gbGrid.length; p++) {
            gbGrid[p].setAttribute("style", "width: 120px; height: 80px;" +
            "margin-right: 5px; z-index: 1;");
        }
    };

    var createCountryList = function() {
        var contentForCountry = document.getElementById("container");
        var countryContainer = document.createElement("div");
        var countryArray = memoryObj.country;
        var countryCheck = memoryObj.countryCheck;

        countryContainer.setAttribute("id", "countryContainer");
        countryContainer.setAttribute("style", "width: 400px; display: inline-block;");
        contentForCountry.appendChild(countryContainer);

        for (var q = 0; q < numbering.length; q++) {
            var listItem = document.createElement("div");

            listItem.innerHTML = numbering[q] + ". " + countryArray[q];
            listItem.setAttribute("style", "padding: 2px; border: 1px solid black;");
            listItem.setAttribute("id", countryCheck[q]);
            countryContainer.appendChild(listItem);
        }
    };

    memoryObj.createFlagGrid = drawImgGrid;
    memoryObj.swapGrid = hideFlagGrid;
    memoryObj.countryList = createCountryList;

    /** Returnar objekten för import i test.js.
     */
    return memoryObj;
})();
