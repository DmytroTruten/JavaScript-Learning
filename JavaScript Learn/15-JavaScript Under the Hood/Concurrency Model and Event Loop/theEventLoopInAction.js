console.log("This is the first line of code in app.js.");
 
function usingsetTimeout() {
    console.log("I'm going to be queued in the Event Loop.");
}
setTimeout(usingsetTimeout, 3000);
 
console.log("This is the last line of code in app.js.");

/*console.log("This is the first line of code in app.js."); is added to the stack, executes, then pops off of the stack.
setTimeout() is added to the stack.
setTimeout()’s callback is passed to be executed by a web API. The timer will run for 3 seconds. After 3 seconds elapse, the callback function, usingsetTimeout() is pushed to the Event Queue.
The Event Loop, meanwhile, will check periodically if the stack is cleared to handle any messages in the Event Queue.
console.log("This is the last line of code in app.js."); is added to the stack, executes, then pops off of the stack.
The stack is now empty, so the event loop pushes usingsetTimeout onto the stack.
console.log("I'm going to be queued in the Event Loop."); is added to the stack, executes, gets popped
usingsetTimeout pops off of the stack.*/

const shopForBeans = () => {
  return new Promise((resolve, reject) => {
    const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
    setTimeout(() => {
      let randomIndex = Math.floor(Math.random() * beanTypes.length);
      let beanType = beanTypes[randomIndex];
      console.log(`2. I bought ${beanType} beans because they were on sale.`);
      resolve(beanType);
    }, 1000);
  });
}
 
async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}
 
getBeans();
console.log("Describe what happens with this `console.log()` statement as well.");