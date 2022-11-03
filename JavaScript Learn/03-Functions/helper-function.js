// declare function that return rows * columns
function monitorCount(rows, columns) {
  return rows * columns;
}

// declare helper function
function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

// declare a variable that contains value of helper function
const totalCost = costOfMonitors(5, 4);

// log the result
console.log(totalCost);