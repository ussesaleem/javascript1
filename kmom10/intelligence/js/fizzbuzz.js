window.FizzBuzz = (function () {
    "use strict";

    /** DELTEST 2
     */
    var buzz = function() {
        var fizzbuzzObj = {
            question: "Vad ska vara i den blanka positionen?<br><br>",
            options: ["Fizz", "Buzz", "Fizz Buzz"]
        };
        var answeringstring = "";
        var answeringArray = [];
        var startArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var random = Math.floor(Math.random() * 10);
        var start = startArray[random];
        var stop = start + 10;

        for (var i = start; i < stop; i++) {
            if (stop <= start) {
                return "New start- stop values required.";
            } else {
                if (i % 3 == 0 && i % 5 == 0) {
                    answeringstring = answeringstring + "Fizz Buzz" + ",";
                } else if (i % 5 == 0) {
                    answeringstring = answeringstring + "Buzz" + ",";
                } else if (i % 3 == 0) {
                    answeringstring = answeringstring + "Fizz" + ",";
                } else {
                    answeringstring = answeringstring + i + ",";
                }
            }
        }
        answeringstring = answeringstring.substring(0, answeringstring.length - 1);
        answeringArray = answeringstring.split(",");
        var randomHide = answeringArray[random];

        if (fizzbuzzObj.options.indexOf(randomHide) == -1) {
            fizzbuzzObj.options.unshift(randomHide);
        } else {
            var randomString = "";
            var randomly = Math.floor(Math.random() * 10);

            for (var z = start; z < stop; z++) {
                randomString = randomString + z + ",";
            }
            var randomArray = randomString.split(",");
            var randomPush = randomArray[randomly];

            fizzbuzzObj.options.unshift(randomPush);
        }

        fizzbuzzObj.answeringArray = answeringArray;
        fizzbuzzObj.randomHide = randomHide;
        fizzbuzzObj.start = start;
        fizzbuzzObj.stop = stop;
        fizzbuzzObj.random = random;

        return fizzbuzzObj;
    };

    var fizzbuzz = buzz();

    /** Returnar funktionen för import i test.js.
     */
    return fizzbuzz;
})();
