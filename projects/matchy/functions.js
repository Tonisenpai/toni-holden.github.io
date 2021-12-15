/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare the function "search" that takes the parameter of an array
function search(animals, string) {
    // loop over the animals array 
    for (var i = 0; i < animals.length; i++) {
        // create conditional statement: if (found), return object, if not, return null
        if (animals[i].name === string) {
            return animals[i];
        } 
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare the function "replace" with 3 parameters
function replace(animals, name, replacement) {
    // iterate over the animals array
    for (var i = 0; i < animals.length; i++) {
        // create a conditional statement: if (name found), replace object; if not, do nothing
        if (animals[i].name === name) {
            animals[i] = replacement;
        } else {
          // return outside of the function to not break the loop  
        }
        return;
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create the function remove (animals, name)
function remove(animals, name) {
    // iterate over animals array
    for (var i = 0; i < animals.length; i++) {
       // if name exists in array, remove object
       if (animals[i].name === name) {
           // use the splice method to remove hte current index of the animals array
           return animals.splice(animals[i]);
       }
    }
    return;   
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a function called add that takes 2 parameters: animals, animal
function add(animals, animal) {
    // iterate over the animals array
    for (var i = 0; i < animals.length; i++) {
        // create conditional statement 1: check if name and species property is > 0
        if (animal.name.length > 0 && animal.species.length > 0 && animals[i].name === animal.name) {
            return;
        }
    }
    return animals.push(animal);
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
