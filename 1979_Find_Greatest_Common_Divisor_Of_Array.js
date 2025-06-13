/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    const b = Math.min(...nums);
    const a = Math.max(...nums);
    function Gcd(a, b) {
        if (b == 0) return a;
        return Gcd(b, a % b);
    }
    return Gcd(a,b)
};