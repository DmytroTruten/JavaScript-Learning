const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
};

function myExecutor(resolve, reject) {
  // Check if the sunglasses property on the inventory object has a value greater than zero
  if (inventory.sunglasses > 0) {
    // If it does, myExecutor() should invoke resolve() with the string 'Sunglasses order processed.'
    resolve("Sunglasses order processed.");
  } else {
    // If it does not, myExecutor() should invoke reject() with the string 'That item is sold out.'
    reject("That item is sold out.");
  }
}
// It should return a new promise constructed by passing myExecutor() function into the Promise constructor.
function orderSunglasses() {
  const myPromise = new Promise(myExecutor);
  return myPromise;
}

const orderPromise = orderSunglasses();
console.log(orderPromise);