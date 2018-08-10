const removeFromArray = function(array, ...targets) {
    return array = array.filter((element) => !targets.includes( element ));       
}

module.exports = removeFromArray
