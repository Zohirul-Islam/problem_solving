function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let closest = nums[0] + nums[1] + nums[2]; 

    for (let i = 0; i < n - 2; i++) {
        let left = i + 1, right = n - 1;

        while (left < right) {
            let currSum = nums[i] + nums[left] + nums[right];

            if (Math.abs(currSum - target) < Math.abs(closest - target)) {
                closest = currSum;
            }

            if (currSum < target) {
                left++;
            } else if (currSum > target) {
                right--;
            } else {
                return currSum; // exact match
            }
        }
    }

    return closest;
}
console.log(threeSumClosest([-1,2,1,-4],1))
