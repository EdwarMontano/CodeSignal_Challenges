import { solution } from "../src/002-centuryFromYear.js";

describe("TEST -> 002-century", () => {
  test("The year 1905, It's 20th century ", () => {
    expect(solution(1905)).toBe(20);
  });
  test("The year 1700, It's 20th century ", () => {
    expect(solution(1700)).toBe(17);
  });
  test("The year 1988, It's 20th century ", () => {
    expect(solution(1988)).toBe(20);
  });
  test("The year 2000, It's 20th century ", () => {
    expect(solution(2000)).toBe(20);
  });
  test("The year 2001, It's 21st century ", () => {
    expect(solution(2001)).toBe(21);
  });
  test("The year 200, It's 2nd century ", () => {
    expect(solution(200)).toBe(2);
  });
  test("The year 374, It's 3rd century ", () => {
    expect(solution(374)).toBe(4);
  });
  test("The year 45, It's 1st century ", () => {
    expect(solution(45)).toBe(1);
  });
  test("The year 8, It's 1st century ", () => {
    expect(solution(8)).toBe(1);
  });
});
