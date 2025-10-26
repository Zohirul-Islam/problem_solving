function removeDuplicates(nums) {
     nums.sort((a, b) => a - b);
  if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1; 
}

console.log(removeDuplicates([2,2,5,1,6,2,0]))