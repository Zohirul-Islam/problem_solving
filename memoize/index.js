function memoize(fn) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
let count = 0;
const add = (a, b) => {
  count++;
  return a + b;
};

const memoAdd = memoize(add);

console.log(memoAdd(2, 3)); // 5 (নতুন হিসাব)
console.log(memoAdd(2, 3)); // 5 (ক্যাশ থেকে রিটার্ন)
console.log(count);         // 1 (শুধু একবারই হিসাব করা হয়েছে)
