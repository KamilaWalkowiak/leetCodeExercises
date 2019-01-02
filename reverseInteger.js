let reverse = x => {
    let arrReverse = [...x.toString()].reverse();
    let numberReverse = parseInt(shiftMinus(removeZeros(arrReverse)).join(""));
    if ((Math.pow(-2, 31) < numberReverse) && (numberReverse < (Math.pow(2, 31) - 1))) {
        return numberReverse
    } else {
        return 0
    }
};

let removeZeros = x => {
    let arrReverseSize = x.length;
    if (x[0] === "0") {
        for (i = 0; i < arrReverseSize; i++) {
            if (x[0] === "0") {
                x.shift();
            }
        }
    }
    return x
};

let shiftMinus = x => {
    if (x[x.length - 1] === "-") {
        x.pop();
        x.unshift("-");
    }
    return x
};

console.log(reverse(0));