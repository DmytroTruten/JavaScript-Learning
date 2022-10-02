function bigObjMaker() {
  const bigObj = {};
  return (key, val) => {
      bigObj[key] = val;
      console.log(bigObj);
  }
}
let bigMemoryUser = bigObjMaker();

Array(1000).fill(1).map((x,i) => {
  bigMemoryUser(i, i);
});
/*In the example, the closure over the bigObj object keeps the memory in use, even after bigMemoryUser() finishes executing. If you run this code in your browser, it might crash the browser due to the console.log() statements when bigMemoryUser() executes 1000 times. The object bigObj can grow infinitely depending on how many times bigMemoryUser() is called.

Dangling Timers and Event Listeners
You might be used to using setInterval() or other browser APIs in your code. Sometimes, you can wind up with a dangling timer or callback that references nodes or memory that your program doesn’t need anymore. If the handler is still active, anything it is referencing can’t be garbage collected.*/

function cb() {
  let count = 0;

  return function() {
       count++;
       console.log(count);
  }
}

setInterval(cb(), 1000);
/*In the example, the counter variable is in the closure when you call cb(). When we use the setInterval() callback, it repeatedly calls that function cb() every 1000ms (set by the second argument). If you don’t assign the setInterval() call to a variable, you’ll get a memory leak if you can’t clear the interval later.*/

let intervalID = setInterval(cb(), 100);
clearInterval(intervalID); // You can use a DOM element to call `clearInterval()`
/*The second snippet shows how you can assign a variable the value of calling setInterval() so that you can clear it when the time comes.

Another scenario to watch out for is the existence of anonymous functions when you use event listeners:*/

const lotsOfMemory = "Imagine this is a value that uses a lot of memory"

document.addEventListener('scroll', function() {
cb(lotsOfMemory);
});
/*In the example, the lotsOfMemory string will be stored in the closure of the anonymous function that is called on scroll events.

Circular References
If two objects have pointers that reference each other, a circular reference is formed.*/

let first = new Object();
let second = new Object();

first.aProperty = second;
second.anotherProperty = first;
/*As you can see in the example, the first object has a property aProperty that references the second object and the second object has a property anotherProperty that references the first object. Since these two objects reference each other through their properties, they’ll each wind up having a reference count of two. Circular references can cause memory leaks due to the reference-counting algorithm. Luckily, the mark-and-sweep algorithm — used by most browsers — handles that shortcoming.*/