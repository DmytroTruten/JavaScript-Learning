function logVisibleLightWaves() {
  const lightWaves = 'Moonlight';
  console.log(lightWaves)
}
logVisibleLightWaves();

//It logs a ReferenceError since the variable is tied to the block scope of the function
console.log(lightWaves);