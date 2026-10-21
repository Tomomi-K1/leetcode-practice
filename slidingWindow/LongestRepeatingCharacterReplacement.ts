class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s: string, k: number): number {
    let left = 0;
    // we don't have to decrement maxF because longest substring is always the one with the most frequent character, so we can just keep track of the max frequency and use it to calculate the length of the longest substring.
    let maxF = 0;
    let res = 0;
    let count = new Map();
    for (let right = 0; right < s.length; right++) {
      count.set(s[right], (count.get(s[right]) || 0) + 1);
      maxF = Math.max(maxF, count.get(s[right]));

      // right-left+1 could produce negative value but we don't care the shorter string that's below maxF so while loop is skipped and right pointer moves until the string is long enough to be bigger than maxF.
      while (right - left + 1 - maxF > k) {
        count.set(s[left], count.get(s[left]) - 1);
        left++;
      }
      res = Math.max(res, right - left + 1);
    }
    return res;
  }
}
