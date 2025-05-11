/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g, '');
    let right = s.length-1, left = 0;
    while (right > left) {
        if (s[left] != s[right]) return false;
        right--;
        left++;
    }
    return true;

};