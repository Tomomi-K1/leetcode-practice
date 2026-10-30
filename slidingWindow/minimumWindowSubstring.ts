class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s: string, t: string): string {
    let res = "";
    //example 3 s is shorter than t
    if (s.length < t.length) {
      return res;
    }

    const tCount = new Map(); // {X:1, Y:1, Z:1}
    for (const char of t) {
      tCount.set(char, (tCount.get(char) || 0) + 1);
    }

    let left = 0; // 3 O
    let range = [-1, -1]; // [2, 6]
    let length = Number.MAX_SAFE_INTEGER; // 5
    const sCount = new Map(); // {Z:0, Y: 1, X:1}
    let matches = 0; // 2
    //right = 7
    //s[right] ='X'
    for (let right = 0; right < s.length; right++) {
      sCount.set(s[right], (sCount.get(s[right]) || 0) + 1);

      if (
        tCount.has(s[right]) &&
        sCount.get(s[right]) === tCount.get(s[right])
      ) {
        matches++;
      }

      while (matches === tCount.size) {
        if (length > right - left + 1) {
          range = [left, right];
          length = right - left + 1;
        }

        sCount.set(s[left], sCount.get(s[left]) - 1);
        if (tCount.has(s[left]) && sCount.get(s[left]) < tCount.get(s[left])) {
          matches--;
        }

        left++;
      }
    }
    return length === Number.MAX_SAFE_INTEGER
      ? ""
      : s.substring(range[0], range[1] + 1);
  }
}
