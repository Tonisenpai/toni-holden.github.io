/**
* FUNCTIONS:

* 0. To use a function, first we must declare the function. We do this by using the keyword "function" and then
followed by parentheses and curly braces. At the end a semicolon is placed. This is called an anonymous function.
A function is declared a little differently than everything else. First, you must use the function keyword. If it is 
an anonymous function, you would then use parentheses and then curly braces. Inside of the parentheses would be where
you would place your parameters you want your function to act on. Inside of the curly braces would be the meat 
of your function and how the function was to act on the given parameters. If it is a named function, you use the 
keyword and whatever you will name the function, and then the parameter as well as the action inside of the curly
braces.

* 1. A function has parameters that serve as placeholders for values called arguments that are "passed through" 
the function to gain a certain output. Assigning a function to a variable requires that you declare a variable first, 
then place the anonymous function behind the assignment operator, followed by a semicolon.

* 2. The syntax for a named function involves using the function keyword and then 
providing the function's name (using camel case), followed by parentheses and curly braces.

* 3. Assigning a function to a variable requires that you declare a variable first, then place the anonymous function 
behind the assignment operator, followed by a semicolon. These are simpler and quicker ways to write a function. The 
reason they are called arrow functions is because they point to the action using an arrow => and sometimes curly braces 
aren't necessary, unless the function requires more than one line. This is a new addition to JavaScript (ES6) to cut down 
on the time it requires to produce code.

* 4. The inputs of a function are found in the parentheses at the beginning of the function. These values are called
parameters. The outputs are what is returned or printed to the console after the function is called with arguments
that are passed in. Parameters are found in the parentheses. Arguments are passed into the placeholders (parameters)
as values to be acted on in the function. Arguments are passed into a function call. A function call is a way to pass
a value in (called an argument) and return a value from the arguments replacing the placeholders at the time of the 
function call. The syntax of a function call is just the name of the function and a pair of parentheses, with the 
arguments you want passed through inside the parentheses. The call ends with a semicolon at the end.

* 5. Scope: Scope is related to hoisting. Variables can only be hoisted inside their own scope. There are 3 different 
types of scope, function or local scope, global scope and block scope. Child scopes can have access to variables in the 
parent scope, but that is a one-way street, parent scopes cannot access variables in the child scope. Parameters are a
part of the local or function scope. The keyword "var" creates a new variable inside its scope and the "let" and "const"
keywords are only block scoped.

* 6. A closure is a function that gives you access to an outer function's scope from an inner function. Only functions
can create a closure, but not all functions act as closures.
*/

// 1. Declaration //

let newFunc = function(parameter) { // this is an anonymous function, needs to be a part of a function expression
	console.log("action goes here");
}


function toLowerCase(string) { // this is a named function
    // changing string to lowercase using toLowerCase method
    return string.toLowerCase();
}    


// 2. Assignment //

var reverse = function(string) { // the assignment happens here with the name, assignment operator and function
  if(string.length <= 1){
    return string;
}
else {
    return string.charAt(string.length - 1) + reverse(string.substring(0, string.length - 1));
}

};


// 3. Parameters vs Arguments //

let animeList = {
  myHeroAcademia: {
    "genre": "action",
    "rating": "14",
    "rankingThru10": 8,
  },
  fullmetalAlchemistBrotherhood: {
    "genre": "action",
    "rating": "16+",
    "rankingThru10": 7,
  },
  attackOnTitan: {
    "genre": "action",
    "rating": "18+",
    "rankingThru10": 9,
  }
};

 function getArrayOfAnime(obj) { // obj is the parameter, a placeholder for an argument to pass in
  console.log(Object.keys(obj));
  }



getArrayOfAnime(animeList); // animeList is the argument being passed into the function to be acted on
// this is an example of a function call

// 4. Arrow Functions //

// normal function 
function (x){
  return x + 2;
}

// arrow function
x => x + 2;

// 5. Scope //

var myName = "Mary"; // created in the global scope

function sayName() {
    var myDog = "Topaz"; // this is a local variable
    console.log(myName + " has a dog named " + myDog); // this will work as expected using a global variable and function's local variable
}

sayName();
console.log(myName); // this will print because it is a global variable
console.log(myDog); // this will not print because it is a local variable called in the global scope

// 6. Closure //

const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
  })(); // example borrowed from W3Schools