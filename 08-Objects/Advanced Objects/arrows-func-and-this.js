
/* Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object. In the code snippet below, the value of this is the global object, or an object that exists in the global scope, which doesn’t have a property and therefore returns undefined. */
const robot = {
  energyLevel: 100,
  checkEnergy: () => {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

// The key takeaway from the example above is to avoid using arrow functions when using this in a method!
const robot1 = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}
robot1.checkEnergy();
