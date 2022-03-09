const { bubbleSort, quickSort } = require('.');
describe('sort', () => {
  const input = [451, 99, 11, 42, 35, 255, 104, 444, 321, 99];
  const output = [11, 35, 42, 99, 99, 104, 255, 321, 444, 451];
  test('bubble sort', () => {
    expect(bubbleSort([...input])).toEqual(output);
  });
  test('quick sort', () => {
    expect(quickSort([...input])).toEqual(output);
  });
  // test('quick sort2', () => {
  //   expect(quickSort2([...input])).toEqual(output);
  // });
});
