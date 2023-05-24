const assert = require("assert");
const Rooster = require("./index");

describe("first", () => {
  describe(".announceDown", () => {
    it("returns a rooster call", () => {
      // Setup
      const expected = "cock-a-doodle-doo!";

      // Exercise
      const invokedRooster = Rooster.announceDawn();

      // Verify
      assert.equal(expected, invokedRooster);
    });
  });
  describe(".timeAtDawn", () => {
    it("returns its argument as a string", () => {
      // Setup
      const expected = "15";
      // Exercise
      const invokedTimeAtDawn = Rooster.timeAtDawn(15);
      // Verify
      assert.strictEqual(expected, invokedTimeAtDawn);
    });
    it("throws an error if passed a number less than 0", () => {
      // Verify
      assert.throws(() => {
        Rooster.timeAtDawn(-1);
      }, RangeError);
    });
    it("throws an error if passed a number more than 23", () => {
      // Verify
      assert.throws(() => {
        Rooster.timeAtDawn(24);
      }, RangeError);
    });
  });
});
