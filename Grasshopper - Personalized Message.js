// Description:
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Examples:
// case	               return
// name equals owner	   'Hello boss'
// otherwise	           'Hello guest'

// Tests:
// const Test = require('@codewars/test-compat');
// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
// Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')
//   });
// });

// Solution:

function greet(name, owner) {
  if (name == owner) {
    return "Hello boss";
  }
  return "Hello quest";
}
