const removeFromArray = function( arr, ...theElements ) {

    for (const element of theElements)
        while (arr.includes(element))
            arr.splice(arr.indexOf(element), 1);

    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
