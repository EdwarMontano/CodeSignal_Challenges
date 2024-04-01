/**
 * Checks if a given string is a palindrome.
 *
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
 *
 * @example
 * // returns true
 * solution("aabaa");
 *
 * @example
 * // returns false
 * solution("abac");
 *
 * @example
 * // returns true
 * solution("a");
 *
 * @param {string} inputString - A non-empty string consisting of lowercase characters. The length of the string is guaranteed to be between 1 and 10^5.
 * @return {boolean} - Returns true if `inputString` is a palindrome, false otherwise.
 *
 * @constraints
 * - Execution time limit: 4 seconds
 * - Memory limit: 1GB
 */
export function solution(inputString) {
  if (inputString.length >= 1 && inputString.length <= Math.pow(10, 5)) {
    const reverseWord = Array.from(inputString.toLowerCase())
      .reverse()
      .join("");
    return inputString.toLowerCase() === reverseWord;
  } else {
    return false;
  }
}
// console.log(solution("aaBaa"))
