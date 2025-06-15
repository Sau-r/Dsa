function maxSubArray(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);  -1 , 6 + -1
        maxSum = Math.max(maxSum, currentSum);
        console.log("Number "+  nums[i]);
        console.log("currentsum "+currentSum);
        console.log("maxSum "+maxSum);
        
        
    }

    return maxSum;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
     