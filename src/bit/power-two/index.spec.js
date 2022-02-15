const { isPowerOfTwo, isPowerOfTwo2 } = require('.');
describe('two', () => {
  describe('power-two', () => {
    test('231-0', () => {
      const n = 1,
        result = true;
      expect(!!isPowerOfTwo(n)).toBe(result);
      expect(!!isPowerOfTwo2(n)).toBe(result);
    });
    test('231-1', () => {
      const n = 16,
        result = true;
      expect(!!isPowerOfTwo(n)).toBe(result);
      expect(!!isPowerOfTwo2(n)).toBe(result);
    });
    test('231-2', () => {
      const n = 3,
        result = false;
      expect(!!isPowerOfTwo(n)).toBe(result);
      expect(!!isPowerOfTwo2(n)).toBe(result);
    });
  });
});
