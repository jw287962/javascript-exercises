const sumAll = function(firstNum, secondNum) {
    let sum = 0;
    

    if(firstNum > secondNum){
        let holder = firstNum;
        firstNum = secondNum;
        secondNum = holder;
    }
 
    if(firstNum < 0 || secondNum < 0) return "ERROR";

    if (typeof firstNum === 'number' && typeof secondNum === 'number'){
        for (let i = firstNum; i<= secondNum; i++){
        sum+=i;
        }
    return sum;
}
else {
    return "ERROR";
}

};

// Do not edit below this line
module.exports = sumAll;
