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

function partition(arr, l, r) {
  const pivot = arr[l];
  while (l <= r) {
    while (l <= r && arr[l] < pivot) {
      l++;
    }
    while (l <= r && arr[r] > pivot) {
      r--;
    }
    if (l <= r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }
  return [l, r];
}
exports.partition = partition;
exports.quickSort2 = function quickSort2(arr, start, end) {
  /**
   * 1. 找一个flag, 找出比它小的放左边,大的放右边
   * 2. L,R,F; 遍历L>=F,R<=F;找到后交换L,R的元素,L++,R--;
   * 那么L左边的都会<=F,R右边的都会>=F
   * 3. 递归整个序列
   */
  if (start >= end) return;
  const [l, r] = partition(arr, start, end);
  quickSort2(arr, start, r);
  quickSort2(arr, l, end);
};
