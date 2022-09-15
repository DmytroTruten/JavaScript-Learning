const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
// In the example below, we declare a new variable 'functionality' that extracts the value of the functionality property of robot.
const { functionality } = robot;
functionality.beep();
