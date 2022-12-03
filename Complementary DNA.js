// Description:
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// Exaples:
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;
// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(DNAStrand("AAAA"),"TTTT","String AAAA is")
//     assert.strictEqual(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
//     assert.strictEqual(DNAStrand("GTAT"),"CATA","String GTAT is")
//   })
// })

// Solution:

function DNAStrand(dna) {
  return dna
    .toUpperCase()
    .split("")
    .map((e) => {
      if (e === "T") {
        return e.replace(/T/g, "A");
      }
      if (e === "A") {
        return e.replace(/A/g, "T");
      }
      if (e === "C") {
        return e.replace(/C/g, "G");
      }
      if (e === "G") {
        return e.replace(/G/g, "C");
      }
    })
    .join("");
}
