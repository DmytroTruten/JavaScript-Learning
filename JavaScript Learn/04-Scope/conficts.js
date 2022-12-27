function foo() {
  function bar(a) {
    i = 3; // changing `i` in 'for' loop of outer scope
    console.log(a + i);
  }
  for (var i = 0; i < 10; i++) {
    // bar(i * 2); // infinite loop
  }
}

foo()