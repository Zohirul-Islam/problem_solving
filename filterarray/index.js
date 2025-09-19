
const fn = (n, i) => n % 2 === 0;
function filter(arr, fn) {
  let filteredArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
}
console.log(filter([1,5,3,6],fn))
