function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let res = [];

    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates

        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue; // skip duplicates

            let left = j + 1, right = n - 1;

            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);

                    // skip duplicates
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return res;
}
