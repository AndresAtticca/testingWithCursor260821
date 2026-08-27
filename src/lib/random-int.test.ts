import { describe, expect, it } from "vitest";
import { randomIntInclusive } from "./random-int";

describe("randomIntInclusive", () => {
  it("returns min when random is 0", () => {
    expect(randomIntInclusive(38, 127, () => 0)).toBe(38);
  });

  it("returns max when random is just below 1", () => {
    expect(randomIntInclusive(38, 127, () => 0.999999999)).toBe(127);
  });

  it("returns a mid-range value for a stubbed random", () => {
    expect(randomIntInclusive(38, 127, () => 0.5)).toBe(83);
  });

  it("stays within inclusive bounds with Math.random", () => {
    const value = randomIntInclusive(38, 127);
    expect(value).toBeGreaterThanOrEqual(38);
    expect(value).toBeLessThanOrEqual(127);
    expect(Number.isInteger(value)).toBe(true);
  });
});
