/*
Input: arr[] = [1, 2, 1, 3, 4, 2, 3], k = 4
Output:  [3, 4, 4, 3]
Explanation: Window 1 of size k = 4 is 1 2 1 3. Number of distinct elements in this window are 3. 
Window 2 of size k = 4 is 2 1 3 4. Number of distinct elements in this window are 4.
Window 3 of size k = 4 is 1 3 4 2. Number of distinct elements in this window are 4.
Window 4 of size k = 4 is 3 4 2 3. Number of distinct elements in this window are 3.
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */

//** BRUTE FORCE */

class Solution {
    countDistinct(arr, k) {
        // code here
        let ans = [];

        for (let i = 0; i <= arr.length - k; i++) {
            let set = new Set();
            for (let j = i; j < i + k; j++) {
                set.add(arr[j]);
            }
            ans.push(set.size);
        }

        return ans;
    }
}

//** OPTIMAL APPROACH */

class Solution {
    countDistinct(arr, k) {
   const ans = [];
        const map = new Map();
        for (let i = 0; i < k - 1; i++) {
            map.set(arr[i], (map.get(arr[i]) || 0) + 1);
        }
        let i = 0, j = k - 1;
        while (j < arr.length) {
            map.set(arr[j], (map.get(arr[j]) || 0) + 1);
            ans.push(map.size); 
            let freq = map.get(arr[i]);
            if (freq == 1) {
                map.delete(arr[i]);
            } else {
                map.set(arr[i], freq - 1);
            }
            i++;
            j++;
        }
        return ans;
    }     
}