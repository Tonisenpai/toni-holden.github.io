// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
    if (Array.isArray(value) === true) {
        return 'array';
    } else if (typeof value === 'object' && value === null) {
        return 'null';
    } else if (typeof value === 'object' && value instanceof Date) {
        return 'date';
    } else if (typeof value !== 'object') {
        return typeof value;
    } else {
        return 'object';
    }

}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) {
    // create a conditional statement that checks if the array is or is not actually an array
    if (!Array.isArray(array)) {
        // return an empty array
        return [];
    } else {
        // iterate over the array
        for (let i = 0; i < array.length; i++){

        }
        // create another conditional statement: if - there is no number or it's not a number
        if (number < 0) {
            // return an empty array
            return [];
            // else if: the number is NaN or it's type does not equal 'number'
        } else if (number === NaN || typeof number !== 'number') {
            // return the first element of the array
            return array[0];
            // else if: the number is greater than the array's length
        } else if (number > array.length) {
            // return the entire array
            return array;
            // else: 
        } else {
            // use the slice method to return a sliced copy of the first items of array up until the index of the number provided
            return array.slice(0, number);
        }
    }

    
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number) {
    // create a conditional statement that checks if the array is or is not actually an array
    if (!Array.isArray(array)) {
        // return an empty array
        return [];
    } else {
        // iterate over the array backwards
        for (let i = 0; i < array.length; i++){

        }
        // create another conditional statement: if - there is no number or it's not a number
        if (number < 0) {
            // return an empty array
            return [];
            // else if: the number is NaN or it's type does not equal 'number'
        } else if (number === NaN || typeof number !== 'number') {
            // return the last element of the array
            return array[array.length - 1];
            // else if: the number is greater than the array's length
        } else if (number > array.length) {
            // return the entire array
            return array;
            // else: 
        } else {
            // use the slice method to return a sliced copy of the last items of array up until the index of the number provided
            // to get the last number of items, must use negative number and array.length to access it
            return array.slice(-number, array.length);
        }
    }
}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) {
    // iterate over the array
    for (let i = 0; i < array.length; i++) {

        // create a conditional statement: if - value is not present
        if (array[i] === value) {
            return i;
        } 
    }
    // return -1 outside of for loop
    return -1;
}



/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
    // use ternary operator and the includes method to check if array includes the value
    return array.includes(value) ? true : false;
}



/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) {
    // determine if collection is an array
    if(Array.isArray(collection)) {
        // iterate through the collection
        for(var i = 0; i < collection.length; i++) {
            // call input function, passing current value of array, current index, and array as arguments
            func(collection[i], i, collection);
        }
    } else {
        // iterate through the object
        for (var key in collection) {
            func(collection[key], key, collection);
        }
    }
}



/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
    // create a new set and initialize it to a variable called special
    let special = [...new Set(array)];
    // return the variable
    return special;
}



/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, test) {
    // create a new array variable and initialize it to array literal
    let outputArr = [];
    
    // iterate over the array
    for (let i = 0; i < array.length; i++) {
        // create conditional: if - call of function === true
        if (test(array[i], i, array)) {
            // push the current index of the array to the output array
            outputArr.push(array[i]);
        }
    }
    // return the output array
    return outputArr;
}




/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, test) {
    // create a new array variable and initialize it to array literal
    let outputArr = [];
    
    // iterate over the array
    for (let i = 0; i < array.length; i++) {
        // create conditional: if - call of function === true
        if (!test(array[i], i, array)) {
            // push the current index of the array to the output array
            outputArr.push(array[i]);
        }
    }
    // return the output array
    return outputArr;
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, test) {
    // create 2 new array variables and initialize it to array literal
    let output1 = [];
    let output2 = [];
    
    // iterate over the array
    for (let i = 0; i < array.length; i++) {
        // create conditional: if - call of function === true
        if (test(array[i], i, array)) {
            // push the current index of the array to the output array
            output1.push(array[i]);
        } else { // else, push it into the second output array
            output2.push(array[i]);
        }
    }
    // return the output array with both arrays "partitioned" in an outer array
    return [output1, output2];
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func) {
    // create output array
    let output = [];

    // determine if colletion is an array
    if (Array.isArray(collection)) {
        // iterate through array
        for (let i = 0; i < collection.length; i++) {
            // call input function, passing in current array value, current index and collection
            var result = func(collection[i], i, collection);
            output.push(result);
        }
    } else {
        for (var key in collection) {
            var result = func(collection[key], key, collection);
            output.push(result);
        }
    }
    // return the output array
    return output;
}



/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, prop) {
    // create an output variable and set it equal to the mapped function
  let output = _.map(array, function(value) {
      // return the property of the current value
      return value[prop];
  });
  // return the output
  return output;
}



/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, test) {
    // if function is undefined, return true
    if (test === undefined) {
        if (Array.isArray(collection)) {
            // iterate through array
            for (let i = 0; i < collection.length; i++) {
                // test if every element has a falsy value, if so, return false
                if (!collection[i]) {
                    return false;
                }
            }
        } else {// iterate through the object
            for (var key in collection) {
                // test if every element has a falsy value, if so, return false
                if (!collection[key]) {
                return false;
                }
            }
        }
        // determine if colletion is an array
    } else { 
        if (Array.isArray(collection)) {
            // iterate through array
            for (let i = 0; i < collection.length; i++) {
                // test if every element is not true and return false if even one is not true
                if (!test(collection[i], i, collection)) {
                    return false;
                } 
            }
        } else {
        for (var key in collection) {
            if (!test(collection[key], key, collection)) {
                return false;
                } 
            }
        }
    }
    // return true outside of conditional statement
    return true;
}



/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, test) {
    // if function is undefined, return true
    if (test === undefined) {
        if (Array.isArray(collection)) {
            // iterate through array
            for (let i = 0; i < collection.length; i++) {
                // test if every element has a falsy value, if so, return false
                if (collection[i]) {
                    return true;
                }
            }
        } else {// iterate through the object
            for (var key in collection) {
                // test if every element has a falsy value, if so, return false
                if (collection[key]) {
                return true;
                }
            }
        }
        // determine if colletion is an array
    } else { 
        if (Array.isArray(collection)) {
            // iterate through array
            for (let i = 0; i < collection.length; i++) {
                // test if every element is not true and return false if even one is not true
                if (test(collection[i], i, collection)) {
                    return true;
                } 
            }
        } else {
        for (var key in collection) {
            if (!test(collection[key], key, collection)) {
                return true;
                } 
            }
        }
    }
    // return true outside of conditional statement
    return false;
}


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, test, seed) {
    // if seed is not present
    if (seed === undefined) {
        // set seed to first value in the array
        seed = array[0];
        // iterate through array starting at the 1 index
        for (let i = 1; i < array.length; i++) {
            // assign function call to seed variable, will change at each iteration
            seed = test (seed, array[i], i);
        } 
    } else {
        // iterate through the array normally, with index equal to 0
        for (let i = 0; i < array.length; i++) {
            // assign function call to seed variable, will change at each iteration
            seed = test(seed, array[i], i);
        }
    }
    // return the seed
    return seed;
}


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(...obj1) {
    // use the Object.assign method to copy the properties
    let newObj = Object.assign(...obj1);

    // return the object
    return newObj;
}



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
