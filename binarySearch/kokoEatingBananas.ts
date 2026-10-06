function minEatingSpeed(piles: number[], h: number): number {
  let left = 1;
  let right = Math.max(...piles);
  let res = right;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    //we need to calculate how many hours it takes to eat banana by going thru each pile.
    let hours = 0;
    for (let i = 0; i < piles.length; i++) {
      hours += Math.ceil(piles[i] / mid);
      if (hours > h) {
        break;
      }
    }
    if (hours > h) {
      left = mid + 1;
    }
    if (hours <= h) {
      res = Math.min(res, mid);
      right = mid - 1;
    }
  }
  return res;
}
