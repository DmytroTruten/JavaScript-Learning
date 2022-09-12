// Zero parameters
// const functionName = () => {};

// One parameter
// const functionName = paramOne => {};

// Two or more parameters
// const functionName = (paramOne, paramTwo) => {};

// Single-line block
// const sumNumbers = number => number + number;

// Multi-line block
/* const sumNumbers = number => {
  const sum = number + number;
  return sum;
} */

// Before refactoring
/* const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
}; */

// Refactored
//const plantNeedsWater = day => day === 'Wednesday' ? true : false;
