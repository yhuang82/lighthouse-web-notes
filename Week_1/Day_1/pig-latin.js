const originalWords = process.argv.slice(2);
const pigLatinWords = [];

for (let i = 0; i < originalWords.length; i++) {
  if (typeof originalWords[i] !== 'string') {
    console.log('Error: All inputs must be strings.');
    return;
  }
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}

if (pigLatinWords.length === 0) {
  console.log('Error: No inputs provided.');
} else {
  console.log(pigLatinWords.join(' '));
}

function translateToPigLatin(word) {
  return word.slice(1) + word[0] + "ay";
}