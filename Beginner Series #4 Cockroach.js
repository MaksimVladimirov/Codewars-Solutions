// Description:
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.




// Examples:
// 1.08 --> 30 


// Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic Tests", function() {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(cockroachSpeed(1.08), 30);
//     assert.strictEqual(cockroachSpeed(1.09), 30);
//     assert.strictEqual(cockroachSpeed(0), 0);
//   });
// });


// Solution:

function cockroachSpeed(s) {
    return Math.floor(s * 27.777778)
  }


