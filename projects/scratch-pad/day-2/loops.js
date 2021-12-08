// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  /* 
  I: inputs an array
  O: returns the values in the array
  C: N/A
  E: N/A
  */

  // create a for loop that iterates over the array
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  /* 
  I: inputs an array
  O: outputs the values of the array printed in reverse to the console
  C: N/A
  E: N/A
  */

  // create a reverse array that prints values to the console
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  /* 
  I: inputs an object
  O: returns an array containing Object keys
  C: N/A
  E: N/A
  */
  
  // create a for in loop to iterate over the object keys
  for (var keys in object) {
    // use Object.keys() method to return the array of keys
    return Object.keys(object);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  /* 
  I: inputs an object
  O: outputs the keys printed to the console
  C: must use console.log
  E: N/A
  */
  
  // create a for in loop to iterate over the object keys
  for (var keys in object) {
    // use console.log() to print the keys to the console
    console.log(keys);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  /* 
  I: inputs an object
  O: outputs an array containing the values of the object
  C: N/A
  E: N/A
  */
  
  // create a for in loop to iterate over the object
  for (var keys in object) {
    // use Object.values() method to get an array of the values
    return Object.values(object);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  /* 
  I: inputs an object
  O: outputs the printing of the values of the object to the console
  C: must use console.log()
  E: N/A
  */
  
  // create a for in loop to iterate over the object
  for (var keys in object) {
    // use console.log() and bracket notation to print the values to the console
    console.log(object[keys]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  /* 
  I: inputs an object
  O: returns a number representing the key/value pairs in the object
  C: N/A
  E: N/A
  */
  
  // create a for in loop to iterate over the object
  for (var keys in object) {
    // create a new variable to place the length in
    // use Object.keys() method to create an array of the keys in the object
    // use the .length property to get the number
   var size = Object.keys(object).length;

   // return the newly created variable 
    return size;
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  /* 
  I: inputs an object
  O: outputs printing of the values of the object to the console
  C: must use console.log()
  E: N/A
  */
  
  // create a for in loop to iterate over the object
  for (var keys in object) {
    // create a variable and set it equal to Object.values for an array
    var array = Object.values(object);
    // create a for loop to iterate backwards over the array
    for (var i = array.length - 1; i >= 0; i--) {
      // using console.log(), print the object values
      console.log(array[i]);
    }
  }
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
