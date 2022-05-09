const assert = require('chai').assert;
const tail = require('../tail');

//assertArraysEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

describe('#tail', () => {
  it ('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns [] for [5]", () => {
    assert.deepEqual(tail([5]), []); 
  });
});