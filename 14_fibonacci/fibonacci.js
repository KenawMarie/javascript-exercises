const fibonacci = function(n) {
  let arr=[1,1];
  for(let i=0; i<n;i++){
    if(i>1)
    arr.push(arr[i-1]+arr[i-2])
  }
  return arr.at(-1)
};

// Do not edit below this line
module.exports = fibonacci;
