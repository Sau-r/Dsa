function twoSum(nums, target) {
    let numMap = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (complement in numMap) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
        console.log(numMap);
    }

    return []; 
}

let nums = [15, 7, 11, 2];
let target = 9;

console.log(twoSum(nums, target));