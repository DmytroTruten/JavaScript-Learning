
console.log("I'm learning about");
 
for (let idx=0; idx < 999999999; idx++) {}
 
// The second console.log() statement is
// delayed by the for loop's execution
console.log("the Event Loop");

/* The example above has synchronous code with a long for loop. Here’s what happens:

The code executes and “I’m learning about” is logged to the console.
Next, a for loop executes and runs 999999999 loops, which results in blocking code. If you run this locally, this is where the pause happens.
Finally, “the Event Loop” is logged.*/

console.log("I'm learning about");
setTimeout(() => { console.log("Event Loop");}, 2000);
console.log("the");

/* In this case, the code snippet uses the setTimeout() function to demonstrate how JavaScript can be non-blocking with use of the event loop. Here’s what happens:

A statement is logged.
The setTimeout() function is executed.
A third line of code executes and logs text: “the”.
Finally, the setTimeout() function timer completes and additional text is logged: “Event Loop”.
In this case, JavaScript is still single-threaded, but the event loop is enabling something called concurrency. */

/*The event loop is made up of these parts:

Memory Heap
Call Stack
Event Queue
Event Loop
Node or Web APIs
Let’s take a closer look at each part before we put it all together.

The Heap
The heap is a block of memory where we store objects in an unordered manner. JavaScript variables and objects that are currently in use are stored in the heap.

The Call Stack
The stack, or call stack, tracks what function is currently being run in your code.

When you invoke a function, a frame is added to the stack. Frames connect that function’s arguments and local variables from the heap. Frames enter the stack in a last in, first out (LIFO) order. In the code snippet below, a series of nested functions are declared, then foo() is called and logged.*/

function foo() {
 return function bar() {
   return function baz() {
     return 'I love CodeCademy'
   }
 }
}
console.log(foo()()());
/*The function executing at any given point in time is at the top of the stack. In our example code, since we have nested functions, they will all be added to the stack until the innermost function has been executed. When the function finishes executing e.g. returns, its frame is removed from the stack. When we execute console.log(foo()()()), we’d see the stack build as follows:*/