export function randomIntInclusive(
  min: number,
  max: number,
  random: () => number = Math.random
): number {
  return Math.floor(random() * (max - min + 1)) + min;
}
