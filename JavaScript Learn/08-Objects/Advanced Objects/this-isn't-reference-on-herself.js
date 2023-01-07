function foo(num) {
  console.log(`foo: ${num}`);
  // Counting 'foo' invokes
  this.count++;
}
foo.count = 0;

var i;
for (let i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i);
  }
}

console.log(foo.count); // 0

function foo1(num) {
  console.log(`foo1: ${num}`);
  // 'this' contains 'foo' due to how function 'foo' was invoked
  this.count++;
}
foo1.count = 0;

var i;
for (let i = 0; i < 10; i++) {
  if (i > 5) {
    // Using 'call' we guarantee that 'this' points at function 'foo' object
    foo1.call(foo1, i);
  }
}

console.log(foo1.count); // 0
