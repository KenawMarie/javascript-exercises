const fibonacci = function(n) {
  let arr=[1,1];
 let m= Number(n) 
  if(m<0){
    return 'OOPS'
    }
  else if(m===1){
    return 1
  }
  else if(m===0){
    return 0
  }
  for(let i=0; i<m;i++){
    if(i>1)
    arr.push(arr[i-1]+arr[i-2])
   
  }
  
  return arr.at(-1)
};

// Do not edit below this line
module.exports = fibonacci;
