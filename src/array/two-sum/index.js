exports.twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
  return [];
};

exports.twoSum1 = (nums, target) => {
  // [3,2,4] 6
  const conf = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]; // 2
    // 如果n=2, 那么遇到4的时候就配对完成
    if (conf[n] != null) {
      // 注意顺序
      return [conf[n], i];
    } else {
      conf[target - n] = i;
    }
  }
  return [];
};
