function twoSum(num,target)
{
    let numMap = {};
    for(let i = 0; i < num.length ; i++)
    {
        let complement = target - num[i];
        if(complement in numMap)
        {
            return [numMap[complement],i];
        }
        numMap[num[i]] = i;
    }
    return [];
}
let nums = [15, 7, 11, 2];
let target = 18;

console.log(twoSum(nums, target));