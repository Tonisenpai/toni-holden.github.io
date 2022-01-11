/**
* DATATYPES:

* 0. There are several different types of data in JavaScript that exist all throughout
your code. These types of data are typically the values that are assigned to variables. 
Datatypes range from simple (also called "primitive") to complex and these distinctions
are important to take note of, because JavaScript looks at each of them differently. 
There are more things you can do with complex datatypes than you can with primitive ones.

* 1. Number: a number variable is a value representing a digit or set of digits, either
a whole integer or a decimal value. The number variable can be copied by value, as it is a
simple datatype and can be used in simple calculative functions as well as be placed as a
value inside of a complex datatype.
 
* 2. String: a string variable represents a string of text. This text can be anything you
type on a keyboard onto the screen, and it includes spaces as well. A string is indicated 
by single or double quotation marks located at the front and back of the string. Even 
though strings are said to be simple datatypes, JavaScript sees them as objects 
(a complex datatype) in the background. Because of this, strings have methods one can use
to manipulate strings you pass through the methods as values (see 'string manipulation page').
Still, strings are copied by value instead of by reference, despite being viewed as objects. 
Strings can also be used in the looping process (see 'string manipulation page'). 

* 3. Boolean: a boolean value results in either "true" or "false". Because of this, the 
words "true" and "false" are reserved keywords that cannot be mishandled if you don't want
errors in your code. Boolean values are typically seen either as values in a complex datatype 
or as a returned value in functions and conditional statements.

* 4. Array: an array is a complex datatype. Because of this, an array can hold simple and
complex datatypes inside of it as values. This is what makes it complex. An array is also
known as a collection, or an ordered list and is ordered by index. Arrays begin their index
count at 0, the second index at 1 and so on; and the last element in the array is always 
indicated or accessed using "array.length - 1". Due to the unique way the indices are 
counted, the number of indices will always be one less than it's actual length. There are
many methods that can be used to manipulate values in an array. Arrays are also used a lot 
during the looping process in order to manipulate each value in the array during each iteration
instead of hard-coding the change to each value yourself using access by bracket notation 
(see 'loops' page). 

* 5. Object: an object is an unordered list of elements and is viewed as a complex datatype
and a collection just like arrays. However, because there is no set order to it, there are also 
no indices to indicate where something is in the object due to a listed hierarchy. Rather,
the elements are separated into "key/value" pairs, where the key is assigned a value and to
access those elements, you would have to access the key to get its value. Like arrays, objects
can hold other primitive and complex datatypes as values. Objects are indicated by curly brackets ({}),
but aren't to be confused with functions or conditional statements, as the syntax looks similar.
Objects are assigned or initialized to a variable in the same way other datatypes are. A special
loop is reserved to iterate over objects called a "for-in" loop. This loop iterates over the keys in 
an object to perform some action (see 'loops' page). 

* 6. Function: a function in JavaScript is basically code representing action(s) you want to take 
on certain variables in your code. Functions are first class objects. This means that functions can
be passed as variables inside of other functions, exist as elements inside of other complex datatypes
(i.e. arrays and objects), be stand-alone functions or anonymous functions tied to a variable 
(function expression) acting on specific passed-in datatypes or return there from other functions.
Functions are literally where all the action happens, the meat of your code in JavaScript. 

* 7. undefined: this datatype is reserved for variables that are undeclared or if it was never 
assigned/initialized to a value by the time the variable declaration is reached in the code. This
is also true for Hoisting, since even if a value is assigned to the variable, if the variable is 
hoisted, only the declaration is seen by the interpreter. So, the variable might exist at the top
of the code, but it will be read as undefined until the code reaches the moment it is initialized. 

* 8. null: this datatype is used to indicate an empty object and is most times a value that is 
purposefully declared in the code by the programmer. Many times the assignment of null is written
specifically to satisfy some conditional statement.

* 9. NaN: this datatype is actually a numerical value that indicates "not a number". Though it looks 
like a string or a reserved keyword, is it is considered a special kind of number in the JavaScript
language. A lot of times, this value will print to the console when a numerical value is supposed
to be returned, but is replaced by NaN if an acceptable integer or decimal value is not produced.

* 10. Infinity and -Infinity: these are also considered special numbers in JavaScript that resemble
strings or keywords, but actually represent numerical values that base themselves on advanced 
computations having to do with the concept of a number JavaScript deems is at either negative or
positive infinity. Infinity in JavaScript is itself a property of the global object. It is neither
writable, enumerable, nor configurable.

* 11. Simple vs Complex Datatypes: 

* 12.
*/