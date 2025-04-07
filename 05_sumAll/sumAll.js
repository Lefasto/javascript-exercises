const sumAll = function(firstSummand, secondSummand) {
    let sum = 0;
    if(firstSummand > secondSummand){
        let temp = firstSummand;
        firstSummand = secondSummand;
        secondSummand = temp;
        
    }
    if(isNaN(firstSummand) || isNaN(secondSummand)){
        return "ERROR";
    }
    else if(!Number.isInteger(firstSummand) || !Number.isInteger(secondSummand)){
        return "ERROR";
    }
    else if(firstSummand < 0){
        return "ERROR";
    }
    for(let i = firstSummand; i <= secondSummand; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
