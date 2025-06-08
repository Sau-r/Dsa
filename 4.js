function twoSum(arr,target)
{
   for(let i = 0; i < arr.length; i++)
   {
      for(let j = i + 1; j < arr.length; j++)
        {
            if(arr[i] + arr[j] === target)
            {
                return [arr[i],arr[j]];
            }
            else
            {
                return "Not match any number";
            }
        }
   }
}
let nums = [1, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));