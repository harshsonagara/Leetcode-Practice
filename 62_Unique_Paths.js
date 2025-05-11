/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let numerator = 1, denominator = 1;
    for (let i = 1; i < m; i++) {
        numerator *= (m + n - 1 - i); 
        denominator *= i;               
    }
    return Math.round(numerator / denominator);   
};