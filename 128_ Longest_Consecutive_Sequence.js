/**
 * @param {number[]} nums
 * @return {number}
 */

//** BRUTE FORCE */

var longestConsecutive = function (nums) {
    if (nums.length == 0) return 0;
    let longest = 1;
    let count = 1;
    nums.sort((a, b) => a - b);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) continue;
        else if (nums[i] == nums[i - 1] + 1) count++;
        else count = 1;
        longest = Math.max(longest, count);
    }
    return longest;
};

//** Optimal Approach  */

var longestConsecutive = function (nums) {
    let set = new Set(nums);
    let longest = 0;
    for (let num of set) {
        if (!set.has(num - 1)) {
            let count = 1;
            let current = num + 1;
            while (set.has(current)) {
                current++;
                count++;
            }
            longest = Math.max(longest, count);
        }
    }
    return longest;
};