function sumAll(a,b){
let array;
  if(a>=0 && b >= 0 && Number.isInteger(a) && Number.isInteger(b)){
        if(a<b){
             array=Array.from({length:b-a+1},()=>a++).reduce((acc,cur)=> acc + cur,0)
        }
        else if(a>b){
            array=Array.from({length:a-b+1},()=>b++).reduce((acc,cur)=> acc + cur,0)
        }
    }
    else{
        return 'ERROR'
    }
   return array
 }

// Do not edit below this line
module.exports = sumAll;
