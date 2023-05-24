var assert = require("assert");
var Calculate =  require('./index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it("returns factorial of a number 5", () => {
      // Setup
      const input = 5;
      const expected = 120;
      // Exercise
      const result = Calculate.factorial(input);
      // Verify
      assert.equal(result, expected)
    })
    it("returns factorial of a number 3", () => {
      // Setup
      const input = 3;
      const expected = 6;
      // Exercise
      const result = Calculate.factorial(input);
      // Verify
      assert.equal(result, expected)
    })
    it("edge case, input = 0", () => {
      // Setup
      const input = 0;
      const expected = 1;
      // Exercise
      const result = Calculate.factorial(input);
      // Verify
      assert.equal(result, expected)
    })
  });
});