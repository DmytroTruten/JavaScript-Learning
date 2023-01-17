function anotherFunction() {
  // ...
}

let anotherObject = {
  c: true,
};

let anotherArray = [];

let myObject = {
  a: 2,
  b: anotherObject, // link, not a copy
  c: anotherArray, // another link
  d: anotherFunction,
};

anotherArray.push(anotherObject, myObject);

let newObj = Object.assign({}, myObject);
console.log(newObj.a); // 2
console.log(newObj.b === anotherObject); // true
console.log(newObj.c === anotherArray); // true
console.log(newObj.d === anotherFunction); // true
