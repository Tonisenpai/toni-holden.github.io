/**
* STRING MANIPULATION:
* 0. Strings are simple datatypes, but they're not so simple. They are treated as objects masquerading as 
a simple datatype, and therefore has features a simple datatype normally wouldn't.
* 1. Strings have a length property, which can be used to assist in manipulating that string, especially
in the case of loops. It returns the length of a string (the length also counts the whitespaces as 
characters. However, it really shines when it is used to iterate over the length of a string (in a loop)
in order to act on the string or elements of the string in some way.
* 2. Strings can be manipulated using a specific operator. The "+" operator does not only add numerical 
values together. You can also add strings together using this operator. This is called "concatenation".
* 3. Strings can also be manipulated using methods: ".concat()", ".slice()", ".inlcudes()", ".indexOf()", 
".toUpperCase()", ".toLowerCase()".
*/

// 1. the .length property //

// the length of this string is printed to the console

var string = "What's in a name?";

var stringSize = string.length; // prints "17" to the console

// this property is used to iterate over the string to add a character to each characer in the string

var string = "Kk";

var string2 = "Fll";

function missingLetters (string, char) {
	
  var newStr = "";
	
  for (var i = 0; i < string.length; i++) { // the "i" is the current index during each iteration
	  
  // performs some action
   newStr = newStr + string[i] + char;
	  
  }
  
  return newStr;
}

console.log(missingLetters(string, "i")); // prints "Kiki" to the console

console.log(missingLetters(string2, "a")); // prints "Falala" to the console

// 2. with operators //

// example of concatenating strings together 
console.log("Today's" + " " + "weather forecast");
// prints "Today's weather forecast" to the console


// example of concatenating strings that are initialized to a variable
var nameString = "Sally";
var sentenceFrag = " has many tasks to complete.";
console.log(nameString + sentenceFrag); 
// prints "Sally has many tasks to complete" to the console

// example of concatenating strings inside of a function
function printSentence (stringOne, stringTwo) {
  console.log(stringOne + " " + stringTwo);
}
// this is the function call for the above function
printSentence("High", "Five");
// prints "High Five" to the console 

// 3. with methods //

// .concat(): takes two or more strings, joins them together, and then returns a copy of them all concatenated into one string
let str1 = "Bilbo and Frodo ";

let str2 = "Baggins ";

console.log(str1.concat(str2)); 
// prints "Bilbo and Frodo Baggins " to the console

console.log(str2.concat(str1));
// prints "Baggins Bilbo and Frodo " to the console


// .slice(): makes a copy of a specified section of a string value from a provided index range and	returns a new string
var string = "There's no place like home!";

console.log(string.slice(21, string.length - 1));
// slice range:          start,    end
// prints "home" to the console, the separated range 

console.log(string);
// slice is non-destructive and the initial string is not affected


// .indexOf(): takes in the parameter of a character in a string. 
// If it is found, then the index of the first instance of the character is returned. 
// If it is not found, it returns -1.
var string = 'Nintendo 64';

console.log(string.length); // prints 11 to the console

console.log(string.indexOf('6')); // prints 9 to the console
// the indexOf() method returns a number


// .lastIndexOf(): returns the index of the last instance of an element or portion of the string
// If it is found, then the index of the last instance of the character is returned. 
// If it is not found, it returns -1.
var string = 'White Christmas';

console.log(string.length); // prints 15 to the console

console.log(string.lastIndexOf('t')); // prints 11 to the console
// the lastIndexOf() method returns a number


// .toUpperCase(): takes a string, converts all the characters (or in some cases a specified section of the string) to uppercase, 
//and then returns the result
var lyrics = 'the hills are alive';

console.log(lyrics.toUpperCase());
// prints "THE HILLS ARE ALIVE" to the console


// .toLowerCase(): takes a string, converts all the characters (or in some cases a specified section of the string) to lowercase, 
// and then returns the result
var stringSentence = "WHISPER TO THE WIND";

console.log(stringSentence.toLowerCase());
// prints "whisper to the wind" to the console


// .split(): separates a string into an array of strings based on a character sent as a parameter to the method
// split will return the array containing the split element(s)
let str = "Please check in at the front desk.";

let strCopy = str.split(' ');
console.log(strCopy);
// expected output: Array ["Please, check, in, at, the, front, desk."]


// .trim(): trims the white spaces in the string
let store = '   Whole Foods   ';

console.log(store);
// expected output: "   Whole Foods   ";

console.log(store.trim());
// expected output: "Whole Foods";



// list of some other methods:

/**
 * .charAt()
 * .charCodeAt()
 * .fromCharCodeAt()
 * .replace():
 * .replaceAll()
 * .substr()
 * .substring()
 */