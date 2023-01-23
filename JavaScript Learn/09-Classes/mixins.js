function mixin(sourceObj, targetObj) {
  for(let key in sourceObj) {
    // copy if doesn't exist
    if(!(key in targetObj)) {
      targetObj[key] = sourceObj[key]
    }
  }
  return targetObj
}

let Vehicle = {
  engines: 1,
  ignition: function () {
    console.log("Turning on my engine.")
  },
  drive: function() {
    this.ignition()
    console.log("Steering and moving forward!")
  }
}

let Car = mixin(Vehicle, {
  wheels: 4,

  drive: function () {
    Vehicle.drive.call(this)
    console.log(`Rolling on all ${this.wheels} wheels!`)
  }
})

Car.drive()