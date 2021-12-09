// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    /*
    I: function inputs string
    O: function ouputs length of string
    C: N/A
    E: N/A
    */
return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
/*
    I: inputs a string
    O: returns a string modified to lowercase
    C: N/A
    E: N/A
    */
return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
/*
    I: inputs a string
    O: returns a string modified to uppercase
    C: N/A
    E: N/A
    */
return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
/*
    I: inputs a string
    O: returns a string with dashes
    C: N/A
    E: N/A
    */
    // replace all whitespace to dashes and covert string to lowercase
   return string.replaceAll(/[\s]/g, "-").toLowerCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
/*
    I: inputs a string and a character
    O: returns a boolean value based on if the first character and input character match
    C: should be case insensitive
    E: N/A
    */
    // declare variables for string and char, then set them equal to the conversion of string and character to lowercase
    var string = string[0].toLowerCase();
    var char = char.toLowerCase();

    // create a conditional statement to check and see if the starting character matches the input character
    if (string[0] === char) {
        return true;
    } else {
        return false;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
/*
    I: inputs a string and a character
    O: returns a boolean value based on if the last character and input character match
    C: should be case insensitive
    E: N/A
    */
    // declare variables for string and char, then set them equal to the conversion of string and character to lowercase
    var string = string[string.length - 1].toLowerCase();
    var char = char.toLowerCase();

    // create a conditional statement to check and see if the starting character matches the input character
    if (string[string.length - 1] === char) {
        return true;
    } else {
        return false;
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
/*
    I: inputs 2 strings
    O: returns one string that is the inputs concatenated
    C: must use + operator
    E: N/A
    */

    return stringOne + stringTwo;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
/*
    I: inputs 2 strings
    O: returns strings joined together
    C: use the .join() method
    E: N/A
    */

    // use .join() method on the already generated array
    return args.join("");
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
/*
    I: inputs 2 strings
    O: outputs the longest string of the two
    C: N/A
    E: N/A
    */

    // create a conditional statement that compares the length of both of the strings
    // the first condition is if the first string is greater than the second, return the first string
    if (stringOne.length > stringTwo.length) {
        return stringOne;
    // the second condition is if the second string is greater than the first, return the second string
    } else if (stringTwo.length > stringOne.length) {
        return stringTwo;
    // the last condition is if the first or second condition is not met, return -1
    } else {
        return -1;
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
/*
    I: inputs two strings
    O: outputs 1, -1 or 0 based on if the first string is higher, lower or equal to the second in alphabetical order
    C: N/A
    E: N/A
    */

    // create a conditional statement that compares the strings, start with stringTwo or it won't work
    if (stringTwo < stringOne) {
        return -1;
    } else if (stringTwo > stringOne) {
        return 1;
    } else if (stringTwo = stringOne) {
        return 0;
    }

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    /*
    I: inputs two strings
    O: outputs 1, -1 or 0 based on if the second string is higher, lower or equal to the first in alphabetical order
    C: N/A
    E: N/A
    */

    // create a conditional statement that compares the strings, start with stringOne or it won't work
    if (stringOne < stringTwo) {
        return -1;
    } else if (stringOne > stringTwo) {
        return 1;
    } else if (stringOne = stringTwo) {
        return 0;
    }

    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
