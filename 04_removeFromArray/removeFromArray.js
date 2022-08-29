const removeFromArray = function(array, remove1, remove2,remove3,remove4) {
    const newArray = new Array();

loop1:
    for(const things of array){
        
        if(things === remove1 || things === remove2 || things === remove3 || things === remove4){
          continue loop1;
           
        }
      
    newArray.push(things)
}
return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
