// foo() // 1

// var foo;

// function foo() {
//   console.log(1)
// }

// foo = function() {
//   console.log(2)
// }

// Subsequent function declarations override previous ones

foo() // 3

function foo() {
  console.log(1)
}

var foo = function() {
  console.log(2)
}

function foo() {
  console.log(3)
}
