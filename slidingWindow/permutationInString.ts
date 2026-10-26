class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1: string, s2: string): boolean {
    //s1 ='ab', 'ba'
    //s2 = 'dabc' ==> true because it include 'ab'
    //s1 is longer than s2, then should return false
    if (s1.length > s2.length) {
      return false;
    }

    //we create frequency array
    const s1Count = Array(26).fill(0);
    const s2Count = Array(26).fill(0);
    let matches = 0;
    //  0. 1 2 3
    // [0, 0,0,0,0,0,0,0,0,0,0]
    //  a. b c d ...
    for (let i = 0; i < s1.length; i++) {
      s1Count[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
      s2Count[s2.charCodeAt(i) - "a".charCodeAt(0)]++;
    }

    //we check matches at this moment
    for (let i = 0; i < 26; i++) {
      if (s1Count[i] === s2Count[i]) {
        matches++;
      }
    }

    //now we do the sliding window
    let l = 0;
    for (let r = s1.length; r < s2.length; r++) {
      //first we need to check if frequency matches at this point because we did the first postion of frequency matching check at the previous steps.
      if (matches === 26) {
        return true;
      }
      //adding right letter
      let rIndex = s2.charCodeAt(r) - "a".charCodeAt(0);
      s2Count[rIndex]++;

      //then we check the matches
      if (s1Count[rIndex] === s2Count[rIndex]) {
        matches++;
      } else if (s1Count[rIndex] + 1 === s2Count[rIndex]) {
        matches--;
      }

      //removing left letter
      let lIndex = s2.charCodeAt(l) - "a".charCodeAt(0);
      s2Count[lIndex]--;
      //then we check the matches
      if (s1Count[lIndex] === s2Count[lIndex]) {
        matches++;
      } else if (s1Count[lIndex] - 1 === s2Count[lIndex]) {
        matches--;
      }
      //we finished moving the sliding window so we inclement left
      l++;
    }
    return matches === 26;
  }
}
