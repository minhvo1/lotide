const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  keys1 = Object.keys(object1);
  keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length){
    return false;
  } 
  for (let key of keys1) {

    if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      } else {
        return eqObjects(object1[key], object2[key]);
      }
    }

    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;