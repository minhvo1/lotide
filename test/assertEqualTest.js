const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe('#assertEqual', () => {
  it ('returns true for "Lighthouse Labs", "Lighthouse Labs"', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Lighthouse Labs"), true);
  });
  it('returns false for "Lighthouse Labs", 1', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", '1'), false); 
  });
});