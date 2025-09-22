function maxFrequencyElements(nums) {
  const freq = new Map();

  // Count frequencies
  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  // Find maximum frequency
  let maxFreq = Math.max(...freq.values());

  // Sum up all occurrences with max frequency
  let total = 0;
  for (let count of freq.values()) {
    if (count === maxFreq) {
      total += count;
    }
  }

  return total;
}


console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4])); 

