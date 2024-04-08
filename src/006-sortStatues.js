/**
 * Calculates the minimum number of additional statues needed for Ratiorg
 * to arrange his statues in such a way that each statue is exactly 1 size larger
 * than the previous one.
 *
 * Ratiorg received statues of different sizes as a present and wants to
 * arrange them from smallest to largest with each statue being bigger
 * than the previous one exactly by 1. This function helps to determine
 * the minimum number of additional statues Ratiorg needs to accomplish this.
 *
 * @example
 * // returns 3
 * solution([6, 2, 3, 8]);
 *
 * @param {number[]} statues - An array of distinct non-negative integers representing
 * the sizes of the statues Ratiorg has.
 * @return {number} - The minimal number of additional statues needed to ensure that
 * the collection contains every integer size from an interval [L, R] (for some L, R)
 * and no other sizes.
 *
 * @constraints
 * - Execution time limit: 4 seconds.
 * - Memory limit: 1GB.
 * - 1 ≤ statues.length ≤ 10.
 * - 0 ≤ statues[i] ≤ 20.
 */
export function solution(statues) {
  let results = [];
  const lengthArray = statues.length;
  statues.sort((a, b) => a - b);

  if (lengthArray >= 1 && lengthArray <= 10) {
    const statuesMin = statues.reduce(
      (min, valorActual) => (valorActual < min ? valorActual : min),
      statues[0],
    );
    const statuesMax = statues.reduce(
      (max, valorActual) => (valorActual > max ? valorActual : max),
      statues[0],
    );
    console.log(statuesMin, statuesMax);

    if (
      Number.isInteger(statuesMin) &&
      Number.isInteger(statuesMax) &&
      statuesMin >= 0 &&
      statuesMin <= 20 &&
      statuesMax >= 0 &&
      statuesMax <= 20
    ) {
      console.log("valid input parameters");
      const numbersArray = Array.from(
        { length: statuesMax - statuesMin + 1 },
        (_, index) => index + statuesMin,
      );
      console.log(numbersArray);
      results = numbersArray.filter((item) => !statues.includes(item)).length;
      console.log(results);
    } else {
      console.log("Invalid input parameters");
      results = "Error: Invalid input parameters";
    }
    // for (let i = 0; i < statues.length; i++) {
    // }
  } else {
    console.log("length Array is gather than 10 or less than 1");
    results = "Error:length Array is gather than 10 or less than 1";
  }
  console.log(results);
  return results;
}
