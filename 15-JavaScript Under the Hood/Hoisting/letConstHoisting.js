/*Fortunately, variables defined with let and const are more predictable than var variables. Since the release of ES6, there are really no situations where it is preferable to use var variables. let and const variables are hoisted to the top of their parent block for scope, so any type of block or function can be the parent scope for those variables.

let and const differ from var in how they initialize as well; while the names are hoisted, they are not initialized. So calling a variable in your code before it is initialized results in a ReferenceError. This is one of the reasons let and const are preferable, as a ReferenceError will immediately alert you to the problem in your code. With var variables, you would need to implement unit tests to handle undefined values.

This is because myLetVariable behaves the same way here:*/

console.log(myLetVariable); 
// triggers a ReferenceError
let myLetVariable = 1;
// as it does here:

// let myLetVariable;
// console.log(myLetVariable);
// myLetVariable = 1;

/*As mentioned, function expressions will follow the rules of variable hoisting. That said, if you are using ES6 arrow function syntax, it is vital to remember to assign the function to a variable before calling it.*/

// thisWontRun() is hoisted at the function call but not yet initialized
thisWontRun(); 
let thisWontRun = a => console.log(a);
 
// thisWillRun() gets initialized after function call below
let thisWillRun = b => console.log(b);
// thisWillRun() gets hoisted at the function call
thisWillRun(); 