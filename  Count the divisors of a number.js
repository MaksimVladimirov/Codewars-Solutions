// Description:
// Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000.

// Examples:
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

// Tests:
// const assert = require('chai').assert;
// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(getDivisorsCnt(1),  1);
//     assert.strictEqual(getDivisorsCnt(10), 4);
//     assert.strictEqual(getDivisorsCnt(11), 2);
//     assert.strictEqual(getDivisorsCnt(54), 8);
//   });
// });

// Solution:

function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) 
  if (n % i == 0) count++;
  return count;
}
