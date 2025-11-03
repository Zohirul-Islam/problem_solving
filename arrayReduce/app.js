let fn = (result, curr) => result + curr;
const reduce = (fn, arr, init) => {
  let val = init;
  for (let i = 0; i < arr.length; i++) {
    val = fn(val, arr[i]);
  }
  return val;
};

console.log(reduce(fn, [1, 2, 3, 4], 0));
