function foo() {
  console.log("foo");
}

let someFoo = foo; // link to 'foo' variable

let myObject = {
  someFoo: foo,
};

foo(); // function foo(){...}
someFoo(); // function foo(){...}
myObject.someFoo(); // function foo(){...}


let myObject1 = {
  foo1: function foo1() {
    console.log("foo1");
  },
};

let someFoo1 = myObject1.foo1;

someFoo1(); // function foo1(){...}

myObject1.foo1(); // function foo1(){...}
