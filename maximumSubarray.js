function maxSubArray(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let maxSum = nums[0]; 
    let currentSum = nums[0]; 

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); 
        console.log(maxSubArray([1])); 
        console.log(maxSubArray([-1, -2, -3])); 
        console.log(maxSubArray([5, 4, -1, 7, 8])); 
        console.log(maxSubArray([-2, 1])); 