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
};

module.exports = middle;