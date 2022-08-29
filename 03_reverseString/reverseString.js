const reverseString = function(string) {
const words = string.split('');
let reversed = '';
for(let i = words.length-1; i >=0; i--){
    reversed += words[i];

}
return reversed;
};

// Do not edit below this line
module.exports = reverseString;
