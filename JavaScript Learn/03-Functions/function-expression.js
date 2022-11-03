// declare function expression
const plantNeedsWater  = function(day) {

  // check if the day is wednesday
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
}

// log the result
console.log(plantNeedsWater('Tuesday'));
