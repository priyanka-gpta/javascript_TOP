const repeatString = function(words, repeat) {
    if (repeat <0) {
        return "ERROR";
    }
    let string = "";
    for (let i=0;i<repeat;i++) {
        string = string + words;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
