function quicksort(arr, first, last) {
    if (first >= last) return
    let Pindex = findPivotIndex(arr, first, last);
    quicksort(arr, first, Pindex - 1);
    quicksort(arr, Pindex + 1, last);

}

function findPivotIndex(arr, first, last) {

    let pivot = arr[last];
    let i = first - 1;

    for (j = first; j < last; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j)
        }
    }
    i++;
    swap(arr, i, last);
    return i;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [1, 4, 565, 3, 4, 34324, 4, 53, 344343];
quicksort(arr, 0, arr.length - 1);
console.log('Sorted Array', arr);
