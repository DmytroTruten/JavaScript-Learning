let anotherObject = {
  a: 2
}

let myObject = Object.create(anotherObject)

console.log(anotherObject.a) // 2
console.log(myObject.a) // 2

console.log(anotherObject.hasOwnProperty('a')) // true
console.log(myObject.hasOwnProperty('a')) // false

myObject.a++ // implicit overriding

console.log(anotherObject.a) // 2
console.log(myObject.a) // 2

console.log(myObject.hasOwnProperty('a')) // true

