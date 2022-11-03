const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

// This block is able to access the global variables freely since the variables are available to all lines of code in the file.
const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky())