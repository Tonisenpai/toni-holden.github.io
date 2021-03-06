/**
* CONTROL-FLOW:
 
* 0. Code is read from top to bottom, line by line. Aside from Hoisting,
this will be the case. Control flow is a concept that allows you to monitor 
and manipulate how your code will be executed and how streamlined that process 
is using conditional logic to guide the JavaScript interpreter through your 
code and account for every case/scenario that could arise in your code. This
concept is also a way to mitigate errors in your code. The official definition
of this concept is "the order in which the computer executes statements in a 
script"(MDN).
 
* 1. If Statements: these are single conditional statements that test a condition passed into it 
like a parameter in a function and inside of curly braces (like in a function) the action or return 
statement exists to act on values that pass the condition. The syntax for these statements is the 
keyword "if", a space and then a pair of parentheses. Inside of the parentheses is where the condition 
to be tested lives. Following this is a set of curly braces, and inside of this is where you put in the 
action or return statement. After the ending curly brace, put a semicolon to round out the statement.
  
* 2. Else-If Statements or Conditional Chaining: conditional chaining is basically a chain of if and else 
statements that are cycled through line by line from top to bottom, checking against multiple conditions 
before the final return at the end of the cycle. The beginning of the chain starts with the first if statement, 
which has the syntax previously explained. Right after the ending curly brace of the if statement, place the 
keyword "else if" and another set of parentheses. Inside these parentheses exists another condition to be 
checked against. After the parentheses are another set of curly braces and inside those are the action to be 
taken if the test of that condition passes. Typically, an else statement also follows this, but at the end of 
the chain, a semicolon ends the entire thing. If and Else If statements can continue a chain for as long as 
there are conditions that need to be tested.
 
* 3. Else Statements: these statements exist to round out a conditional chain. Else statements are a bit different 
as they don't necessarily need to pass in a condition. This is because if there are any conditions that don't match 
the others in the full conditional chain, this else statement will apply an action to those cases with or without a 
condition being passed through by default. Syntax for these are just the "else" keyword after the final curly brace 
of the chain and a last set of curly braces that hold the action taken on all other cases not matching the conditional 
chain. Following the ending curly brace, a semicolon ends the statement.
  
* 4. Switch Statements: a switch statement is another kind of conditional statement that controls the flow of your 
code. The syntax and the way the interpreter traverses your code will be decidedly different than it would be in an 
If-Else chain. The way a switch statement moves from case to case is to hit a "break" statement that then will make 
the interpreter switch to a new conditional case to check against. A switch statement is better used if you need to 
check against a number of different values (instead of conditional phrases like in the If-Else chains). The beginning 
syntax of the switch statement is the "switch" keyword, followed by parentheses, and inside of these parentheses is the 
variable to be checked against. Following this on the next line is the "case" keyword, followed by another value that 
could be assigned to the variable (like, in the case that this value is the assignment to the aforementioned variable...etc.) 
the followed by a colon. On the next line, the action to be completed if the case is true will be placed, followed by a 
semicolon. Following this statement, on the next line is the "break" keyword, followed by a semicolon. The next case starts 
after the break statement, and the syntax is the same aside from the value being checked against 
(the value is the only change here). The break statement is essential here, because it will never move on to the next 
condition if you forget to add the break statement after each case.
 
*/

// 1. If Statements //

var name = 'Tammy';
var greeting = 'Sup';

if (name === 'Tammy') {
  greeting = "Sup, my name is Tammy!";
}


// 2. Else - If Statements //

function sortAscending(stringOne, stringTwo) {
    if (stringTwo < stringOne) {
        return -1;
    } else if (stringTwo > stringOne) {
        return 1;
    } else if (stringOne = stringTwo) {
        return 0;
    }
    // example of an Else-If chain
}

// 3. Else Statements //

function isEven(wholeNum) {
	if (wholeNum % 2 === 0) {
		return true;
	} else if (wholeNum % 2 !== 0) {
		return false;
	} else { // the else statement returns something even if no condition is passed through after the If-Else chain
		return false;
	}
}

// 4. Switch Statements //

/*
The syntax follows this format =>
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
*/

function caseInSwitch(val) {
    let answer = '';
    // Only change code below this line
    switch (val) {
      case "Kia": 
        answer = "red";
        break; // break statements at the end of each case
      case "Sentra":
        answer = "green";
        break;
      case "Honda": 
        answer = "blue";
        break;
      case "Land Rover":
        answer = "yellow";
        break;
    } 
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch("Kia");
  

// this switch statement is a little bit different, because is uses no break statements

function dominantDirection(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
    switch (scripts.length) { // this is the start of the switch statement, where the cases are indicated with a colon
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