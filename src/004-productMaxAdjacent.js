/**
 * Finds the pair of adjacent elements in an array that has the largest product and returns that product.
 *
 * @example
 * // returns 21
 * solution([3, 6, -2, -5, 7, 3]);
 *
 * @param {number[]} inputArray - An array of integers containing at least two elements. Each element must be an integer between -1000 and 1000, inclusive. The length of the array must be between 2 and 10, inclusive.
 * @return {number} - The largest product of adjacent elements in `inputArray`.
 *
 * @constraints
 * - Execution time limit: 4 seconds.
 * - Memory limit: 1GB.
 */
export function solution(inputArray) {
  const lengthArray = inputArray.length;
  let results = -Infinity;
  if (lengthArray >= 2 && lengthArray <= 10) {
    for (let i = 0; i < inputArray.length; i++) {
      const productA = inputArray[i];
      const productB =
        i < inputArray.length - 1 ? inputArray[i + 1] : inputArray[i];
      if (
        Number.isInteger(productA) &&
        Number.isInteger(productB) &&
        productA >= -1000 &&
        productA <= 1000 &&
        productB >= -1000 &&
        productB <= 1000
      ) {
        console.log("valid input parameters");
      } else {
        console.log("Invalid input parameters");
        console.log(productA, productB);
        results = false;
        break;
      }
      if (i < inputArray.length - 1) {
        results = results < productA * productB ? productA * productB : results;
      }
    }
  } else {
    console.log("length Array is gather than 10 or less than 2");
    results = false;
  }
  console.log(results);
  return results;
}
