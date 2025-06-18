/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let i = 0;
    while (i < nums.length) {
        let curindex = nums[i] ;
        if (nums[i] != nums[curindex] && nums[i] < nums.length) {
            let temp = nums[i];
            nums[i] = nums[curindex];
            nums[curindex] = temp;
        } else i++;
    }
    let j = 0;
    while(j<nums.length){
        if(nums[j] != j) return j;
        j++;
    }
    return nums.length;
};