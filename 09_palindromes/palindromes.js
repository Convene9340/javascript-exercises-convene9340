const palindromes = function (word) {
    const ignoreChar = [" ", ",", ".", "!"];
    var trimmedWord = [];
    var flag = true;
    //split word into characters array
    var letters = [];
    var normalElement = ""
    letters = word.split("");
    //remove punctuations
    letters.forEach(element => {
        if (ignoreChar.includes(element)){
            //do not add
        } else {
            trimmedWord.push(element);
        }
    });
    //reverse the array
    for (let index = 0; index < trimmedWord.length; index++) {
        normalElement = trimmedWord[index];
        reverseElement = trimmedWord[(trimmedWord.length-1) - index];
        if (normalElement.toUpperCase() === reverseElement.toUpperCase()) {
            //do nothing
        } else {
            flag = false;
            break;
        }
    }
//return normalElement + " : " + reverseElement;
return flag;

};

// Do not edit below this line
module.exports = palindromes;
