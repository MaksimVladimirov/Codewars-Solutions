// Description:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// Tests:
// const Test = require('@codewars/test-compat');
// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(solution('abcde', 'cde'), true)
// Test.assertEquals(solution('abcde', 'abc'), false)
// });
// });

// Solution:

function solution(str, ending){
    return str.endsWith(ending)
   
   }