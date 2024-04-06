import { solution } from "../src/004-productMaxAdjacent";

describe("TEST -> 004-productMaxAdjacent", () => {
  test("The array [3, 6, -2, -5, 7, 3], should return 21", () => {
    const arrayExample = [3, 6, -2, -5, 7, 3];
    expect(solution(arrayExample)).toBe(21);
  });
  test("The array [-1, -2], should return 2", () => {
    const arrayExample = [-1, -2];
    expect(solution(arrayExample)).toBe(2);
  });
  test("The array [5, 1, 2, 3, 1, 4], should return 6", () => {
    const arrayExample = [5, 1, 2, 3, 1, 4];
    expect(solution(arrayExample)).toBe(6);
  });
  test("The array [1, 2, 3, 0], should return 6", () => {
    const arrayExample = [1, 2, 3, 0];
    expect(solution(arrayExample)).toBe(6);
  });
  test("The array [1, 0, 1, 0, 1000], should return 0", () => {
    const arrayExample = [1, 0, 1, 0, 1000];
    expect(solution(arrayExample)).toBe(0);
  });
  test("The array [1], should return false", () => {
    const arrayExample = [1];
    expect(solution(arrayExample)).toBe(false);
  });
  test("The array [-2000,1001], should return false", () => {
    const arrayExample = [-2000, 1001];
    expect(solution(arrayExample)).toBe(false);
  });
});
