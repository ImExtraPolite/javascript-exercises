const repeatString = function(word, num) {
  let newWord = "";
  for (let i = 0; i < num; i++) {
    if (num >= 0) {
      newWord = newWord + word;
    } 
  }

  if (num < 0) {
    newWord = "ERROR";
  }

  if (word == "") {
    newWord = "";
  }

  return newWord;
};

// Do not edit below this line
module.exports = repeatString;
