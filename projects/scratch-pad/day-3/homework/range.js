// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    /* 
    I: inputs two integers
    O: outputs an array containing all incrementing integers in between
    C: must create a range in ascending order if first number lower than second 
    or descending order if second number is lower than first
    E: N/A
    */
    
    // create a variable that will collect output
    var rangeArr = [];

    // create conditional statement that compares integers to perform some action based on results
    // start with: if - start is less than end
    if (start < end) {
        // create while loop that pushes incrementing values from start
        while (start <= end) {
            rangeArr.push(start++);
        } // create else if statement: else if - start is greater than end
    } else if (start > end) {
        // create while loop that pushes decrementing values from start
        while (start >= end) {
            rangeArr.push(start--);
        }
    }
    // return rangeArr
    return rangeArr;
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
