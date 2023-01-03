var foo = (function coolModule(id) {
  function change() {
    // changing open API
    publicAPI.identify = identify2;
  }

  function identify1() {
    console.log(id);
  }

  function identify2() {
    console.log(id.toUpperCase());
  }

  var publicAPI = {
    change: change,
    identify: identify1,
  };

  return publicAPI;
})("foo module");

foo.identify() // foo module
foo.change()
foo.identify() // FOO MODULE