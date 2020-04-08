/**
 * @preserve e5a22021c28a3ad013f66b5e013c1e8d
 *
 * e5a22021c28a3ad013f66b5e013c1e8d
 * javascript1
 * lab3
 * v2
 * ussa19
 * 2019-11-24 22:55:26
 * v4.0.0 (2019-03-05)
 *
 * Generated 2019-11-24 23:55:27 by dbwebb lab-utility v4.0.0 (2019-03-05).
 * https://github.com/dbwebb-se/lab
 */

/*jshint maxcomplexity:false */
/* eslint-disable indent */
/* jscs:disable indent */
(function (dbwebb) {
"use strict";

var ANSWER = null;

console.log("Ready to begin.");


/** ======================================================================
 * Lab 3 - functions
 *
 * Practice to write functions.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Basic functions
 *
 * Practice on basic functions.
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create a function `sumRangeNumbers()` that returns the sum of all numbers
 * between two chosen numbers. The function should take two arguments, one
 * representing the lowest boundary and one that represents the highest
 * boundary. For example, the arguments 10 and 20 should return the sum of
 * 10+11+12+13...+20.
 *
 * Test it using the values `25 and 71`, answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function sumRangeNumbers(low, high) {
    var answer = 0;

    for (var i = low; i <= high; i++) {
        answer += i;
    }
    return answer;
}



ANSWER = sumRangeNumbers(25, 71);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 *
 * Create a function called `fruitColor()` that takes one argument called
 * `fruit` and returns the color of the fruit.
 *
 * The function should be aware of the following fruits (`banana, apple, kiwi,
 * plum`) with respective color (`yellow, green, green, red`).
 *
 * Try it out using the fruit `kiwi` and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function fruitColor(fruit) {
    if (fruit == "banana") {
        return "yellow";
    } else if (fruit == "apple") {
        return "green";
    } else if (fruit == "kiwi") {
        return "green";
    } else if (fruit == "plum") {
        return "red";
    } else {
        return "That is not a valid fruit.";
    }
}



ANSWER = fruitColor("kiwi");

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Create a function `printRange()` that takes two arguments `rangeStart` and
 * `rangeStop` and returns a string with all numbers comma-separated in the
 * range.
 *
 * Try it using the arguments `21 and 42`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function printRange(rangeStart, rangeStop) {
    var save = "";

    for (var i = rangeStart; i <= rangeStop; i++) {
        save += i.toString() + ",";
    }
    save = save.substring(0, save.length - 1);
    return save;
}



ANSWER = printRange(21, 42);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (1 points)
 *
 * Create a function `printRangeReversed()` that takes two arguments
 * `rangeStart` and `rangeStop` and returns a string with all numbers
 * comma-separated in the range.
 *
 * Try it using the arguments `42 and 21`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

 function printRangeReversed(rangeStart, rangeStop) {
     var save = "";

     for (var i = rangeStart; i >= rangeStop; i--) {
         save += i.toString() + ",";
     }
     save = save.substring(0, save.length - 1);
     return save;
 }



ANSWER = printRangeReversed(42, 21);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5 (1 points)
 *
 * Create a function `printAnyRange()` that takes two arguments `rangeStart`
 * and `rangeStop` and returns a string with all numbers comma-separated in
 * the range.
 *
 * If `rangeStart` is smaller than `rangeStop` then call the function
 * `printRange()`.
 *
 * If `rangeStart` is greater than `rangeStop` the call the function
 * `printRangeReversed()`.
 *
 * Try it using the arguments `21 and 42` (both ways).
 *
 * Answer with the result using arguments 21 and 42.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function printAnyRange(rangeStart, rangeStop) {
    if (rangeStart < rangeStop) {
        return printRange(rangeStart, rangeStop);
    } else if (rangeStart > rangeStop) {
        return printRangeReversed(rangeStart, rangeStop);
    } else {
        return "That is not a valid choice.";
    }
}



ANSWER = printAnyRange(21, 42);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/**
 * Exercise 1.6 (1 points)
 *
 * Create a function called `stringRepeat()` that returns a string a specific
 * number of times. The function should take two arguments, one string and one
 * number: `brown` and `13`. The number represents the number of times the
 * string should be added to a string.
 *
 * Test the function and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function stringRepeat(text, number) {
    var answer = text.repeat(number);

    return answer;
}



ANSWER = stringRepeat("brown", 13);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.6", ANSWER, false);

/**
 * Exercise 1.7 (1 points)
 *
 * Create a function `inRange()` that takes three arguments, `rangeStart`,
 * `rangeStop` and `value`.
 *
 * The function should return boolean `true` if value is greater than
 * rangeStart and less than rangeStop. Otherwise it should return boolean
 * `false`.
 *
 * Try it out using the range `132 - 545` and the value `343`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function inRange(rangeStart, rangeStop, value) {
    return Boolean(value >= rangeStart && value <= rangeStop);
}



ANSWER = inRange(132, 545, 343);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.7", ANSWER, false);

/**
 * Exercise 1.8 (1 points)
 *
 * Try out the function `inRange()` using the range `132 - 545` and the value
 * `640`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = inRange(132, 545, 640);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.8", ANSWER, false);

/**
 * Exercise 1.9 (1 points)
 *
 * Create a function called `degreesToRadians()` that should take one
 * argument, a degree value. The function should convert the value to radians
 * and return the result with max 4 decimals.
 *
 * Test your function with the value `282` and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function degreesToRadians(degree) {
    var pi = Math.PI;
    var answer = degree * (pi/180);

    answer = Math.round(answer * 10000) / 10000;
    return answer;
}



ANSWER = degreesToRadians(282);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.9", ANSWER, false);

/**
 * Exercise 1.10 (1 points)
 *
 * Create a function called `fizzBuzz()` that takes two arguments `start` and
 * `stop` and returns a comma-separated string.
 *
 * The arguments represents the starting point and stop point of the game
 * `Fizz Buzz` (http://en.wikipedia.org/wiki/Fizz_buzz). The function should
 * run from start to stop and add `Fizz`, `Buzz` or both to your
 * result-variable at appropriate numbers.
 *
 * Each entry to your result should be comma-separated. If `stop` is equal or
 * lower than `start`, the function should return an appropriate error
 * message.
 *
 * Test the function using `start=4 and stop=24`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function fizzBuzz(start, stop) {
    var answeringstring = "";

    for (var i = start; i <= stop; i++) {
        if (stop <= start) {
            return "The start- and stop-values are not logical. Have a look at the inputs.";
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
    return answeringstring;
}



ANSWER = fizzBuzz(4, 24);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.10", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Extra assignments
 *
 * These questions are worth 3 points each. Solve them for extra points. In
 * this section, you could re-use your code from lab 1 in exercise 2.1 and
 * 2.2.
 *
 */



/**
 * Exercise 2.1 (3 points)
 *
 * Create a function called `printSum()` that should take two variables, the
 * sum of the players hand and the sum of the dealers hand.
 *
 * Your hand should be three cards with the values: `10, 5 and 7`.
 * The dealers hand should be three card with the values: `9, 7, 7`.
 * The function should return the sum and the player: `Player: 22, Dealer:
 * 23`.
 *
 * Test your function with the given values and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = "Replace this text with the variable holding the answer.";

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (3 points)
 *
 * Create a function called `printResult()` that should take two variables,
 * the sum of the players hand and the sum of the dealers hand.
 *
 * Players hand should be three cards with the values: `10, 5 and 7`. The
 * dealers hand should be three card with the values: `9, 7, 7`.
 *
 * This time you should include the check from lab 2 where you find out the
 * boundaries of the player and the dealer.
 * Player hand = 21 (black jack).
 * Player hand less than 21 (safe).
 * Player hand larger than 21 (busted).
 * Dealer hand less than 17 (safe).
 * Dealer hand larger or equal to 17 and less than 21 (stop).
 * Dealer hand = 21 (black jack).
 * Delaer hand larger than 21 (busted).
 *
 * Return a string in the format: `Player: safe, Dealer: busted`.
 *
 * Test your function with the given values and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = "Replace this text with the variable holding the answer.";

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/**
 * Exercise 2.3 (3 points)
 *
 * Create a function called `calculateInterest()` that returns the money you
 * have after x years of interest, given three arguments: `960, 50 and 5`.
 * First argument represents the start money, the second argument represents
 * the number of years your money produces interest. The third argument is the
 * interest rate in percent (%).
 *
 * Test your function and answer with the result with a maximum of 4 decimals.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = "Replace this text with the variable holding the answer.";

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.3", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
