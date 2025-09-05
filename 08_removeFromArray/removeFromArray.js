function removeFromArray(arr,...args){
  let filtered=arr.filter((e,i)=> arr.indexOf(e)===i)
  for(let arg of args){
    let i=filtered.indexOf(arg);
    if(filtered.includes(arg)){
      filtered.splice(i,1)
    }
    else{
      filtered
    }
    
  }
 return filtered
   
}
// Do not edit below this line
module.exports = removeFromArray;
