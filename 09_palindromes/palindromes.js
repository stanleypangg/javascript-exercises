const palindromes = function (str) {
    let clean = str.split("").filter(char => !".,:;?! ".includes(char)).join("").toLowerCase();
    return clean === clean.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
