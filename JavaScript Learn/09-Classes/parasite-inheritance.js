function Vehicle() {
  this.engines = 1;
}

Vehicle.prototype.ignition = function () {
  console.log("Turning on engine.")
}

Vehicle.prototype.drive = function () {
  this.ignition()
  console.log("Steering and moving forward.")
}

// Parasite class 'Car'
function Car() {
  let car = new Vehicle;

  // change 'car' for specialty creating
  car.wheels = 4

  // save link to "Vehicle::drive()"
  let vehDrive = car.drive

  // redefine "Vehicle::drive()"
  car.drive = function () {
    vehDrive.call(this)
    console.log("Rolling on all " + this.wheels + " wheels")
  }
  return car
}

let myCar = new Car()
myCar.drive()