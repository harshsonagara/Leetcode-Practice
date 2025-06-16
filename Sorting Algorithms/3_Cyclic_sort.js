let arr = [4, 5, 2, 3, 8, 6, 1, 7];
let i = 0;
while (i < arr.length) {
    let curindex = arr[i] - 1;
    if (arr[i] != arr[curindex]) {
        let temp = arr[i];
        arr[i] = arr[curindex];
        arr[curindex] = temp;
    } else i++;
}

console.log('Sorted Array', arr);
