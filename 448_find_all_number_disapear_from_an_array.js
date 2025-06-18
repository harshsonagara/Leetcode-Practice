/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let i = 0;
    while (i < nums.length) {
        let currectindex = nums[i] - 1;
        if (nums[i] != nums[currectindex]) {
            let temp = nums[i];
            nums[i] = nums[currectindex];
            nums[currectindex] = temp;
        } else i++;
    }
    let j = 0;
    let arr = [];
    while (j < nums.length) {
        if (nums[j] != j+1) arr.push(j+1)
        j++
    }
    return arr;
};