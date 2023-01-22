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

let myObject = {
  get a() {
    return 2
  }
}

Object.defineProperty(myObject, "b", {
  get: function () {
    return this.a * 2
  }
})

console.log(myObject.a) // 2
console.log(myObject.b) // 4

let myObject1 = {
  get a() {
    return this._a_
  },
  set a(val) {
    this._a_ = val * 2;
  }
}

myObject1.a = 2
console.log(myObject1.a) // 4