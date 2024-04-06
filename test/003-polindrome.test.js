import { solution } from "../src/003-polindrome.js";

describe("TEST -> 003-polindrome", () => {
  test("The word 'aabaa', should be true.", () => {
    expect(solution("aabaa")).toBe(true);
  });
  test("The word 'a', should be false.", () => {
    expect(solution("a")).toBe(true);
  });
  test("The word 'az', should be false.", () => {
    expect(solution("az")).toBe(false);
  });
  test("The word 'abacaba', should be false.", () => {
    expect(solution("abacaba")).toBe(true);
  });
  test("The word 'z', should be false.", () => {
    expect(solution("z")).toBe(true);
  });
  test("The word 'aaabaaaa', should be false.", () => {
    expect(solution("aaabaaaa")).toBe(false);
  });
  test("The word 'zzzazzazz', should be false.", () => {
    expect(solution("zzzazzazz")).toBe(false);
  });
  test("The word 'hlbeeykoqqqokyeeblh', should be false.", () => {
    expect(solution("hlbeeykoqqqokyeeblh")).toBe(true);
  });
  test("The word '', should be false.", () => {
    expect(solution("")).toBe(false);
  });
});
