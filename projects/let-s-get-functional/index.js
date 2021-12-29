// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./toni-holden.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // use filter function to return an array of only the male customers
    let males = _.filter(array, function(customer) {
        return customer.gender === 'male';
    }); // resolves to array of only male customer objects
    return males.length;
};

var femaleCount = function(array) {
    // use reduce to return the number of female customers
    let numFemales = _.reduce(array, function(females, customer, index) {
        // determine if the current customer's gender is female
        if (customer.gender === 'female') {
            // if true, add 1 to the females accumulator value
            females += 1;
        }
        // return females
        return females;
    }, 0); // return the number female customers
    return numFemales;
};

var oldestCustomer = function(array) {
    // create variable 'oldest' and set equal to reduce function
    var oldest = _.reduce(array, function (prev, current) {
        // create conditional: if - the previous age is less than the current age
		if (prev.age < current.age) {
            // return the current object
			return current;
		} else { // else return the previous object
			return prev;
		}
	});
        // return the oldest object's name property
		return oldest.name;
};

var youngestCustomer = function(array) {
    // create variable 'youngest' and set equal to reduce function
    var youngest = _.reduce(array, function (prev, current) {
        // create conditional: if - the current age is less than the prev age
		if (current.age < prev.age) {
            // return the current object
			return current;
		} else { // else return the previous object
			return prev;
		}
	});
        // return the youngest object's name property
		return youngest.name;
};

var averageBalance = function(array) {
    let average = _.reduce(array, function(total, num, index) {
         total += num;

         if (index === array.length - 1) {
             return total/array.length;
         } else {
             return total;
         }
    });
    return average;
};

var firstLetterCount = function(array, letter) {
    // create return statement for reduce function
    return _.reduce(array, function(count, current) {
        // create conditional statement: if - the first index of the name in current equals the letter
        // must be case insensitive
        if (current.name[0].toUpperCase() === letter.toUpperCase()) {
            // count plus equals 1 
            count += 1;
        } 
        // return the count
        return count;
    }, 0);
}

var friendFirstLetterCount = function(array, letter) {
    // create return statement for reduce function
    return _.reduce(array, function(count, current) {
        
    })
};

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
