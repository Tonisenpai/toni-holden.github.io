/**
* OPERATORS:
 
* 0. Operators in JavaScript are used to make certain calculations or comparisons in functions 
and statements. These operators act on all datatypes and for many different operations. In JavaScript, 
there are seven different types of operators that can be used to manipulate values in some way.
 
* 1. Assignment Operators: Assignment Operators: assignment operators are used in the assignment of values 
to variables. The typical assignment operator, symbolized by the equal sign (=) assigns the value on the right 
side of the symbol to the variable declared on the left side of the symbol. The "add and assign" operator is 
symbolized by the plus and equal sign (+=), which adds the value on the right side to the variable to the left 
side, and then assigns that new (added) value to the variable all at the same time. The "subtract and assign" 
operator, symbolized by the minus and equal sign (-=), does much the same as the "add and assign" operator, except 
it uses subtraction instead of addition. The "multiply and assign" operator does the same, but with multiplication 
and is symbolized by an asterisk and equal sign (*=), and "divide and assign" uses division with the same kind of 
application, symbolized with a backslash and equal sign (/=). The modulus and assign operator is symbolized by the 
modulus or percentage symbol and an equal sign (%=). this operator takes the remainder of dividing the variable on 
the left side of the operator by the one on the right side and assigns that new variable to the variable.  
  
* 2. Comparison Operators: these operators are used often times in conditional statements and loops to perform an 
action when a specific condition is met. They compare two values and return a boolean value depending on the values 
on either side of the operator. The “is equal to” operator is symbolized by two equal signs (==). This one is used to 
loosely compare two values. For example, a string representing the number 32 and the actual number 32, when compared 
with this operator, would return true because of a concept called coercion. The interpreter coerces one value of a different 
data type to the same data type as the other value to compare the two and see if they are the same, which is the reason this 
works. The opposite to this operation is the “is not equal to” operator that is symbolized by an exclamation point or bang 
operator and an equal sign (!=). This is also a loose comparison. There is a stricter version of these comparisons. The 
"strictly equal" operator is symbolized by three equal signs (===). This also takes into account if the data types are the
same as well. Even if the values are seemingly the same, if they are not of the same data type, it will still return false.
The "strictly not equal" operator is symbolized by the bang operator and two equal signs (!==) and checks if two values are
not equal under a strict comparison. Strict comparison is recommended above loose comparison to mitigate errors in your code
later on, unless there is a specific reason for you to use loose comparison (you should never really feel the need to use loose comparison).
The "Is Greater Than" operator operates the same as in any math class. It checks if one value is numerically greater than
another and uses the greater than symbol (>). The "Less Than" operator uses the less than symbol (<) and checks if the value
on the left of the symbol is less than the value on the right. The "Greater Than or Equal to" operator uses the same symbol
in math class (>=) and checks if the value on the left side of the operator matches or is greater than the one on the right
side. The "Less Than or Equal to" operator does the same type of comparison, but checks if it is less than or matches. It is 
symbolized by the less than or equal to symbol (<=).
 
* 3. Arithmetic Operators: these operators are used to perform mathematical calculations. They're basically all the symbols
used in math class for simple mathematical operations. The "addition" operator (+) adds two values together. This one is a
little special though, because it can also concatenate strings. The "subtraction" operator (-) subtracts one value from 
another one. The multiplication operator (*) multiplies two values together. The division operator (/) divides one value by
another. The modulus operator (%) divides one value by another and then returns the remainder of that division. The increment
operator (++) adds 1 to something as opposed to saying "+ 1". This operator is used a lot in loops (see Lops page). The 
decrement operator (--) is a shortcut to subtracting one from a number also used a lot in loops. 
  
* 4. Logical Operators: There are three different logical operators. These are used mostly in conditional statements 
(see Control-Flow page). These operators give you the option to check more than one condition at a time in one conditional
statement. The "And" operator (&&) returns true if both conditions in front and behind the operator passes as true. The "Or"
operator (||) returns true if one of the conditions on either side of the operator returns true. The "not" or "bang" operator
(!) can be used on a single comparison to see if something is "not", for example: "!Array.isArray" will check if the value 
passed in is not an array, and if this statement is true, this will return true. 
 
* 5. String Operators: the "+" operator can also be used to add (concatenate) strings.

* 6. Unary Operators: Unary operators are placed before the values or operands they act on. They attempt to change them into 
numerical values. It will attempt to change it into either a 1 or a 0, or the number it was assigned to, if it was assigned to 
a number.

* 7. Conditional or Ternary Operators: A ternary operator is also a conditional operator. It begins with a condition, followed 
by a question mark and will result in true or false, where true is located behind the question mark and before a colon and false 
is located behind the colon.
*/

// 1. Arithmetic Operators //

// addition operator
let myNumber = a + b; // this is using the addition operator
let a = 7;
let b = 8;
console.log(myNumber);  // should print 11 to the console

let randoFunc = function(years) { // an example of concatenation with strings and a value.
	console.log("I've worked here for " + years + " years."); // when called will print a full sentence to the console
}

// subtraction operator
let newNumber = x - y; // this is using the subtraction operator
let x = 6;
let y = 3;
console.log(newNumber);  // should print 2 to the console

// multiplication operator
let multipliedNums = num1 * num2; // this is using the addition operator
let num1 = 20;
let num2 = 5;
console.log(multipliedNums);  // should print 100 to the console

// division operator
let dividedNum = num / other; // this is using the addition operator
let num = 30;
let other = 5;
console.log(myNumber);  // should print 6 to the console

// modulus operator
if (16 % 2 === 0) {
	return true; // conditional statement that returns true if given value is divided by 2 with remainder of 0
}


// 2. Comparison Operators //

let a = 5;
let b = 7; 

a === b; // returns false

a < b; // returns true

b > a; // returns true

let x = "Jackie";
let y = "Wilfred";

x != y; // returns true


// 3. Logical Operators //


let num1 = 52;
let num2 = 12;

If (num1 && num2 != 0) { // will return true because neither number is equal to 0
	return true;
};

// the "Or" operator

If (num1 || num2 === 0) { // will return false because neither number is equal to 0
	return true;
};

!(num1 === num2); // will return true because num1 is not equal to num2


// 4. Assignment Operators //


var street = "Frenchmen"; // the variable "street" is assigned a string


let x = 10;
let y = 15;
x += y; // adds both values and assigns the result to the left operand, result of 25 will be assigned to x

let x = 5;
let y = 4;
x -= y; // adds both values and assigns the result to the left operand, result of 1 will be assigned to x

let x = 6;
let y = 5;
x *= y; // adds both values and assigns the result to the left operand, result of 30 will be assigned to x


let x = 20;
let y = 2;
x /= y; // divides both values and assigns the result to the left operand, result of 10 will be assigned to x


// 5. Unary Operators //

console.log(+true); // expected output: 1

console.log(+false); // expected output: 0


// 6. Ternary Operators //

function fellowsList(name) {
	return (isFellow ? true : false); // will return true if name is in list of fellows
}