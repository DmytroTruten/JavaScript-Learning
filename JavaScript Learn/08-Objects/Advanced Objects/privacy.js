const robot = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
  },
};

//This logs a side-effect of type-coercion.
robot._energyLevel = "high";
robot.recharge();
