const fibonacci = function(fibonacciNumber) {
 let firstNumber = 1;
 let secondNumber = 1;
 let total = 1;
 if(fibonacciNumber < 0) {
    return 'OOPS';
}
 for(let i = 3;i <=fibonacciNumber; i++){
    if (fibonacciNumber> 2){
        total = firstNumber + secondNumber; 
        firstNumber = secondNumber;
        secondNumber = total;
    }
        
        else return 1;
 }
 return total;

};

// Do not edit below this line
module.exports = fibonacci;
