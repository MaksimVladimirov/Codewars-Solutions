// Description:
// Build a function that returns an array of integers from n to 1 where n>0.

// Example:
// n=5 --> [5,4,3,2,1]

// Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;
// describe("reverseSeq", function() {
//   it("Sample Test", function() {
//     assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
//   });
// });

// Solution:

const reverseSeq = (n) => {
  let arr = [];
  for (i = n; i >= 1; i--) {
    arr.push(i);
  }
  return arr;
};
