// traditional function
function add(a,b) {
  return a + b;
}

// curried function
function curried_add(a) {
  // The outer function returns a nested single-argument function, has access to the argument for a
  return function nested_func(b) {
    // has access to the arguments for a and b
      return a + b;
 }
}
// creates a local variable a and assigns it the value 1, returns nested_func()
let add_one = curried_add(1);

// add_one() still has access to the argument from curried_add(), returns 20
console.log(add_one(19))

/* What we did in the code is declare curried_add() as a function that takes a single argument and returns another function named nested_func(). (The returned function can also be anonymous, but has a name in this example for clarity.)

Calling the outer function curried_add() returns nested_func().
Calling nested_func uses the arguments supplied from calling curried_add and nested_func to return the evaluated result of a + b.
When you call curried_add(a), the returned output is the function nested_func(b). Then you can call nested_func(b) and the output will be the evaluated result of a + b.*/

function curriedMultiply(a) {
  return function(b) {
      return a * b
  }
}
// Write your code here
const nestedFunction = curriedMultiply(20)
const result = nestedFunction(5)
console.log(result)

function makeGreeting(string) {
  //Write your code here
   return function(string2) {
     return string + " " + string2;
   }
   
  }
  let hello = makeGreeting('Hello');
  let helloWorld = hello('World');
  console.log(helloWorld);