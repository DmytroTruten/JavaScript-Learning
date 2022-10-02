/* var has its own playbook when it comes to hoisting. var variables are hoisted to the top of function blocks, but not other types of blocks, so you have to be careful when using var to declare variables to ensure you have the intended value when the variable is used. var variables are initialized as undefined when they are hoisted, which can lead to unexpected results in code if a variable is evaluated as undefined instead of an intended value.

For example, myVarVariable behaves the same way here:*/
console.log(myVarVariable);
var myVarVariable = 1;

// as it does here:
var myVarVariable; // undefined 
myVarVariable = 1;