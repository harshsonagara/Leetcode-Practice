/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//** Brute Force  */

var subarraySum = function (nums, k) {
    let count= 0;
     for (let start = 0; start < nums.length; start++) {
        let sum = 0;
        for (let end = start; end < nums.length; end++) {
            sum += nums[end];
            if (sum === k) count++;
        }
    }
    return count;
};

// ** Optimal Approach */


var subarraySum = function (nums, k) {
     let count = 0, sum = 0;
    let map = new Map();
    map.set(sum, 1); 

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
};