/**
 * @param {number} n
 * @return {number}
 */

var mySqrt = function (n) {
    let i = 0;
    for (i; i * i <= n; i++){
        if(i*i == n) return i;
    }
    return i-1;
};
console.log(mySqrt(4))  