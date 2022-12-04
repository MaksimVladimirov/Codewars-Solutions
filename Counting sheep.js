// Description:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// Exaples:
// [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true] ========= 17

// Tests:
// const Test = require('@codewars/test-compat');
// describe("Tests", () => {
//   it("test", () => {
// var array1 = [true,  true,  true,  false,
//               true,  true,  true,  true ,
//               true,  false, true,  false,
//               true,  false, false, true ,
//               true,  true,  true,  true ,
//               false, false, true,  true ];

// Test.assertEquals(countSheeps(array1), 17, "There are 17 sheeps in total")
//   });
// });

// Solution:

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter((e) => e === true).length;
}
