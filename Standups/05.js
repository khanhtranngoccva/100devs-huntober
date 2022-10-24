/**
 * Given an array of digital numbers, return a new array
 * of length number containing the last even numbers
 * from the original array (in the same order). The
 * original array will be not empty and will
 * contain at least "number" even numbers.

 @example ```js
 nEvenNums([1, 2, 3, 4, 5, 6, 7, 8, 9], 3); => [4, 6, 8]
 nEvenNums([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2); => [-8, 26]
 nEvenNums([6, -25, 3, 7, 5, 5, 7, -3, 23], 1); => [6]
 ```
 @param {number[]} arr A non-empty array of numbers.
 @param {number} n How many numbers to slice.
 @returns {number[]} The last even numbers in the array.
 */
function nEvenNums(arr, n) {
    // Filter out odd numbers (or select even numbers)
    // Get n last nums from the filtered array with negative slicing.
    return arr.filter(x => x % 2 === 0).slice(-n)
}

// You also need to ask about their code style (do they use ES6 or 1 liners, for example), or\
// if are there any challenge conditions like, whether methods are banned.
// Also try to create multiple solution tiers. One for brute-force, one for optimized.
const nEvenNums = (arr, n) => arr.filter(x => x % 2 === 0).slice(-n)