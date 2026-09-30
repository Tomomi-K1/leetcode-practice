function search(nums: number[], target: number): number {
  //[ 1, 2, 3, 4, 5] target = 2
  //[ 4, 5, 1, 2, 3] mid =1 target is 5
  //     L.    m.    R. L > m : if mid is not between M and R then we move right
  //                    L > m : is mid between M and R? yes then move left+ 1
  // //[ 2, 3, 4, 5, 1]
  //     L     M     R  L <= m : is target inbetween L and M then move R-1
  //              M      L < m : is target inbetween L and M if no them move L + 1
  //we have to think about which earlier group or smaller group
  //if left <= right we just move as usual
  //if left >= mid mid is in smaller group,
  //if left < right is not true; then it's rotated

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (target === nums[mid]) {
      return mid;
      // } else if (nums[left] <= nums[right]) {
      //   if (target < nums[mid]) {
      //     right = mid - 1;
      //   } else {
      //     left = mid + 1;
      //   } we don't need to calculate this because other else if statements will cover this case
    } else if (nums[left] > nums[mid]) {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (nums[mid] > target && target >= nums[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return -1;
}
