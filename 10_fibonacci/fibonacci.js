const fibonacci = function(position) {
    const f1 = 1;
    const f2 = 1;
    var newNumber = 0;
    var lastNumber;
    var templastNumber;

    if (position * 1 === 1) {
        return 1;
    } else if (position * 1  === 2) {
        return 1;
    } else if (position * 1 > 2) {

    } else {
        return "OOPS";
    }

    newNumber = f1 + f2
    lastNumber = f2
    for (let index = 3; index < position; index++) {
        templastNumber = newNumber
        newNumber = newNumber + lastNumber;
        lastNumber = templastNumber;
    }
//1: result = f1 + f2
//2: result + f2

return newNumber;

};

// Do not edit below this line
module.exports = fibonacci;
