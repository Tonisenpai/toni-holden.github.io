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
 * the program even runs. All declared named functions are hoisted, but not anonymous functions
 * and not all variables are hoisted. Let and Const variables are not hoisted. All variables
 * declared with the "var" keyword are hoisted unless they are declared inside of a function.
 */

