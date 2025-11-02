class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const alreadyExists = this.cache.has(key);
    if (alreadyExists) {
      clearTimeout(this.cache.get(key).timeoutId); // clear old timeout
    }

    // set expiration
    const timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);

    // store value and expiration timer
    this.cache.set(key, { value, timeoutId });
    return alreadyExists;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    return this.cache.get(key).value;
  }

  count() {
    return this.cache.size;
  }
}
const cache = new TimeLimitedCache();

console.log(cache.set(1, 42, 1000)); // false (new key)
console.log(cache.get(1));           // 42
console.log(cache.count());          // 1

setTimeout(() => {
  console.log(cache.get(1));         // -1 (expired)
  console.log(cache.count());        // 0
}, 1500);
