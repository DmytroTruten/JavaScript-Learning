const radius = 5;
const sideLength = 10;

// imported the entire shape-area.js module here.
const shapeArea = require('./shape-area-1.js')

// used the imported .circleArea() and .squareArea() methods

const areaOfCircle = shapeArea.circleArea(radius);
const areaOfSquare = shapeArea.squareArea(sideLength);

console.log(areaOfCircle, areaOfSquare)
