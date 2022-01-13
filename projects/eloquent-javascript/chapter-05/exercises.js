// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) { // return array with applied reduce function
  return array.reduce(function(previous, current) { // takes in previous and current value
    // return the previous value concatted to the current value
    return previous.concat(current);
  })
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, stop, update, action) {
  // base
    // if the stop function called on the start value is equal to false, then just return
  if (stop(start) === false) {
    return;
  }
  // recursion
    // call action on the current value of start
  action(start); // console.log(0)
  // return callback on loop function
  return loop(update(start), stop, update, action);
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  // if function is undefined, return true
  if (test === undefined) {
    // iterate through array
    for (let i = 0; i < array.length; i++) {
      // test if every element has a falsy value, if so, return false
      if (!array[i]) {
          return false;
      }
  }
} else { 
    // iterate through array
    for (let i = 0; i < array.length; i++) {
      // test if every element is not true and return false if even one is not true
      if (!test(array[i], i, array)) {
          return false;
      } 
  }
}
// return true outside of conditional statement
return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  switch (scripts.length) {
    case 0:
      return 'no dominant direction found';
    case 1:
      return scripts[0].name;
    default:
      if (scripts.reduce((acc, cur) => acc.count === cur.count)) {
        return 'no dominant direction found';
      } else {
        return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
      }
  }
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
