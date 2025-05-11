/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let right = s.length-1, left = 0;
    while (left < right) {
        let temp = s[right];
        s[right] = s[left];
        s[left] = temp;
        right--;
        left++;
    }
};