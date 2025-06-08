function insertionSort(arr)
{
    for(let i = 1;i<arr.length;i++)
    {
        let j = i-1;
        let current = arr[i];
        while(j>=0 && arr[j] >current){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    
    }
    console.log(arr);
}
insertionSort([5,2,8,1,9]);