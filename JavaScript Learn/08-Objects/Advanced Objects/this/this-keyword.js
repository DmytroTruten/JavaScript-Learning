const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    // 'this' keyword allows us to get access for object properties inside methods
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.  `
  }
};
console.log(robot.provideInfo())