// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    /* 
    I: inputs a value
    O: outputs a boolean based on the condition of if the value is an array or not
    C: N/A
    E: N/A
    */
    
    // create a conditional function that compares the value using various methods
    // use array.isArray method
    if (Array.isArray(value) === true) {
        return true;
    } else {
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
      /* 
    I: inputs a value
    O: outputs boolean that checks if value is an object
    C: N/A
    E: N/A
    */
    
    // create conditional statement
    // first statement checks for array, instanceof date, and null
    if (typeof value === 'object' && !Array.isArray(value) && value !== null && value instanceof Date !== true) {
        return true;
    } else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
   /* 
   I: inputs a value
   O: outputs a boolean - if value is a collection (object or array)
   C: N/A
   E: N/A
   */ 
     // create a conditional statement that checks if value is an array or an object
     // include: not a date and not null
     if (Array.isArray(value) === true) {
        return true;
     } else if (typeof value === 'object' && value !== null && value instanceof Date !== true) {
        return true;
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
      /* 
    I: inputs a value
    O: outputs a string that indicates the data type of the value
    C: N/A
    E: N/A
    */
    
    // create a conditional statement that tests each type and returns a string
    // start with array and make sure a normal object is last because of top-down structure
    if (Array.isArray(value) === true) {
        return 'array';
    } else if (typeof value === 'object' && value === null) {
        return 'null';
    } else if (typeof value === 'object' && value instanceof Date) {
        return 'date';
    } else if (typeof value === 'string') {
        return typeof value;
    } else if (typeof value === 'number') {
        return typeof value;
    } else if (typeof value === 'boolean') {
        return typeof value;
    } else if (typeof value === 'function') {
        return typeof value;
    } else if (typeof value === 'undefined') {
        return typeof value;
    } else {
        return 'object';
    }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
