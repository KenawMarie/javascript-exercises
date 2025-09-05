const reverseString = function(string) {
    let splitted=string.split('');
    let reverseArray=''
for(let i=0;i< string.length;i++){
    reverseArray += splitted.pop()
  
}
   return reverseArray
}

// Do not edit below this line
module.exports = reverseString;
