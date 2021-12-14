/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create variable named object and assign it to object literal
var animal = {};

// create key and value for "species" using dot notation
animal.species = 'pig';
// create key and value for "name" using bracket notation
animal['name'] = 'Andrew';
// create key for noises and initialize with array literal
animal.noises = [];

// console.log "animal"
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create the variable "noises" and set to array literal
var noises = [];

// use bracket notation to add element to array
noises[0] = 'oink';
// use array function to add another noise
noises.push('grunt');
// use unshift function to place another noise to beginning of array
noises.unshift('snort');
// use length property to add a noise to the end of the array
noises[noises.length] = 'squeal';

console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// assign the 'noises' property on 'animal' to noises array
animal.noises = noises;

// add another noise to 'noises' property on animal
animal.noises.push('chomp');

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create the variable 'animals' and assign to array literal
var animals = [];

// push the 'animal' object to the animals array
animals.push(animal);

// create variable 'duck' and assign it specific values
var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};

// push duck into animals array
animals.push(duck);

// create 2 more animal objects and push them into animals array
var dog = {
  species: 'dog',
  name: 'Perry',
  noises: ['bark', 'growl', 'whimper', 'pant']
};

var horse = {
  species: 'horse',
  name: 'Carey',
  noises: ['neigh', 'whinny', 'snort', 'nicker']
};

animals.push(dog, horse);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}