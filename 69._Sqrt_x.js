/**
 * @param {number} n
 * @return {number}
 */
var mySqrt = function (n) {
    if (n === 0 || n === 1) return n;
    let low = 1, high = n, ans = 0;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (mid * mid === n) return mid;
        if (mid * mid < n) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
};
