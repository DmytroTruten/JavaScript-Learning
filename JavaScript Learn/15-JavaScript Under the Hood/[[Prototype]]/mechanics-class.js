function Foo(name) {
  this.name = name;
}

Foo.prototype.myName = function () {
  return this.name;
};

let a = new Foo("a");
let b = new Foo("b");

console.log(a.myName());
console.log(b.myName());
