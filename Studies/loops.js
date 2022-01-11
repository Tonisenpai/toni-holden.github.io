/**
* LOOPS:
 
* 0. Loops in JavaScript are used in cases where you have to repeat some action several
times to elements in a collection or string. There are a few of these loops and each
is dedicated to a certain datatype as well as has a specific syntax. Loops are a way 
to tackle the D.R.Y. method: Don't Repeat Yourself.
 
* 1. for loops are used to iterate through arrays and also strings (using the length
property during the iterative statements). for loops have 3 statements used to iterate
over the collection: (1) expression for the starting point, (2) expression for the 
ending point, (3) statement indicating the increment, which uses the increment operator (++).
To loop in reverse, the first two statements are basically flipped: (1) expression for starting
point which is typically set equal to the value at the end of the array, (2) expression for the 
ending point which traverses down the array in reverse and (3) using the decrement operator (--) 
when looping in reverse to decrement down the array. The syntax begins with the keyword "for" and 
then parentheses. The 3 statements are put inside these parentheses separated by a semicolon. Next
comes a pair of curly brackets which ultimately closes the loop. Inside of these brackets is where
you want to put the action you want repeated to each element across the collection throughout the 
loop. Once outside of the loop, it will end and return whatever value or outcome you programmed it 
to give. for loops can iterate forwards or backwards. For examples of iterating forwards and backwards, 
see bottom of page. This loop must be done with a collection or string (see 'string manipulation' page)
that works with indices and has an order to it (mainly arrays though). This loop does not work on objects. 
  
* 2. for-in loops are used for unordered collections, also known as objects. It is made to iterate
over the keys in an object in much the same way a for loop does to the elements in an array, just 
with a completely different syntax. Like the for loop, the for-in loop begins with the keyword "for",
and that is followed by parentheses. There is only one statement inside of the parentheses for 
iterating: "var key in objectName". The "var" Keyword can also be replaced with the keyword "let":
"let key in objectName". This statement in parentheses is then followed by curly brackets and inside
the curly brackets goes the action you want to perform at each iteration. Because objects are 
unordered, there's no real "looping backwards" sequence in this loop.  
 
* 3. While loops are not meant to be very complex iteration sequences. The iteration happens "while"
the condition given is true. The moment the condition is not true, you exit the loop and return what 
the loop was programmed to return. Looping backwards requires the use of the decrementing operator (--).
*/

// 1. While Loops //

let increaseCount = 1; // initial value to be referenced by conditional statement

while (increaseCount <= 10) { // condition resulting in boolean value indicating stopping point
  console.log(increaseCount); // action to be taken on values
  increaseCount++; // incrementation pattern
}
// prints range to the console: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10

let decreaseCount = 10; // initial value to be referenced by conditional statement

while (decreaseCount > 0) { // condition resulting in boolean value indicating stopping point
  console.log(decreaseCount); // action to be taken on values
  decreaseCount--; // incrementation pattern
}
// prints range to the console: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1

let countBy5 = 5; // initial value to be referenced by conditional statement

while (countBy5 < 100) { // condition resulting in boolean value indicating stopping point
  console.log(countBy5); // action to be taken on values
  countBy5 += 5; // incrementation pattern
}
// prints range incremented by 5 to 100: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50... to 100


// 2. For Loops //

let classSchedule = ["English", "Science", "Math", "Art", "Lunch-Break", "Spanish", "Music"];

// incrementing for loop
for (let i = 0; i < classSchedule.length; i++) {
  console.log(classSchedule[i]);
}
// prints a list of all classes in order

// decrementing for loop
for (let i = classSchedule.length - 1; i > 0; i--) {
  console.log(classSchedule[i]);
}
// prints a list of all classes backwards


// 3. For-in Loops //

var object = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};

for (let key in object) { // iterative syntax
 console.log("This is the key: " + key); // action performed on all keys
 console.log("This is the value at the key: " + object[key]); // action performed on all values
}
// prints all the keys and values in the above sentence syntax:

/* 
This is the key: make
This is the value at the key: Ford
This is the key: model
This is the value at the key: Mustang
This is the key: year
This is the value at the key: 1969
*/

