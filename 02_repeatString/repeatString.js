const repeatString = function(word, num) {
  let newWord = "";
  for (let i = 0; i < num; i++) {
    if (num >= 0) {
      newWord = newWord + word;
    } else {
      newWord == "ERROR";
    }
  }

  return newWord;
};

// Do not edit below this line
module.exports = repeatString;
