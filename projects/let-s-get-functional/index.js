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
    // create variable "average" and initialize it to the entire reduce function
    let average = _.reduce(array, function(total, customer, index) {
        // create the variable "regex" and initialize to regex filter
        let regex = /[$,]/g;
        // create variable "replaced" and initialize to replace method on customer's balance
        // replace method is replacing the string in customer balance with regex - syntax: replace(regex, "")
        let replaced = customer.balance.replace(regex, "");
        // create "floated" variable and initialize to parseFloat method on replaced variable
        let floated = parseFloat(replaced);
            // total is added and assigned (+=) floated variable at eaach iteration
            total += floated;

           // create conditional: if - index is strictly equal to the last element in the array 
           if (index === array.length - 1) {
               // return the total divided by the length of the array
               return total / array.length;
           } else { // else return the total
               return total;
           }
      }, 0); // use a seed to initialize the first thing passing through to be a number
      // return the average
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

var friendFirstLetterCount = function(array, customer, letter) {
    let customerObj = _.filter(array, function(cust) {
        return cust.name === customer;
      })
    
      let friendList = customerObj[0].friends;

    // create return statement for reduce function
    let letterCount = _.reduce(friendList, function(count, current) {
        if (current.name[0].toUpperCase() === letter.toUpperCase()) {
            // count plus equals 1 
            count += 1;
        } 
        // return the count
        return count;
    }, 0);
    return letterCount;
};

var friendsCount = function(array, name) {
    
};

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
