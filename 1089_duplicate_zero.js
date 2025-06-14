/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let zeros = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) zeros++;
    }

    let i = arr.length - 1; //7 , 6 , 5 , 4
    let j = (arr.length - 1) + zeros; // 10 , 9 , 8 , 7 ,6 , 5

    while (i != j) {
        if (j < arr.length) { // no , no , no , yes
            arr[j] = arr[i];  // 
        }
        j--  // 9 , 7 , 6 , 5
        if (arr[i] == 0) { // yes , no ,no
            if (j < arr.length) { // no 
                arr[j] = arr[i];
            }
            j-- // 8
        }
        i-- // 6 , 5 , 4
    }
    return arr;
}
console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))