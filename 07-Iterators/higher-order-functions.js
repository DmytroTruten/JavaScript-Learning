// adds 2 to whatever is passed into it.
const addTwo = num => {
  return num + 2;
};

// The purpose of the higher-order function will be to check the work of addTwo()
const checkConsistentOutput = (func, val) => {
  
  const checkA = val + 2;
  const checkB = func(val);

  if (checkA === checkB) {
    return checkB;
  } else {
    return 'inconsistent results'
  }
};

console.log(checkConsistentOutput(addTwo, 2));