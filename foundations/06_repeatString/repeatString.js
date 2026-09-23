const repeatString = function(str, num) {
    let sumString = '';
    if (num <  0){
        return 'ERROR'
    } else {
        for (let i = 0; i < num; i++){
            sumString += str;
        }
        return sumString;
    }
};

// Do not edit below this line
module.exports = repeatString;
