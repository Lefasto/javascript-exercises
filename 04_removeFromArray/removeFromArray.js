const removeFromArray = function(inputArray, ...valueToDelete) {
    let newArray = []
    for(let i = 0; i < inputArray.length; i++){
        if(!valueToDelete.includes(inputArray[i])){
            newArray.push(inputArray[i]);
        }
    }
    return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
