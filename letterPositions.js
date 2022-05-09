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

module.exports = letterPositions;