import { solution } from "../src/007-checkIncreasingSequence";

describe("TEST -> 007-checkIncreasingSequence", () => {
  test("The array [1, 3, 2, 1], should return false", () => {
    const statues = [1, 3, 2, 1];
    expect(solution(statues)).toBe(false);
  });
  test("The array [1, 3, 2], should return true", () => {
    const statues = [1, 3, 2];
    expect(solution(statues)).toBe(false);
  });
});
