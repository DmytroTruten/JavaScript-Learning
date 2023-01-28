function Foo() {}

console.log(Foo.prototype.constructor === Foo); //true

let a = new Foo();
console.log(a.constructor === Foo); //true
