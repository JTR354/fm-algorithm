const { bubbleSort, quickSort, partition, quickSort2 } = require('.');
describe('sort', () => {
  const input = [99, 11, 42, 35, 255, 104, 451, 444, 321, 99];
  const output = [11, 35, 42, 99, 99, 104, 255, 321, 444, 451];
  test('bubble sort', () => {
    expect(bubbleSort([...input])).toEqual(output);
  });
  test('quick sort', () => {
    expect(quickSort([...input])).toEqual(output);
  });
});
describe('quick sort 原地快排', () => {
  const input = [99, 11, 42, 35, 255, 104, 451, 444, 321, 99];
  const output = [11, 35, 42, 99, 99, 104, 255, 321, 444, 451];
  test('partition', () => {
    const arr = [...input];
    partition(arr, 0, arr.length - 1);
    expect(arr).toEqual([99, 11, 42, 35, 255, 104, 451, 444, 321, 99]);
  });
  test('quick sort 2', () => {
    const arr = [...input];
    quickSort2(arr, 0, arr.length - 1);
    expect(arr).toEqual(output);
  });
});
