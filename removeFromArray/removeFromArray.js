const removeFromArray = function(array, ...targets) {
    return array = array.filter((element) => !targets.includes( element ));       
}

module.exports = removeFromArray


/* const arrayToBeChecked =array;
    const elementsToBeRemoved = targets;
    arrayToBeChecked.forEach((element1)=>elementsToBeRemoved.forEach((element2)=>
        {if (element1!=element2){
            arrayToBeChecked.remove(element1)
        }}))
    return arrayToBeChecked */