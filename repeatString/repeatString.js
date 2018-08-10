const repeatString = function(string, count) {
    if(count < 0){return "ERROR"}
    let s = ""
    for(count;count>0;count--){
        s+=string
    }
    return s
}

module.exports = repeatString
