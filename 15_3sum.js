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

var threeSum = function (nums) {
    nums.sort((a,b)=>a-b);
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (i != 0 && nums[i - 1] == nums[i]) continue;
        let j = i + 1, k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum == 0) {
                let cur = [nums[i], nums[j++], nums[k--]]
                ans.push(cur);

                while (j < k && nums[j - 1] == nums[j]) j++;
                while (j < k && nums[k + 1] == nums[k]) k--;
            } else if (sum < 0) j++;
            else k--;
        }
    }
    return ans;
};