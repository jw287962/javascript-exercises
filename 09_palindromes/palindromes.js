const palindromes = function (text) {
    let textRemovePunct = text.toLowerCase()
     textRemovePunct = textRemovePunct.replaceAll(/[^a-z]/g,'');

let arrayHolder = textRemovePunct.split('');

let reverseTextHolder = '';
for(let i = (arrayHolder.length -1); i >=0; i--){
  reverseTextHolder += (arrayHolder[i]);
  
}




if(reverseTextHolder.toLowerCase() === textRemovePunct.toLowerCase()){
    return true;
    
}
else return false;
};

// Do not edit below this line
module.exports = palindromes;
