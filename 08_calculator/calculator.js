const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let holder = 0;
	for(const num of array){
    holder += num;
  }
  return holder;
}

const multiply = function(array1) {
  let holder = array1[0];;
  let total;
	for(let i = 1; i <array1.length; i++){
     
    total = holder*array1[i];
    holder = total;
  }
  return total;
};

const power = function(num1, num2) {
  let total = num1;
	for(let i = 1; i <num2; i++){
    total= total* num1;

  }
  return total;
};

const factorial = function(num1) {
  let fact = num1;
  

  for (let i = num1; i>1; i--)
  {
     fact = fact*(i-1)
  }
  if(num1 === 0) return 1;
  else 
	return fact;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
