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
      setTimeout(function timer() {
        this.count++; // 'this' is safe due to 'bind'
        console.log("more awesome");
      }.bind(this), 100);
    }
  },
};

obj.cool()
obj1.cool()