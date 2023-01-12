function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
};

var bar = function () {
  foo.call(obj);
};
bar(); // 2


function foo1(smth) {
  console.log(this.a, smth)
  return this.a + smth
}

var obj = {
  a: 2
}

var bar = foo1.bind(obj)
var b = bar(3) // 2 3
console.log(b) // 5
