public class bubbleSort implements isArraySort{
    @Override
    int[] arr = Arrays.copyOf(sourceArray, sourceArray.length);

    for(int i = 1; i < arr.length; i++){
        boolean flag = true;

        for(int j = 0; j < arr.length - i; j++){
            if(arr[j] > arr[j+1]){
                int tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;

                flag = false;
            }
        }

        if(flag){
            break;
        }
    }
    return arr;
}