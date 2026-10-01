type Key = string;
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
    const values = this.keyStore.get(key);
    if (!values) {
      return "";
    }
    let left = 0;
    let right = values.length - 1;
    let possLargValueAndTimestamp;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (timestamp >= values[mid][1]) {
        possLargValueAndTimestamp = values[mid];
      }
      if (values[mid][1] === timestamp) {
        return values[mid][0];
      } else if (values[mid][1] > timestamp) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return possLargValueAndTimestamp ? possLargValueAndTimestamp[0] : "";
  }
}
