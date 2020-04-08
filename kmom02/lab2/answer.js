/**
 * @preserve 5870b4eb3a74b248abc6f1325b268077
 *
 * 5870b4eb3a74b248abc6f1325b268077
 * javascript1
 * lab2
 * v2
 * ussa19
 * 2019-11-14 20:09:43
 * v4.0.0 (2019-03-05)
 *
 * Generated 2019-11-14 21:09:43 by dbwebb lab-utility v4.0.0 (2019-03-05).
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
 * Lab 2 - statements
 *
 * Statements and expressions in JavaScript.
 *
 * Use MDN as your reference and base to solving the exercises.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . If, else if and else
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create five variables: `card1, card2, card3, card4, card5`.
 *
 * Assign the values `8, 11, 4, 9, 1` to the variables created above.
 *
 * Add them up and put the sum in a variable called `result`.
 *
 * Answer with the variable `result`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var card1 = 8;
var card2 = 11;
var card3 = 4;
var card4 = 9;
var card5 = 1;

var result = card1 + card2 + card3 + card4 + card5;


ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 *
 * Use an `if statement` to see if the five cards (card1-card5) have a
 * combined sum that is higher than 21.
 *
 * Create a variable `status` and give it a different value depending on the
 * following.
 *
 * * If the sum is higher than 21, give your variable the value `"busted"`.
 * * Else give it the value `"safe"`.
 *
 * Answer with your status-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var status = "";

if (result > 21) {
    status = "busted";
} else {
    status = "safe";
}


ANSWER = status;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Use `if else statements` to see if the combined value of the first three
 * cards (card1-card3) is lower, higher or exactly 21.
 *
 * Answer with a string corresponding to the result:
 * lower = `"safe"`
 * higher = `"busted"`
 * 21 = `"black jack"`
 *
 * Store the response in your status-variable and answer with it.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var combinedcards = card1 + card2 + card3;
var statustwo = "";

if (combinedcards < 21) {
    statustwo = "safe";
} else if (combinedcards > 21) {
    statustwo = "busted";
} else {
    statustwo = "black jack";
}




ANSWER = statustwo;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (2 points)
 *
 * Create three variables: `dealer1, dealer2, dealer3`.
 *
 * Assign the values `11, 3, 11` to the variables.
 *
 * Combine the `if`, `else if`, `else` statements and the operator `AND (&&)`
 * to see what the dealer should do. Combine as you feel needed.
 *
 * If the sum of the dealercards is lower than 17, answer with `"pick"`, if
 * the sum is higher than or equal to 17 and lower than 21 answer with
 * `"stop"`. If the sum is 21 answer with `"black jack"`. If the sum is higher
 * than 21 answer with `"busted"`.
 *
 * Store the response in a variable, and answer with it.
 *
 * PS. You can change the sum to test that your if-statement really works for
 * all values, just to try it out.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var dealer1 = 11;
// var dealer2 = 3;
var dealer3 = 11;

var sum = dealer1 + dealer3;
var response = "";

if (sum < 17) {
    response = "pick";
} else if ((sum >= 17) && (sum < 21)) {
    response = "stop";
} else if (sum == 21) {
    response = "black jack";
} else {
    response = "busted";
}


ANSWER = response;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, true);

/** ----------------------------------------------------------------------
 * Section 2 . Switch, case
 *
 */



/**
 * Exercise 2.1 (1 points)
 *
 * Use a switch-case statement to create a message with the type of fruit and
 * its color. You have the following type of fruits with a corresponding
 * color:
 *
 * * banana: yellow
 * * apple: green
 * * kiwi: green
 * * plum: purple
 *
 * Create a variable `myFruit` which holds the current type of your fruit. If
 * 'myFruit' is banana, the result should be a variable containing the string
 * value `"The banana is yellow."`
 *
 * Ensure that your switch-case works for all values.
 *
 * Answer with the result where `myFruit = "banana"`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var myFruit = "banana";
var output = "";

switch (myFruit) {
    case "banana":
        output = "The banana is yellow.";
        break;
    case "apple":
        output = "The apple is green.";
        break;
    case "kiwi":
        output = "The kiwi is green.";
        break;
    case "plum":
        output = "The plum is purple.";
        break;
    default:
        output = "That is an unknown fruit.";
}


ANSWER = output;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (1 points)
 *
 * Extend your switch-case statement with a `default value`. The result should
 * be:
 *
 * `"That is an unknown fruit."` when the variable 'myFruit' has an unknown
 * value.
 *
 * Answer with the result where 'myFruit = pear'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

 var myFruittwo = "pear";
 var outputtwo = "";

 switch (myFruittwo) {
     case "banana":
         outputtwo = "The banana is yellow.";
         break;
     case "apple":
         outputtwo = "The apple is green.";
         break;
     case "kiwi":
         outputtwo = "The kiwi is green.";
         break;
     case "plum":
         outputtwo = "The plum is purple.";
         break;
     default:
         outputtwo = "That is an unknown fruit.";
 }


ANSWER = outputtwo;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 3 . For loops
 *
 */



/**
 * Exercise 3.1 (1 points)
 *
 * Use a `for-loop` to increment `415` with the value `7`, `11` times.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var total = 415;

for (var i = 0; i < 11; i++) {
    total = total + 7;
}




ANSWER = total;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, false);

/**
 * Exercise 3.2 (1 points)
 *
 * Use a for-loop to decrement `533` with the value `6`, `14` times.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var end = 533;

for (var n = 0; n < 14; n++) {
    end = end - 6;
}


ANSWER = end;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);

/**
 * Exercise 3.3 (3 points)
 *
 * Use a for-loop to add all the odd values in the range `20` to `43` to a
 * string with each number separated by a comma `,`.
 *
 * The result should not end with a comma. You should neither have a space
 * after the comma.
 *
 * Answer with the resulting string.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var save = "";

for (var l = 20; l <= 43; l++) {
    if ((l % 2) != 0) {
        save += l.toString() + ",";
    }
}

save = save.substring(0, save.length - 1);


ANSWER = save;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.3", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 4 . While loops
 *
 */



/**
 * Exercise 4.1 (1 points)
 *
 * Use a `while-loop` to increment `11` with the value `7` until it has
 * reached or passed `415`.
 *
 * Answer with the amount of steps needed.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var value = 11;
var count = 0;

while (value < 415) {
    value += 7;
    count += 1;
}


ANSWER = count;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.1", ANSWER, false);

/**
 * Exercise 4.2 (1 points)
 *
 * Use a while-loop to subtract `6` from `533` until the value has reached or
 * passed `0`.
 *
 * Answer with the amount of steps needed.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var decrease = 533;
var counter = 0;

while (decrease > 0) {
    decrease -= 6;
    counter += 1;
}


ANSWER = counter;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.2", ANSWER, false);

/**
 * Exercise 4.3 (3 points)
 *
 * Use a while-loop to add all the values, to a comma-separated string, in the
 * range `25` to `60`, where the value is divisable by 5 or 7.
 *
 * Answer with the resulting string.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var start = 25;
var stop = 60;
var saving = "";

while (start <= stop) {
    if (start % 5 == 0 || start % 7 == 0) {
        saving += start.toString() + ",";
    }
    start += 1;
}

saving = saving.substring(0, saving.length -1);


ANSWER = saving;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.3", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
