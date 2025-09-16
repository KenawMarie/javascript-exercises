const palindromes = function (str) {
     let string= a.replaceAll(' ','').replaceAll('!','').replaceAll(',','').replaceAll('.','')
     let arr=string.split('').map((e)=>e.toLowerCase())
     let reverse=arr.slice().reverse()
     let array=[]
     for(let i=0;i<arr.length;i++){
         if(arr[i]===reverse[i]){
              array.push(true)
          }
         else{
              array.push(false)
         }
      }
   if(array.includes(false)){
     return false
    }
   else{
     return true
    }

// Do not edit below this line
module.exports = palindromes;
