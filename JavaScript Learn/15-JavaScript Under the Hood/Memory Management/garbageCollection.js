/*Garbage collection refers to the process of clearing memory. The JavaScript engine manages garbage collection using two key algorithms:

Reference-counting
Mark-and-sweep
Garbage collection algorithms use different approaches to detect if some piece of memory is no longer needed by the program. Once memory is no longer needed, it is released and can be reused. (Remember that we mentioned all memory relates back to RAM, so space is finite.) When you consider the idea of whether or not some piece of memory is still needed, it can get pretty complicated. Let’s take a quick look at how the reference-counting and mark-and-sweep algorithms work.

Reference-Counting
As we learned about in the stack and heap section, all of the objects you make in your program have references and memory allocated to them.

Reference-counting makes use of the references to variables that live on the stack. When an object is created, it’s reference count is one. If you make a second variable point to that object, the reference count is two. If a function makes use of an object, the reference count is increased by one. Usually, inner elements from function calls are garbage collected when a function is done executing, unless the inner elements are still referenced.*/

let obj = new Object(); // reference count of one
let obj2 = obj; // reference count of two
obj2 = "string"; // obj has a reference count of one again

/*With the reference-counting algorithm, if the reference count drops down to zero, there are no more references to the object in your program, so the JavaScript engine can mark that memory block as free to use so future allocations can utilize and overwrite the block.*/

let monument = {
   name: "Eiffel Tower"
};
monument = "Golden Gate Bridge";

/*In the example, the monument variable is reassigned to the string value “Golden Gate Bridge,” so the name property can be garbage collected as it has a reference count of zero.*/