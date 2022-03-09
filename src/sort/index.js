exports.bubbleSort = function bubbleSort(arr) {
  /**
   * 把大的数字移动到后面, 即左边比有右边大就交换位置
   */
  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
  return arr;
};

exports.quickSort = function quickSort(arr) {
  /**
   * 找到一个flag, 小的放左边, 大的放右边
   */
  if (arr.length < 2) return arr;
  const flag = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];
    if (item > flag) {
      right.push(item);
    } else {
      left.push(item);
    }
  }
  return quickSort(left).concat(flag, quickSort(right));
};

expect.quickSort2 = function quickSort2() {
  // const flag = arr[0];
  // let left = arr[1];
  // let right = arr[arr.length - 1];
  // while(left < right) {
  //   while(left < flag) {
  //     left++
  //   }
  // }
};
