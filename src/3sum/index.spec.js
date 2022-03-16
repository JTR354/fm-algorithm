const { threeSum } = require('.');
describe('3sum', () => {
  it('demo1', () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const output = [
      [-1, -1, 2],
      [-1, 0, 1]
    ];
    expect(threeSum(nums)).toEqual(output);
  });
});
