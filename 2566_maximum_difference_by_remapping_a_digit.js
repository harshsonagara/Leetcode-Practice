/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
    let str = num.toString();
    let targetMax = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '9') {
            targetMax = str[i];
            break;
        }
    }
    let maxStr = targetMax ? str.replaceAll(targetMax, '9') : str;
    let minStr = str.replaceAll(str[0], '0');
    return Number(maxStr) - Number(minStr);
};
