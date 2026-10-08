class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s: string): number {
    let maxL = 0;
    let left = 0;
    const charSet = new Set();

    for (let right = 0; right < s.length; right++) {
      while (charSet.has(s[right])) {
        charSet.delete(s[left]);
        left++;
      }
      charSet.add(s[right]);
      maxL = Math.max(maxL, right - left + 1);
    }
    return maxL;
  }
}
