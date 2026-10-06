class Solution {
  /**
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @return {number}
   */
  findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    //1, 2, 4
    //3, 5, 6

    //we want to deal with shoter array as binary search so we would have less operations and also we won't have problem with out of bounds for half value.
    let A = nums1;
    let B = nums2;
    const totalLength = A.length + B.length; //6
    const half = Math.floor((nums1.length + nums2.length) / 2); //3

    if (B.length < A.length) {
      [A, B] = [B, A];
    }

    let Al = 0;
    let Ar = A.length - 1;

    while (true) {
      const Am = Al + Math.floor((Ar - Al) / 2); // 1 => A[Amid] === 5
      const Bm = half - Am - 2;

      let Aleft = Am >= 0 ? A[Am] : Number.MIN_SAFE_INTEGER;
      let Aright = Am < A.length - 1 ? A[Am + 1] : Number.MAX_SAFE_INTEGER;
      let Bleft = Bm >= 0 ? B[Bm] : Number.MIN_SAFE_INTEGER;
      let Bright = Bm < B.length - 1 ? B[Bm + 1] : Number.MAX_SAFE_INTEGER;

      console.log(Aright, Aleft, Bleft, Bright);
      if (Aleft <= Bright && Bleft <= Aright) {
        if (totalLength % 2 == 1) {
          return Math.min(Aright, Bright);
        } else {
          return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
        }
      } else {
        if (Aleft > Bright) {
          Ar = Am - 1;
          console.log(Ar, Al);
        } else {
          Al = Am + 1;
        }
      }
    }
  }
}
