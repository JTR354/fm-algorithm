const { singleNumber } = require('.');
describe('bit', () => {
  describe('single-number', () => {
    test('136-0', () => {
      const nums = [2, 2, 1],
        result = 1;
      expect(singleNumber(nums)).toBe(result);
    });
    test('136-1', () => {
      const nums = [4, 1, 2, 1, 2],
        result = 4;
      expect(singleNumber(nums)).toBe(result);
    });
  });
});
