const removeFromArray = function(data,removeValue) {

let result = data;
let resultTemp = []
let removeValueTemp = ''

for (iargs = 1; iargs < arguments.length; iargs++){
    removeValueTemp = arguments[iargs];
        for (i = 0; i < result.length; i++){
            if (result[i] !== removeValueTemp) {
                resultTemp.push(result[i]);
            }
        }

        result = resultTemp
        resultTemp = []
    
}

return result;

};

// Do not edit below this line
module.exports = removeFromArray;
