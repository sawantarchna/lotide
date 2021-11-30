// ASSERT EQUAL...
// const assertEqual = require('./assertEqual').default;


// // HEAD FUNCTION
// const head = (array) => {
//   if (array.length >= 1) {
//     let headElement = array[0];
//     return headElement;
//   } else if (array.length === 0) {
//     return undefined;
//   }
// };


// module.exports = head;

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});
it("returns '5' for ['5']", () => {
  assert.strictEqual(head(['5']), '5'); 
});