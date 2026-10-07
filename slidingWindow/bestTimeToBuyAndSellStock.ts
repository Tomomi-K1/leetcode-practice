class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices: number[]): number {
    let max = 0;
    let slowIndex = 0;
    let fastIndex = slowIndex + 1;
    while (fastIndex < prices.length && slowIndex < prices.length) {
      if (prices[slowIndex] >= prices[fastIndex]) {
        slowIndex = fastIndex;
        fastIndex = slowIndex + 1;
      } else {
        max = Math.max(max, prices[fastIndex] - prices[slowIndex]);
        fastIndex++;
      }
    }
    return max;
  }
}
