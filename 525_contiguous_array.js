/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let map = new Map();
    let sum = 0;
    let maxlength = 0;
    map.set(0, -1);
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] == 0) nums[i] = -1;
        sum += nums[i]
        if (map.has(sum)) {
            let length = i - map.get(sum);
            maxlength = Math.max(maxlength, length);
        } else {
            map.set(sum, i);
        }
    }
    return maxlength;
};