/**
 * Calculates the sum of two numbers.
 *
 * @example
 * // returns 3
 * solution(1, 2)
 *
 * @param {number} param1 - The first number. Must be an integer between -1000 and 1000, inclusive.
 * @param {number} param2 - The second number. Must be an integer between -1000 and 1000, inclusive.
 * @return {number} - The sum of param1 and param2.
 *
 * @constraints
 * - Execution time limit: 4 seconds
 * - Memory limit: 1GB
 */
export function solution(param1, param2) {
  if (
    Number.isInteger(param1) &&
    Number.isInteger(param2) &&
    param1 >= -1000 &&
    param1 <= 1000 &&
    param2 >= -1000 &&
    param2 <= 1000
  ) {
    return param1 + param2;
  } else {
    // throw new Error("Invalid input parameters");
    return "Invalid input parameters";
  }
}

// const param1 = 1;
// const param2 = 2;
// const x = solution(param1, param2);
// console.log(x);
