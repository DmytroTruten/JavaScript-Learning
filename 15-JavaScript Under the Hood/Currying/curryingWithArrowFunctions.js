// The same curried_add() function from earlier can be rewritten much more concisely using ES6 arrow function syntax:

let curried_add = a => b => a + b;

/* let curried_add is a variable assignment to the outer arrow function, a => ....
Calling curried_add takes an argument a and returns b => a + b.
Invoking the second arrow function returns the sum, or a + b*/

function changeColor(color) {
  return function(obj) {
      obj.color = color;
  }
}

let changeColorArrow = color => obj => obj.color = color