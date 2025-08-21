const repeatString = function(string,num) {
    let repeatedString= ''
    if(num===0 || string=== '' ){
        return repeatedString
    }

    else if(num< 0){
        return repeatedString += 'ERROR'
    }
    
    else{
        for(i=1;i<= num;i++){
            repeatedString += string
        }
    }

    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
