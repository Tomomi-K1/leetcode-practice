function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  let res = nums[left];

  while (left <= right) {
    if (nums[left] <= nums[right]) {
      res = Math.min(res, nums[left]);
      break;
    }
    let mid = left + Math.floor((right - left) / 2);
    res = Math.min(res, nums[mid]);
    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return res;
}

console.log(findMin([5, 0, 1, 2, 3, 4]));
