let isPalindrome = x => {
    if ((Number.isInteger(x) === false) || (x < 0) || (typeof(x) !== "number")) {
        return false
    } else if (x -  reverseNumber(arrayOfDigits(x)) === 0) {
        return true
    } else {
        return false
    }
};

let arrayOfDigits = x => {
    let condition = findCondition(x);
    let divisor = 10;
    let digits = [];

    for (i = 0; divisor !== condition * 10; i++) {
        let divisionResult = x % divisor / (divisor / 10);
        let divisionRest = ((x % divisor) % (divisor / 10)) / (divisor / 10);
        digits.push(divisionResult - divisionRest);
        divisor = divisor * 10;
    }
    return digits;
};

let findCondition = x => {
    let divisor = 1;
    do {
        divisor = divisor * 10;
    } while (x % divisor !== x);
    return divisor
};
let reverseNumber = (x) => {
    let reverseNumber =[];
    let multiplier = 1;
    for (i = x.length -1; i >= 0; i--) {
        reverseNumber.push(x[i]*multiplier);
        multiplier = multiplier * 10;
    }
    return reverseNumber.reduce((previousValue, currentValue) => {return previousValue + currentValue});
};

isPalindrome(121);
