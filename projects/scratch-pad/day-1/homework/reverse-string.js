// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    /* 
    I: inputs a string
    O: outputs the input string reversed
    C: N/A
    E: N/A
    */
    
    // create a variable that will contain the output to be returned
    var newArray = [];
    // turn the string characters into an array of elements using the .split() method
    // initialize a new variable with this
    var inputVar = input.split('');
    // write a loop statement that will loop through inputVar
    for (var i = inputVar.length - 1; i >= 0; i--) {
      // push the current value of i into the newArray variable at each iteration
      newArray.push(inputVar[i]);
    }
    
    // use the .join() method to return the reversed string from newArray
    return newArray.join("");

    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}