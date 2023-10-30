const repeatString = function(wordtoRepeat, repeatBy) {
var repeatedString = '';

if (repeatBy >= 0){
	for (let i=0; i < repeatBy; i++){
		repeatedString = repeatedString +  wordtoRepeat;
	}
	return repeatedString;
} else {
	return 'ERROR';
}

};

// Do not edit below this line
module.exports = repeatString;
