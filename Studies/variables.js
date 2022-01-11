/**
 * VARIABLES:
 * 
 * 0. What are variables? Variables can be thought of as containers that hold values.
 * They are empty until you fill them with something. They can exist without being
 * tied to a value, but if you try to call it later, the value will return "undefined".
 * These variables are later used in statements, expressions and functions.
 * 
 * 1. For a variable to exist, they must first be declared. The declaration of a 
 * function is how your code knows of the existence of your variable. There is a specific
 * syntax used to declare a variable. To begin, you must use one of three keywords:
 * "var", "let", or "const". Next, you must name the variable (using camelCase). To
 * complete your declaration, you end your expression with a semicolon.
 * 
 * 2. To add a value to a variable, it must be "assigned" to the variable. This is the 
 * second phase of creating a functional variable. Assignment is done by using what is called 
 * an assignment operator (=). This symbol does not mean "to be equal to". rather, it can be 
 * seen as saying this variable "is" (temporarily) this value. Variables can also be 
 * "initialized" during declaration. A variable being initialized just means that it is
 * declared and assigned all in one line of code. This is recommended for most situations.  
 * 
 * 3. Variables can also be re-assigned, under normal circumstances (within its own scope). 
 * There are some instances where this is not the case, but basically, they can be 
 * re-assigned when using the "var" keyword. In cases where the keywords "let" and "const"
 * are concerned, this is where you'll run into some issues with re-assignment. This has
 * a lot to do with the concept mentioned above called "scope". Once assigned, variables
 * assigned or initialized with the keyword "const" cannot be re-assigned throughout the 
 * life of your program. Let variables are block/function scoped, which means that they
 * cannot be accessed outside of the function it was declared in.
 * 
 * 4. The keyword "var" is considered to be global scoped, unless it is declared inside
 * a function, in which case it would then be function scoped. Variables declared with the
 * keyword "var" can be re-assigned. They can also be re-declared, which could cause errors
 * down the line if you aren't careful. When JavaScript ES6 rolled out, the language made 
 * some changes that dealt with this issue. Let and Const were created as keywords that
 * had special rules to combat the re-declaration issue. Variables declared with the "let" 
 * keyword can be re-assigned in the same way those with the "var" keyword can. However,
 * they cannot be re-declared, because this will throw an error. Let variables are 
 * block-scoped. This means that they cannot be accessed outside of the block of code in
 * which they were declared. When declared inside of a function, they cannot be accessed 
 * outside of that function. An error will be thrown in such cases. Variables declared with
 * the "const" keyword cannot be re-assigned or re-declared. These variables act just as
 * they seem, they are constant, and do not change throughout the life of your program.
 * 
 * 5. Hoisting is a concept that refers to an action that the JavaScript interpreter takes
 * prior to the execution of the code in your program in which it moves the declaration 
 * of certain variables and functions to the top of the code to make them accessible before
 * the program even runs. All function definitions are hoisted, but not anonymous functions
 * and not all variables are hoisted. Let and Const variables are not hoisted. All variables
 * declared with the "var" keyword are hoisted unless they are declared inside of a function.
 * All undeclared variables are global variables when assignment of the variable is executed.
 */


// 1. Declaration //

// variable declared with "var" keyword
var tree;
// typically a global scoped variable

// variable declared with "let" keyword
let pageCount;
// typically is a function-scoped variable

// variable declared with "const" keyword
const parish;
// throws an error, because const variables must be initialized with a value
// error: "SyntaxError: Missing initializing in const declaration"


// 2. Assignment and Initialization //

// Assigning values to the previously declared variables
tree = "oak";

pageCount = 371;

const parish = "Orleans"; // initialized to a value


// Initialization of variables look like this:

var cupBrand = "Dixie";

let population = 200351;

const sunnyWeather = true;


// 3. Re-assignment //

// Re-assignment is just changing the value at the back of a variable, we are re-assigning the previously declared "tree" variable

tree = "spruce";

tree = "pine";

console.log(tree);
// logs "pine" to the console


// 4. Var, Let and Const //

// var is typically a global variable, you can re-assign them and re-declare them

// another example of re-assignment
var tea = "Vanilla Chai";

var tea = "Matcha Green";

console.log(tea);
// re-declared and re-assigned variable using "var" keyword
// prints "Matcha Green" to the console

// let is a block or function scoped variable
let book = "Wizard of Oz";

// re-assigning let variable
book = "Pride and Prejudice";

console.log(book);
// prints "Pride and Prejudice" to the console

// cannot be re-declared, will throw an error
let book = "Lord of the Rings";

console.log(book);
// error message: "SyntaxError: Identifier 'book' has already been declared"

// const cannot be re-declared or re-assigned and must be initialized to a variable
const shoes;
// error message: "SyntaxError: Missing initializer in const declaration"

const cerealBrand = "Cocoa Puffs";
cerealBrand = "Fruit Loops";
// error message: "TypeError: Assignment to constant variable"

// 5. Hoisting //

console.log(news);
var news = "Fox 8-Live";
// news is a variable declaration, thus it is hoisted

/*
the interpreter sees the above code as:

var news; => value is undefined here
console.log(news);
news = "Fox 8-Live";
*/

var households = 4;
var numOfHouses = 5085;
var population = getPop(households, numOfHouses);

function getPop(pplCount, houseCount) {
    return pplCount * houseCount;
} // getPop is a function declaration, all function declarations are hoisted above variable declarations

/*
the interpreter sees the above code as:

function getPop(pplCount, houseCount) {
    return pplCount * houseCount;
}
var households;
var numOfHouses;
var population;
households = 4;
numOfHouses = 5085;
population = getPop(households, numOfHouses);
*/

chipCount = 3250;

if (chipCount < 50) {
    var message = 'restock';
}
console.log(message); // prints "restock"
// var variables are hoisted and will print to the console in this instance

chipCount = 3250;

if (chipCount < 50) {
    let message = 'restock'; // message is greyed out here because it is inaccessible outside of this block of code
}
console.log(message);
// let and const variables are block-scoped and thus are not hoisted
// throws ReferenceError: message is not defined


console.log(cantReach);
let cantReach = true;
// throws ReferenceError: cantReach is not defined

console.log(x);
let x = 567;
// throws ReferenceError: Cannot access 'x' before initialization