let myObject = {
  a: 2,
};

console.log(Object.getOwnPropertyDescriptor(myObject, "a")); // { value: 2, writable: true, enumerable: true, configurable: true }


let myObject1 = {}

Object.defineProperty(myObject1, "a", {
  value: 2,
  writable: true,
  configurable: true,
  enumerable: true
})
console.log(myObject1.a) // 2