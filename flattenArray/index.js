function flatten(arr, n) {
  let result = [];

  for (let el of arr) {
    if (Array.isArray(el) && n > 0) {
      result.push(...flatten(el, n - 1));
    } else {
      result.push(el);
    }
  }

  return result;
}
console.log(flatten([1, [2, [3, [4]]]], 2))
