const sumAll = function(firstNum, secondNum) {



if (typeof firstNum == 'number' && typeof secondNum == 'number' && firstNum < secondNum && firstNum > 0){
	return addAll(firstNum,secondNum);
} else if (typeof firstNum == 'number' && typeof secondNum == 'number' && firstNum > secondNum && secondNum > 0){
	return addAll(secondNum,firstNum);
} else if (firstNum < 0 || secondNum < 0){
	return 'ERROR';
} else {
	return 'ERROR'
}



};


function addAll(lowerNum,higherNum){
	let result = 0; 
	for (i = lowerNum; i < higherNum + 1; i++){
			result += i;
		}
		return result;
	
	};

// Do not edit below this line
module.exports = sumAll;
