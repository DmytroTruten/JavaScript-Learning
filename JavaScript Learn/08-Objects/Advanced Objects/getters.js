const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  // getters need to be created by using keyword 'get'
  get energyLevel() {
    if (typeof(this._energyLevel) === 'number') {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return 'System malfunction: cannot retrieve energy level';
    }
  }
};
console.log(robot.energyLevel)