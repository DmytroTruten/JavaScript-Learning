// create race number with Math.random()
let raceNumber = Math.floor(Math.random() * 1000);

// create variable that indicates whether runner registered or not
let registeredEarly = true;

//create variable with runners age
let runnersAge = 19;

//check whether tuner is adult and registered early
if (runnersAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

//check age and registration time to determine race time
if (runnersAge >= 18 && registeredEarly) {
  console.log(`You will race at 9:30\n Your race number ${raceNumber}`);
} else if (runnersAge >= 18 && !registeredEarly) {
  console.log(`You will race at 11:00\n Your race number ${raceNumber}`);
} else if (runnersAge < 18) {
  console.log(`You will race at 12:30\n Your race number ${raceNumber}`);
}
