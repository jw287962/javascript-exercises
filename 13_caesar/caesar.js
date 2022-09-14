const caesar = function(word, shift) {
    let newString = '';
    
    const regex = new RegExp(/[^A-Za-z]/); //if not a letter
    const regexisUpper = new RegExp(/[A-Z]/);
    const regexisLower = new RegExp(/[a-z]/);
    while(shift >=26)
    {
    shift = shift-26;
     }
    while(shift <= -26)
    {
        shift = shift +26;
    }


for(let i = 0; i < word.length;i++){ 
    if(regex.test(word.charAt(i))){ //test if it is not a letter
       
        newString += word.charAt(i);
    }
    //test if it is a capital letter befoer and afteer adding the shift.  
    //does the wrap\\
    
    else if (regexisUpper.test(String.fromCharCode(word.charCodeAt(i)))){
        
        if(regexisUpper.test(String.fromCharCode(word.charCodeAt(i)+shift))){
            newString += String.fromCharCode(word.charCodeAt(i)+shift);
                
      
             
                 
                }
                else if (shift >0){
                    newString += String.fromCharCode(word.charCodeAt(i)+shift-26);
                }
                else if(shift <=0){
                    newString += String.fromCharCode(word.charCodeAt(i)+shift+26);
                }  
            }
    else if(regexisLower.test(String.fromCharCode(word.charCodeAt(i)))){
        if(regexisLower.test(String.fromCharCode(word.charCodeAt(i)+shift))){
          
            newString += String.fromCharCode(word.charCodeAt(i)+shift);
        }
                    else if (shift >0){
                newString += String.fromCharCode(word.charCodeAt(i)+shift-26);
            }
            else if(shift <=0){
                newString += String.fromCharCode(word.charCodeAt(i)+shift+26);
            }  
         
                 
      
    }
    
    else
    newString += String.fromCharCode(word.charCodeAt(i)+shift);
}



return newString;

};

// Do not edit below this line
module.exports = caesar;
