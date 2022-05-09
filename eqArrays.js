const eqArrays = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
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
module.exports = eqArrays;
