// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    /* 
    I: inputs a base value to test against
    O: outputs a function that tests whether a given value is greater than base
    C: N/A
    E: N/A
    */
    
    // create and return a function that inputs a value and test if value is greater than base
    return function (value) {
        return value > base;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    /* 
    I: inputs base to test against
    O: outputs function that tests if value is less than base
    C: N/A
    E: N/A
    */
    
    // create and return a function that inputs a value and test if base is greater than value
    return function (value) {
        return value < base;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    /* 
    I: inputs a character
    O: outputs function that tests if passed in string starts with input character
    C: N/A
    E: N/A
    */
    
    // return a function that inputs a string and tests if startsWith character and index 0 of string match
    return function (string) {
        // declare variables for string and startsWith, then set them equal to the conversion of string and startsWith to lowercase
    var string = string[0].toLowerCase();
    startsWith = startsWith.toLowerCase();

    // create a conditional statement to check and see if the starting character matches the input character
    if (string[0] === startsWith) {
        return true;
    } else {
        return false;
        }
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    /* 
    I: inputs a character 
    O: outputs function that tests is passed in string ends with input character
    C: N/A
    E: N/A
    */
    // return a function that inputs a string and tests if endsWith character and index 0 of string match
    return function (string) {
        // declare variables for string and endsWith, then set them equal to the conversion of string and endsWith to lowercase
    var string = string[string.length - 1].toLowerCase();
    endsWith = endsWith.toLowerCase();

    // create a conditional statement to check and see if the ending character matches the input character
    if (string[string.length - 1] === endsWith) {
        return true;
    } else {
        return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    /* 
    I: inputs an array of strings
    O: outputs the array of strings modified
    C: N/A
    E: N/A
    */
    
    // create a variable that will hold our modified array to return it
    var modified = [];

    // create a for loop that iterated over the array of strings
    for (i = 0; i < strings.length; i++) {
        // 
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    /* 
    I: inputs
    O: outputs
    C:
    E:
    */
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
