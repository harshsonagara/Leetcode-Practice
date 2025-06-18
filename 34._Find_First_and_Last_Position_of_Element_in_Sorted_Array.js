/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var BinarySearch = function (nums, target, isStart) {
    let left = 0, right = nums.length - 1, ans = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] == target) {
            ans = mid;
            if (isStart) right = mid - 1;
            else left = mid + 1;
        } else if (nums[mid] < target) left = mid + 1
        else right = mid - 1;
    }
    return ans;
}

var searchRange = function (nums, target) {
    let start = BinarySearch(nums, target, true)
    let end = BinarySearch(nums, target, false)
    return [start, end];
};