const sumAll = function( numA, numB ) {
    let lowerNumber;
    let higherNumber;

    if (numA < 0 || numB < 0)
        return "ERROR";

    if (typeof numA != "number" || typeof numB != "number")
        return "ERROR";

    if (numA < numB) {
        lowerNumber = numA;
        higherNumber = numB;
    }
    else {
        lowerNumber = numB;
        higherNumber = numA;
    }

    let result = higherNumber;

    for (let i=lowerNumber;i<higherNumber;i++) {
        result = result+i;
    }

    return result;

};

// Do not edit below this line
module.exports = sumAll;
