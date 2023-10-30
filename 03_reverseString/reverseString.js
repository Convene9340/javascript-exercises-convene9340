const reverseString = function(word) {

const arrayLetters = word.split('');
let revWord = '';

for (i = 0; i < arrayLetters.length; i++) {
	revWord = arrayLetters[i] + revWord;
}

return revWord;

};

// Do not edit below this line
module.exports = reverseString;
