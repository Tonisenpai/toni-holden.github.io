
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(value) {
  // declare triangle variable and initialize to empty string
  let triangle = "";

  // create while loop: while the triangle length is less than passed in value, add the "#" symbol
  while (triangle.length < value) {
    triangle += "#";
    // print the triangle to the console
    console.log(triangle);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  // create a for loop and iterate through the numbers 1 - 100
  for (let i = 1; i <= 15; i++) {
    // create a conditional statement that checks if number is divisible by 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      // print "FizzBuzz" to the console
      console.log("fizzbuzz");
      // else if: number is divisible by 3 
    } else if (i % 3 === 0) {
      // print "Fizz" to the console
      console.log("fizz");
      // else if: number is divisible by 5
    } else if (i % 5 === 0) {
      // print "Buzz" to the console
      console.log("buzz");
      // else: print the current index to the console
    } else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(x) {
  // create the variable "chessBoard"
  let chessBoard = [];

  // iterate over the range of the chess board
  for (let i = 0; i < x; i++) {
    // create a row variable
    let row;

    // if index is even
    if (i % 2 === 0) {
      // row is strictly equal to space
      row = " ";

      // create looping sequence to continue adding characters
      for (let i = 1; i < x; i++) {
        // if i is even
        if (i % 2 === 0) {
          // add a space
          row += " ";
          // else (if it is odd)
        } else {
          // add a hashtag
          row += "#";
        }
      }
      // else, row is assigned to hashtag
    } else {
      row = "#";

      // create another looping sequence for when the row starts with a hashtag
      for (let i = 1; i < x; i++) {
        // if i is even
        if (i % 2 === 0) {
          // row adds a hashtag
          row += "#";
          // otherwise, row adds a space
        } else {
          row += " ";
        }
      }
    }
    // push the row into the chessBoard variable
    chessBoard.push(row);
  }
  // return the chessBoard joined with a line break
  return chessBoard.join("\n") + "\n";
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
