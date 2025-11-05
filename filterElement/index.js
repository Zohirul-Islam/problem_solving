

function filter(arr, fn) {
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
}
console.log(filter([0, 10, 20, 30], (n) => n > 10));
// Output: [20, 30]
console.log(filter([1, 2, 3], (n, i) => i === 0)); 
// Output: [1]
