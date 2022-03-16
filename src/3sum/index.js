exports.threeSum = function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[left] + nums[right] + nums[i] === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left + 1] === nums[left]) {
          left++;
        }
        left++;
        while (nums[right - 1] === nums[right]) {
          right--;
        }
        right--;
      } else if (nums[left] + nums[right] + nums[i] > 0) {
        // 单调递增数组; 最大+最小的比目标值大,就要调小最大值
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
};
