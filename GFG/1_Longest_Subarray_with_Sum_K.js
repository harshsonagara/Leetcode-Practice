// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

/*
Input: arr[] = [10, 5, 2, 7, 1, -10], k = 15
Output: 6
Explanation: Subarrays with sum = 15 are [5, 2, 7, 1], [10, 5] and [10, 5, 2, 7, 1, -10]. The length of the longest subarray with a sum of 15 is 6.
*/
class Solution {
    longestSubarray(arr, k) {
        // code here
        let map = new Map();
        let sum = 0;
        let maxLength = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];

            if (sum === k) {
                maxLength = i + 1;
            }

            if (map.has(sum - k)) {
                let length = i - map.get(sum - k);
                maxLength = Math.max(maxLength, length);
            }

            if (!map.has(sum)) {
                map.set(sum, i);
            }
        }

        return maxLength;
    }
}
