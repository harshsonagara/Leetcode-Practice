/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    //** Method 1
    // Brute Force  , but the problem is its fail some case and time limite exeted
    //  let maxSum = -Infinity;
    // for (let i = 0; i < nums.length; i++) {
    //     let currentSum = 0;
    //     for (let j = i; j < nums.length; j++) {
    //         currentSum += nums[j];
    //         maxSum = Math.max(maxSum, currentSum);
    //     }
    // }

    //** Method 2  this working fine
    let maxSum = nums[0], currSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currSum = Math.max(nums[i], currSum + nums[i]);
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;

    //** Method 3
    //Still failing in some test case.
    // let sum = 0;
    // let maxsum = 0;
    // if(nums.length <= 1 ) return nums[0]
    // for ( let  i = 0; i< nums.length;i++){
    //     sum += nums[i]
    //     if(sum > maxsum) maxsum = sum;
    //     if(sum < 0) sum = 0;
    // }
    // return maxsum;

};