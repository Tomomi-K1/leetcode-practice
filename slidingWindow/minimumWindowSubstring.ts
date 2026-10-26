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

    // {X: 1, Y: 1, Z:1}
    const tCount = new Map();
    for (let char of t) {
      tCount.set(char, (tCount.get(char) || 0) + 1);
    }

    let left = 0;
    while (left < s.length) {
      while (left < s.length && !tCount.has(s[left])) {
        left++;
      }
      const sCount = new Map();
      let matches = 0;
      for (let right = left; right < s.length; right++) {
        sCount.set(s[right], (sCount.get(s[right]) || 0) + 1);
        if (
          tCount.has(s[right]) &&
          tCount.get(s[right]) === sCount.get(s[right])
        ) {
          matches++;
        }
        if (matches === tCount.size) {
          if (res === "") {
            res = s.substring(left, right + 1);
          } else {
            res =
              res.length <= s.substring(left, right + 1).length
                ? res
                : s.substring(left, right + 1);
          }
          break;
        }
      }
      left++;
    }
    return res;
  }
}

//this solution didn't work since it was not efficient enough.
