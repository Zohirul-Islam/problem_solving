function map(arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }

  return result;
}
console.log(map([1, 2, 3], (n) => n + 1));
// Output: [2, 3, 4]