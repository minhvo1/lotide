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

const middle = (array) => {
  let result = [];
  if (array.length === 0) {
    return "Please enter a valid array";
  } else if (array.length === 1 || array.length === 2) {
    return result;
  }

  if (array.length % 2 === 1) {
    result.push(array[Math.floor(array.length / 2)]);
  } else {
    result.push(array[array.length / 2] - 1);
    result.push(array[array.length / 2]);
  }
  return result;

}

console.log(middle([1,2,3]));