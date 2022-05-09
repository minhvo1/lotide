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

module.exports = without;