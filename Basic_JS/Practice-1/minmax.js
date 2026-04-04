// Find maximum and minimum from the given array
function minmax(arr){
    let max = arr[0];
    let min = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max) max = arr[i];
        if(arr[i] < min) min = arr[i];
    }
    return {max, min};
}

console.log(minmax([2, 4, 7, 9, 0, 8, 6]));