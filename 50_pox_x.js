/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n == 0) return 1.0;
    return n < 0 ? 1 / temp(x, n) : temp(x, n)
};

var temp = function (x, n) {
    if (n == 0) return 1.0;
    let ans = temp(x, parseInt(n / 2));
    if (n % 2 == 0) return ans * ans;
    return ans * ans * x;
}

console.log(myPow(2, 10));
