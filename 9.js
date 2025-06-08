function matchNumberArray(arr1,arr2)
{
    let arr3 = [];
    if(arr1.length  > arr2.length)
    {   
       for(let i= 0;i<arr2.length;i++)
       {
        for(let j= 0;j<arr1.length;j++)
        {
            if(arr2[i] === arr1[j])
            {
                arr3.push(arr2[i])
            }
        }
       }
    }
    else{
        for(let i= 0;i<arr1.length;i++)
       {
        for(let j= 0;j<arr2.length;j++)
        {
            if(arr1[i] === arr2[j])
            {
                arr3.push(arr1[i]);
                break;
            }
        }
       }
    }
    return  arr3;
}
nums1 = [1, 2, 2, 1];  
nums2 = [2, 2];
console.log(matchNumberArray(nums1,nums2));