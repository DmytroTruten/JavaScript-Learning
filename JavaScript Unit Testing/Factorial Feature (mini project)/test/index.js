const Calculate = {
  factorial(number) {
    if(number < 0) {
      return -1;
    } else if(number === 0) {
      return 1;
    } else {
      return (number * this.factorial(number - 1))
    }
  }
}

module.exports = Calculate;


