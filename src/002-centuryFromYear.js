/**
 * Returns the century of the given year.
 * 
 * The first century spans from the year 1 up to and including the year 100,
 * the second century from the year 101 up to and including the year 200, etc.
 * 
 * @example
 * // returns 20
 * solution(1905);
 * 
 * @example
 * // returns 17
 * solution(1700);
 * 
 * @param {number} year - A positive integer designating the year. Must be between 1 and 2005, inclusive.
 * @return {number} - The century of the given year.
 * 
 * @constraints
 * - Execution time limit: 4 seconds
 * - Memory limit: 1GB
 */
export function solution(year) {
  if (Number.isInteger(year) && year >= 1 && year <= 2005) {
    return Math.ceil(year / 100);
  }
}
