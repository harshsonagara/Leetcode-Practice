/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (char in map) {
            stack.push(map[char]);
        } else {
            if (stack.pop() !== char) return false;
        }
    }

    return stack.length === 0;
};
