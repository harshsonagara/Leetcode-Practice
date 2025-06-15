/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// This brute force solution is going to give an error of duplicate

var threeSum = function (nums) {
    let arr = new Array()
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    arr.push([nums[i],nums[j],nums[k]])
                }
            }
        }
    }
    return arr
};