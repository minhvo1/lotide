const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = (actualArray, expectedArray) => {
  if (eqArrays(actualArray, expectedArray) === true) {
    console.log(`Assertion Passed: ${actualArray} === ${expectedArray}`);
  }
  else {
    console.log(`Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
};


const letterPositions = function(sentence) {
  const results = {};
  for (let index in sentence) {
    if (sentence[index] !== " ") {
      if (results[sentence[index]]) {
        results[sentence[index]].push(index);
      } else {
        results[sentence[index]] = [];
        results[sentence[index]].push(index);
      }
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));