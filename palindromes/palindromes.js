const palindromes = function(string) {
    let punctuation =['?','.','!',' ',',']
    let tester = string.toLocaleLowerCase().split("")
    tester=tester.filter((element) => !punctuation.includes( element ));
    tester=tester.join("")
    if(tester===tester.split("").reverse().join("")){
        return true
    }else{
        return false
    }
    
}
module.exports = palindromes