const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    console.log(Array.isArray(arrayOne[i]), Array.isArray(arrayTwo[i]))
    if (Array.isArray(arrayOne[i]) === true && Array.isArray(arrayTwo[i]) === true) {
      if (arrayOne[i].length !== arrayTwo[i].length) {
        return false;
      }
      eqArrays(arrayOne[i], arrayTwo[i]);
    } else if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}


console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]),true)) // => true

console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]),false)) // => false
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false)) // => false