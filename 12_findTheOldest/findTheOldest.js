const findTheOldest = function(people) {
    let currentOldest = 0;
    let i = 0;
    let oldest = 0;

    let currentYear = new Date().getFullYear() 
 let alive = false;
    for(const person of people){
        if(person.yearOfDeath != null){
         


  let currentAge =  person.yearOfDeath - person.yearOfBirth;
  if(currentOldest < currentAge){
  currentOldest = currentAge;
  oldest = i;
  }
  i++;
}
else {
    let currentAge =   currentYear- person.yearOfBirth; //current age of the living person
    if(currentOldest <currentAge){
        currentOldest = currentAge;
        oldest = i;
    }
  
    i++;
}
        }
return people[oldest];


};

// Do not edit below this line
module.exports = findTheOldest;


