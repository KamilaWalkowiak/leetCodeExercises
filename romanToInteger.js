let romanToInt = s => {
    return replaceRomanNumbers(handleExceptionsInRomanNumbers(s));
};

let romanNumbers = {
    "I": 1,
    "IV": 4,
    "V": 5,
    "IX": 9,
    "X": 10,
    "XL": 40,
    "L": 50,
    "XC": 90,
    "C": 100,
    "CD": 400,
    "D": 500,
    "CM": 900,
    "M": 1000
};

let handleExceptionsInRomanNumbers = s => {
    s = s.split('');
    for (i = 0; i < s.length; i++) {
        if (romanNumbers[s[i]] < romanNumbers[s[i + 1]]) {
            s.splice(i, 2, s[i] + s[i + 1]);
        }
    }
    return s;
};

let replaceRomanNumbers = s => {
    let integers = 0;
    for (i = 0; i < s.length; i++) {
        if (s[i] in romanNumbers) {
            integers += romanNumbers[s[i]];
        }
    }
    return integers;
};

romanToInt("III");
