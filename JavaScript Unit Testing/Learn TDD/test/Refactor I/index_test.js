const assert = require('assert');
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.sum',() => {
    it('returns the sum of an array of numbers', () => {
      // Setup
      const input = [1,2,3];
      const expected = "6";
      // Exercise
      const result = Calculate.sum(input);
      // Verification
      assert.strictEqual(result, expected);
    });
  });
});
