/**
 * Get reward point for one purchase by price
 * @param { number } price purchased price by cents
 * @returns reward point
 */
export function calculator(price) {
  const doublePoints = Math.max(Number(price) / 100 - 100, 0) * 2;
  const singlePoints =
    Number(price) / 100 - 50 < 0 ? 0 : Math.min(Number(price) / 100 - 50, 50);
  return doublePoints + singlePoints;
}
