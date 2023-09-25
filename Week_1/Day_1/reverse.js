const args = process.argv.slice(2);

const reverseString = function(inputString) {
  let result = "";
  let len = inputString.length;
  for (let i = len - 1; i >= 0; i--) {
    result += inputString[i];
  }
  return result;
};

const reverse = function(inputStrings) {
  for (let i = 0; i < inputStrings.length; i++) {
    console.log(reverseString(inputStrings[i]));
  }
};

reverse(args);