type Value = [string, number];

class TimeMap {
  private keyStore: Map<string, Array<Value>>;
  constructor() {
    this.keyStore = new Map();
  }

  /**
   * @param {string} key
   * @param {string} value
   * @param {number} timestamp
   * @return {void}
   */
  set(key: string, value: string, timestamp: number): void {
    if (this.keyStore.get(key)) {
      this.keyStore.get(key).push([value, timestamp]);
    } else {
      this.keyStore.set(key, [[value, timestamp]]);
    }
  }

  /**
   * @param {string} key
   * @param {number} timestamp
   * @return {string}
   */
  get(key: string, timestamp: number): string {
    const values = this.keyStore.get(key) || [];
    let res = "";
    // do binary search but update the res value only when mid value is smaller or equal to the timestamp. If mid value is bigger we won't consider those values after.
    let left = 0;
    let right = values.length - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (values[mid][1] <= timestamp) {
        res = values[mid][0];
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return res;
  }
}
