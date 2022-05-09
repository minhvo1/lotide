const tail = function(array) {
  let newArr = [];
  if (array.length === 0) return newArr;
  newArr = array.slice(1);
  return newArr;
};

module.exports = tail;
