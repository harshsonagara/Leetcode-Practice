/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    let first = 0, last = 0, ans = 0;
    for (let i = 0; i < weights.length; i++) {
        last += weights[i];
        first = Math.max(weights[i], first);
    }
    while (first <= last) {
        let mid = Math.floor((first + last) / 2);
        if (isValid(weights, mid, days)) {
            ans = mid;
            last = mid - 1;
        } else first = mid + 1;
    }
    return ans;
};
var isValid = function (arr, upperlimit, k) {
    let count = 1; sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + sum > upperlimit) {
            count++;
            sum = arr[i];
            if (count > k) return false;
        } else sum += arr[i];
    }
    return true;
}