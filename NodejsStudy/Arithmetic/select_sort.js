function selectionSort(arr){
    var len = arr.length;
    var minIndex, temp;
    for(var i = 0; i < len -1; i++){
        minIndex = 1;
        for(var j = i + 1; j < len; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
