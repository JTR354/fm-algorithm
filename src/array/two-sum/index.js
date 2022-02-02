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

exports.twoSum2 = (nums, target) => {
  const record = {}; // 记录表
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    /**
     * 由于下面的步骤做好了需要配对的数据,
     * 所有只需要判断当前的数据 在 record中,
     * 就可以判定配对成功, 然后对应的下标.
     */
    if (current in record) {
      return [record[current], i];
    }
    /*
      如果没有匹配上,就把它记录在record上面.
      它指的就是 需要配对的数, 例如: 
      如果current = 2, target = 6, 那么 下次需要4就能跟2配上对了.
    */
    record[target - current] = i;
  }
};
