const { LRUCache } = require('.');
describe('linked-list', () => {
  describe('lrc-cache', () => {
    test('146-0', () => {
      const lRUCache = new LRUCache(2);
      lRUCache.put(1, 1); // 缓存是 {1=1}
      lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
      // lRUCache.get(1); // 返回 1
      expect(lRUCache.get(1)).toBe(1);
      lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
      // lRUCache.get(2); // 返回 -1 (未找到)
      expect(lRUCache.get(2)).toBe(-1);
      lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
      expect(lRUCache.get(1)).toBe(-1);
      expect(lRUCache.get(3)).toBe(3);
      expect(lRUCache.get(4)).toBe(4);
      // lRUCache.get(1); // 返回 -1 (未找到)
      // lRUCache.get(3); // 返回 3
      // lRUCache.get(4); // 返回 4
      // todo
    });
  });
});
