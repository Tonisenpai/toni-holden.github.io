// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    /* 
    I: inputs numbers (1-100)
    O: outputs a string based on conditional statement
    C: must print "FizzBuzz" for multiples of 3 and 5, "Fizz" for multiples of 3, "Buzz" for multiples of 5 
    E: N/A
    */

    // create a for loop that iterates over the numbers 1-100
    for (var i = 1; i <= 100; i++) {
        // create a conditional statement that checks for multiples of 3 and 5
        // start with the "FizzBuzz" statement first in order to catch those multiples
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}