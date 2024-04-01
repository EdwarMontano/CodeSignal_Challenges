import { solution } from "../src/001-suma.js";

// console.assert(solution(1, 2) === 3, "Suma of 1 and 2 should be 3");

describe("001-suma", () => {
  test("Suma of 1 and 2 should be 3", () => {
    expect(solution(1, 2)).toBe(3);
  });
  test("Suma of 1 like string should be Invalid input parameters", () => {
    expect(solution("1", 2)).toBe("Invalid input parameters");
  });
});
