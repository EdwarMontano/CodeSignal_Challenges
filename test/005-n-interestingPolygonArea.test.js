import { solution,solution2 } from "../src/005-n-interestingPolygonArea";

describe("TEST -> 005-polygonArea", () => {
  test("For n=1 the area poligon should be 1", () => {
    expect(solution(1)).toBe(1);
  });
  test("For n=2 the area poligon should be 5", () => {
    expect(solution(2)).toBe(5);
  });
  test("For n=3 the area poligon should be 13", () => {
    expect(solution(3)).toBe(13);
  });
  test("For n=4 the area poligon should be 25", () => {
    expect(solution(4)).toBe(25);
  });
  test("For n=5 the area poligon should be 41", () => {
    expect(solution(5)).toBe(41);
  });
  test("For n=6 the area poligon should be 61", () => {
    expect(solution(6)).toBe(61);
  });
  test("For n=7 the area poligon should be 85", () => {
    expect(solution(7)).toBe(85);
  });
  test("For n=11 the area poligon should be 'Invalid input parameters'", () => {
    expect(solution(11)).toBe("Invalid input parameters");
  });
  //  Analytic Solution
  test("For n=1 the area poligon should be 1", () => {
    expect(solution2(1)).toBe(1);
  });
  test("For n=2 the area poligon should be 5", () => {
    expect(solution2(2)).toBe(5);
  });
  test("For n=3 the area poligon should be 13", () => {
    expect(solution2(3)).toBe(13);
  });
  test("For n=4 the area poligon should be 25", () => {
    expect(solution2(4)).toBe(25);
  });
  test("For n=100001 the return 'Invalid input parameters' ", () => {
    expect(solution2(10001)).toBe("Invalid input parameters");
  });
});
