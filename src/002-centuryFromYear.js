export function solution(year) {
  if (Number.isInteger(year) && year >= 1 && year <= 2005) {
    return Math.ceil(year / 100);
  }
}
