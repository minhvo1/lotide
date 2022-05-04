const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (string) => {
  string = string.replaceAll(' ','').toLowerCase();
  const result = {};
  for (let letter of string) {
    if (!result.hasOwnProperty(letter)) {
      result[letter] = 1;
    } else {
      result[letter] += 1;
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));