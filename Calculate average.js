// Description:

// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

// Tests:

// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(findAverage([1,1,1]), 1);
//       assert.strictEqual(findAverage([1,2,3]), 2);
//       assert.strictEqual(findAverage([1,2,3,4]), 2.5);
//     });

// Solution:

function findAverage(array) {
  return array.length === 0
    ? 0
    : array.reduce((acc, num) => acc + num) / array.length;
}
