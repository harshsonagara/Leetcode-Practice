/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let set = new Set(nums1);
    let ans = [];
    for (let i = 0; i < nums2.length; i++) {
        if(set.has(nums2[i]) && !ans.includes(nums2[i])) ans.push(nums2[i]);
    }
    return ans;
};

// written for O(1) and O(n)
var intersection = function (nums1, nums2) {
    let set = new Set(nums1);
    let resultSet = new Set();

    for (let i = 0; i < nums2.length; i++) {
        if (set.has(nums2[i])) resultSet.add(nums2[i]);
    }

    return Array.from(resultSet);
};
