const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declared robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declared newRobot below this line:
const newRobot = Object.assign( {laserBlaster: true, voiceRecognition: true}, robot)

console.log(newRobot);