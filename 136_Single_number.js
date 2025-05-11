/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let count = {};
    for (let num of nums) {
        if (count[num]) {
            count[num]++;
        }
        else {
            count[num] = 1;
        }
    }
    for(let key in count){
        if(count[key] === 1){
            return Number(key);
        }
    }
};