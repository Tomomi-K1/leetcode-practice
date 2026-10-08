class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s: string): number {
    let maxL = 1;
    let left = 0;
    let right = left + 1;
    const existingS = new Set();
    while (right < s.length) {
      if (existingS.size === 0) {
        existingS.add(s[left]);
      }
      if (existingS.has(s[right])) {
        maxL = Math.max(existingS.size, maxL);
        left = right;
        right++;
        existingS.clear();
      } else {
        maxL = Math.max(existingS.size, maxL);
        existingS.add(s[right]);
        right++;
      }
    }
    return maxL;
  }
}
//this solution does not work for the case of "abcabcbb" because it will return 3 instead of 3. This solution is skipping possible strings towards max length of substrings. The correct approach is to use a sliding window technique with a hash map to keep track of the characters and their indices.
