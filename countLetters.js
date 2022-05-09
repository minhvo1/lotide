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

module.exports = countLetters;