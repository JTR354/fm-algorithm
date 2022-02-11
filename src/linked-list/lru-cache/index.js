exports.LRUCache = class {
  constructor(capacity) {
    this.cache = new Map();
    this.max = capacity;
  }
  get(key) {
    const { cache } = this;
    if (cache.has(key)) {
      const val = cache.get(key);
      cache.delete(key);
      cache.set(key, val);
      return val;
    }
    return -1;
  }
  put(key, value) {
    const { cache, max } = this;
    if (cache.has(key)) {
      cache.delete(key);
    } else if (cache.size >= max) {
      cache.delete(cache.keys().next().value);
    }
    cache.set(key, value);
  }
};
