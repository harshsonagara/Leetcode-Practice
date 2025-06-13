/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const stack = [];
    const resMap = {};

    for (let num of nums2) {
        while (stack.length && num > stack[stack.length - 1]) {
            const top = stack.pop();
            resMap[top] = num;
        }
        stack.push(num);
    }
    while (stack.length) {
        const top = stack.pop();
        resMap[top] = -1;
    }
    return nums1.map(num => resMap[num]);
};
