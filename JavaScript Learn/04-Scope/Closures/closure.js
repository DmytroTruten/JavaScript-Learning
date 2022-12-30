// function foo() {
//   let a = 2;

//   function bar() {
//     console.log(a)
//   }
//   return bar
// }

// let baz = foo()
// baz() // 2

function foo() {
  var a = 2;

  function baz() {
    console.log(a);
  }
  bar(baz);
}

function bar(fn) {
  fn(); // closure
}

foo();
