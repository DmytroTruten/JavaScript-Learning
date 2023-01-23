let myObject = {};

Object.defineProperty(myObject, "a", {
  enumerable: true,
  value: 2,
});

Object.defineProperty(myObject, "b", {
  enumerable: false,
  value: 3,
});

console.log(myObject.b); // 3
console.log("b" in myObject); // true
console.log(myObject.hasOwnProperty("b")) // true

for (let k in myObject) {
  console.log(k, myObject[k]) // "a" 2
}


let myObject1 = {};

Object.defineProperty(myObject1, "a", {
  enumerable: true,
  value: 2,
});

Object.defineProperty(myObject1, "b", {
  enumerable: false,
  value: 3,
});

console.log("\n",myObject1.propertyIsEnumerable("a")) // true
console.log(myObject1.propertyIsEnumerable("b")) // false

console.log(Object.keys(myObject1)) // [a]
console.log(Object.getOwnPropertyNames(myObject1)) // ["a", "b"]