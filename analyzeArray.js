function analyzeArray(arr) {
    let min = arr[0];
    let max = arr[0];
    let average = 0;
    let length = arr.length;
    for(let i = 0; i<length; i++) {
        if(max < arr[i]) max = arr[i];
        if(min > arr[i]) min = arr[i];
        average = average + arr[i];
    }
    average = average / length;

    return {min, max, average, length};
}

module.exports = analyzeArray;