//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // use Object.values() method to turn the object values into an array
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // create variable and initialize to Object.keys() method to turn keys into an array
    var objKeys = Object.keys(object);
    // return the array elements as a string
    return objKeys.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // create variable and initialize to Object.values() method to turn values into an array
    var objVals = Object.values(object);

    // create a new array variable
    var newArray = [];

    // iterate over the objVals array
    for (var i = 0; i < objVals.length; i++) {
        // create a conditional statement: if current index is a string, push into new array
        if (typeof objVals[i] === "string") {
            newArray.push(objVals[i]);
        }
    }
    // turn newArray into a string
    return newArray.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // create a conditional statement and use typeof and Array.isArray to check for array or object
    if (Array.isArray(collection) === true) {
        return 'array';
        // do all the checks for "object" while using the typeof keyword
     } else if (typeof collection === 'object' && collection !== null && collection instanceof Date !== true && !Array.isArray(collection)) {
        return 'object';
    } 
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // use split method to turn the string into an array and initialize to variable
    var arr = string.split("");

    // capitalize arr[0]
    arr[0] = arr[0].toUpperCase();

    // return the array joined
    return arr.join("");
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // use split method to turn the string into an array and initialize to variable
    var array = string.split(" ");

    // create a newArr variable
    var newArr = [];

    // iterate over the array
    for (var i = 0; i < array.length; i++) {
        // capitalize each word in the array and push into newArr
     newArr.push(array[i][0].toUpperCase() + array[i].slice(1));

    }
 // return the array
     return newArr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // take the value of the object and uppercase the first letter and initialize to a variable
    var newName = object.name[0].toUpperCase() + object.name.slice(1);

    // return "Welcome " + name + "!"
    return "Welcome " + newName + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // take the 1st value of the object and uppercase the first letter and initialize to a variable
    var newTitle = object.name[0].toUpperCase() + object.name.slice(1);

    // take the 2nd value of the object and uppercase the first letter and initialize to a variable
    var newKind = object.species[0].toUpperCase() + object.species.slice(1);

    // return "Welcome " + name + "!"
    return newTitle + " is a " + newKind;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // create conditional statement that checks if noises array exists and if the length is > 0
    if (object.noises && object.noises.length > 0) {
        // if true, return the array joined with a space
        return object.noises.join(" ");
    } else {
        // if false, return string: "there are no noises"
        return "there are no noises";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // iterate over the string
    for (var i = 0; i < string.length; i++) {
        // create a conditional statement: if string includes word
        if (string.includes(word)) {
            // if true, return true
            return true;
        } else {
            // if false, return false
            return false;
        }
    }

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // push the name of the friend into the friends array
    object.friends.push(name);
    
    // return the object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
        // create conditional: if - object has friends array and array includes name
        if (!object.friends) {
            // if true, return true
            return false;
        } 

        for (var i = 0; i < object.friends.length; i++) {
            if (object.friends.includes(name) === true) {
                return true;
            } else {
                return false;
            }
        }
        
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // create container for new array
    newArray = [];

    // iterate over the array
    for (var i = 0; i < array.length; i++) {
        // check if the current index is NOT equal to name and doesn't include name
        if (array[i].name !== name && !array[i].friends.includes(name)) {
            // push the current index's name into newArray
            newArray.push(array[i].name);
        }
    }
    // return newArray
    return newArray;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // re-assign the value to the key or create key and assign the value
    object[key] = value;
    // return the object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // initialize variable result to the array.filter method
    let result = array.filter((element, index) => {
        // use indexOf method to get the first occurrence of an element 
        return array.indexOf(element) === index;
    })
    // return the result
    return result;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}