// Description:

// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1
// result = 61000

// Tests:

// const { assert } = require('chai');
// describe("Fixed Tests", () => {
//   it("Tests", () => {
//     assert.strictEqual(past(0,1,1),61000)
//     assert.strictEqual(past(1,1,1),3661000)
//     assert.strictEqual(past(0,0,0),0)
//     assert.strictEqual(past(1,0,1),3601000)
//     assert.strictEqual(past(1,0,0),3600000)
//   });
// });

// Solution:

function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

