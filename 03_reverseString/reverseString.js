const reverseString = function(input) {
    let reversedString = "";
    for(let i = input.length; i>=0; i--){
        reversedString+= input.charAt(i);
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
