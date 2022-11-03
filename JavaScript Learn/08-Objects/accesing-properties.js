let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// used the dot operator to access the value 
const crewCount = spaceship.numCrew;
const planetArray = spaceship.flightPath;

console.log(crewCount, planetArray)