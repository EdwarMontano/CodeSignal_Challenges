import { solution } from "../src/006-sortStatues";

describe("TEST -> 006-sortStatues", () => {
  test("The array [6, 2, 3, 8], should return [4, 5, 7]", () => {
    const statues = [6, 2, 3, 8];
    expect(solution(statues)).toBe(3);
  });
  test("The array [0, 3], should return [1, 2]", () => {
    const statues = [0, 3];
    expect(solution(statues)).toBe(2);
  });
  test("The array [5, 4, 6], should return []", () => {
    const statues = [5, 4, 6];
    expect(solution(statues)).toBe(0);
  });
  test("The array [6, 3], should return [4, 5]", () => {
    const statues = [6, 3];
    expect(solution(statues)).toBe(2);
  });
  test("The array [1], should return []", () => {
    const statues = [1];
    expect(solution(statues)).toBe(0);
  });
  test("The array [-1], should return []", () => {
    const statues = [-1];
    expect(solution(statues)).toBe("Error: Invalid input parameters");
  });
  test("The array [100], should return []", () => {
    const statues = [100];
    expect(solution(statues)).toBe("Error: Invalid input parameters");
  });
  test("The array [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11], should return 'ERROR'", () => {
    const statues = [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11];
    expect(solution(statues)).toBe(
      "Error:length Array is gather than 10 or less than 1",
    );
  });
});
