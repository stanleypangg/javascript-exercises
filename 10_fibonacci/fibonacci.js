const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    if (n == 0) return 0;
    if (n == 1) return 1;

    let fnMinusTwo = 0;
    let fnMinusOne = 1;
    let res = 0;

    for (let i = 2; i <= n; i++) {
        res = fnMinusOne + fnMinusTwo;
        fnMinusTwo = fnMinusOne
        fnMinusOne = res;
    }

    return res;
};

// Do not edit below this line
module.exports = fibonacci;
