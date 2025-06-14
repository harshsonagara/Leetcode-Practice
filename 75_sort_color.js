/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let i = 0, j = 0, k = nums.length - 1;
    while (i <= k) {
        if (nums[i] == 0) {
            swap(nums, i, j);
            i++;
            j++;
        } else if (nums[i] == 2) {
            swap(nums, i, k);
            k--
        } else i++
    }
};
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}