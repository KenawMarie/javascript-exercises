const findTheOldest = function(people) {
 let birth=people.map((e)=>e.yearOfBirth);
      for(i=0;i<people.length;i++){
              if(people[i].yearOfDeath==undefined  && people[i].yearOfBirth===Math.min(...birth)) {
               return people[i];
              }
              else if(people[i].yearOfDeath==undefined  && people[i].yearOfBirth===Math.max(...birth)){
                return people.filter((a,b)=>(a.yearOfDeath!==undefined)).sort((a,b)=>(b.yearOfDeath-b.yearOfbirth)-(a.yearOfDeath-a.yearOfbirth))[0]
              }
              else{
                return people.sort((a,b)=>(b.yearOfDeath-b.yearOfBirth)-(a.yearOfDeath-a.yearOfBirth))[0]
              }
       }
};
// Do not edit below this line
module.exports = findTheOldest;
