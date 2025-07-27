function maxValidSubarrays(n, conflictingPairs) {
    const nums = Array.from({ length: n }, (_, i) => i + 1);

    const allSubarrays = [];
    for (let i = 0; i < n; i++) {
        let sub = [];
        for (let j = i; j < n; j++) {
            sub.push(nums[j]);
            allSubarrays.push([...sub]);
        }
    }

    let maxCount = 0;

    for (let i = 0; i < conflictingPairs.length; i++) {
        let tempPairs = conflictingPairs.slice(0, i).concat(conflictingPairs.slice(i + 1));
        let count = 0;
        
        for (let sub of allSubarrays) {
            let valid = true;
            for (let [a, b] of tempPairs) {
                if (sub.includes(a) && sub.includes(b)) {
                    valid = false;
                    break;
                }
            }
            if (valid) count++;
        }

        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
}
console.log(maxValidSubarrays(4, [[2,3],[1,4]])); 
