/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // let freq = new Map();
    // let majorityCount = Math.floor(nums.length / 2);
    // let i = 0;
    // while (i < nums.length) {
    //     freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
    //     if (freq.get(nums[i]) > majorityCount) return nums[i];
    //     i++;
    // }


    let count = 1;
    let ans = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (count == 0) {
            ans = nums[i];
            count = 1;
        } else {
            if (nums[i] == ans) count++;
            else count--
        }
    }
    return ans;
};