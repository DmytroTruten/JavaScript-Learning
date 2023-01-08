function baz() {
  // Call-stack: baz
  // Call-site belongs to global scope
  console.log('baz')
  bar() // bar call-site
}

function bar() {
  // Call-stack: baz => bar
  // Call-site within baz
  console.log('bar')
  foo()
}

function foo() {
  // Call-stack: baz => bar => foo
  // Call-site within bar
  console.log('foo')
}

baz()