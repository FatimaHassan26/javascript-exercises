const repeatString = function(word, count) {
    let finalString = "";
    if (count < 0)
        return "ERROR"
    for(let i = 0; i<count; i++){
        finalString+=word
    }

    return finalString
};

// Do not edit below this line
module.exports = repeatString;
