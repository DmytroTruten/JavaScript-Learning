var obj = {
  count: 0,
  cool: function coolFn() {
    if (this.count < 1) {
      setTimeout(() => {
        this.count++;
        console.log("awesome?");
      }, 100);
    }
  },
};

var obj1 = {
  count: 0,
  cool: function coolFn() {
    if (this.count < 1) {
      setTimeout(
        function timer() {
          this.count++; // 'this' is safe due to 'bind'
          console.log("more awesome");
        }.bind(this),
        100
      );
    }
  },
};

obj.cool();
obj1.cool();

function identify() {
  return this.name.toUpperCase();
}

function speak() {
  var greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);
}

var me = {
  name: "Dmytro",
};

var you = {
  name: "Reader",
};

identify.call(me);
identify.call(you);

speak.call(me);
speak.call(you);
