////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  let range = [];
  // edge case
  if (start === end) {
    return [];
  }

  // if step is not passed in
  if (step === undefined) {
    for (let i = start; i <= end; i++) {
      // 1, 2, 3, 4
      range.push(i);
    }
  } else { // step was passed in
    if (step < 0) {
      return [];
    } else {
      for (let i = start; i <= end; i += step) {
        range.push(i);
      }
    }
  } // return range
  return range;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  let total = 0;
  let nums = array.length;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

/*
Another way to solve this:

function reverseArray(array) {
  let reversed = [];
  for (let i = 0; i < array.length; i++) {
    reversed. unshift(array[i]);
  }
  return reversed;
}

*/

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) { // => [1, 2, 3, 4]
  // [1, 2, 3, 4] // even number of values
  // [1, 2, 3, 4, 5] // odd number of values

  // [1, 2, 3, 4] =>
    // [4, 2, 3, 1]
    // [4, 3, 2, 1]

    if (array.length % 2 === 0) {
      for (let i = 0; i < array.length / 2; i++) { // i < 2
        let temp = array[i]; // temp = 1
        array[i] = array[array.length - 1 - i]; // array[0] = array[3 - 0] or array[0] = 4
        array[array.length - 1 - i] = temp; // [4, 3, 2, 1]
      }
    } else {
      for(let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
      }
    }
    return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) { // create variable called rest and initialize to null
  let rest = null;

  // iterate over the array
  for (let i = array.length - 1; i >= 0; i--) {
    // basically, re-assign rest to an object with a key of value and value of current array index and another key of rest
    rest = {value: array[i], rest}
  } // return rest
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) { // create variable called "arr" and initialize to array literal
  let arr = [];
  // iterate through list
  for (let node = list; node; node = node.rest) {
    //push the value of node into arr
    arr.push(node.value);
  } // return arr
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  return {
    value: value,
    rest: list
  }
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  // base case
  if (n === 0) {
    return list.value;
  } else if (n < 0) {
    return undefined;
  }

  // recursion
  return nth(list.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  if (x === null || y === null) {
    return false;
  }
  // if both values are not objects, compare them directly
  if (typeof x !== 'object' && typeof y !== "object") {
    return x === y;
  }
  // create arrays of objects keys
  var xKeys = Object.keys(x); // ['a', 'b']; [test]
  var yKeys = Object.keys(y); // ['a', 'b']; [test]

  //determine if the keys arrays are the same length, if not return false
  if (xKeys.length !== yKeys.length) {
    return false;
  }

  // iterate through the keys arrays
  for (var i = 0; i < xKeys.length; i++) {
    // does keys2 include the current key from keys1?
    // keys includes('a')
    if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[yKeys[i]])) {
      // keys.includes('a')
      return false;
    }
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
