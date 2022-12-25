function foo(str) {
  "use strict";
  eval(str);
  console.log(a); // ReferenceError
}
foo("var a = 2;");
