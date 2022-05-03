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

const without = (array, itemsToRemove) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let status = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (array[i] === itemsToRemove[j]) {
        status = false;
      }
    }
    if (status === true) {
      result.push(array[i]);
    }
  }
  return result;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);