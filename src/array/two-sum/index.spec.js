const { twoSum, twoSum1 } = require('.');
describe('Array', () => {
  describe('Two Sum', () => {
    test('two-sum 0', () => {
      const nums = [3, 2, 4],
        target = 6,
        result = [1, 2];
      expect(twoSum(nums, target)).toEqual(result);
      expect(twoSum1(nums, target)).toEqual(result);
    });
    test('two-sum 1', () => {
      const nums = [3, 3],
        target = 6,
        result = [0, 1];
      expect(twoSum(nums, target)).toEqual(result);
      expect(twoSum1(nums, target)).toEqual(result);
    });
  });
});
