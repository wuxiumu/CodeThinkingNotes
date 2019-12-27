// 递减增量排序
/// 先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录“基本有序”时
/// 在对全体记录进行依次直接插入排序
function shellSort(arr){
    var len = arr.length;
    temp,
    gap = 1;
    while(gap < len/3){
        gap = gap*3+1;
    }
    for(gap; gap > 0; gap = Math.floor(gap/3)){
        for(var i = gap; i < len; i++){
            temp = arr[i];
            for(var j = i - gap; j >= 0 && arr[j] > temp; j-=gap){
                arr[j+gap] = arr[j];
            }
        }
        arr[j+gap] = temp;
    }
    return arr;
}