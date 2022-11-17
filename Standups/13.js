/**
 * You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
 *
 * @example ```js
 * sortArray([7, 1]); // =>  [1, 7]
 * sortArray([5, 8, 6, 3, 4]); // =>  [3, 8, 6, 5, 4]
 * sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]); // => [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
 *
 * sortArray([5, 3, 2, 8, 1, 4]); // => [1, 3, 2, 8, 5, 4]
 * sortArray([5, 3, 1, 8, 0]); // => [1, 3, 5, 8, 0]
 * ```
 */
function sortArray(arr) {
    // Filter and sort odd numbers.
    const oddNums = arr.filter(x => x % 2 !== 0).sort((a, b) => b - a);
    // If the number is even, then keep it the same. Otherwise, remove the first odd number from the array and put it into the position.
    return arr.map(n => n % 2 === 0 ? n : oddNums.pop());
}

console.log(sortArray([7, 1])); // =>  [1, 7]
console.log(sortArray([5, 8, 6, 3, 4])); // =>  [3, 8, 6, 5, 4]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // => [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
console.log(sortArray([5, 3, 2, 8, 1, 4])); // => [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])); // => [1, 3, 5, 8, 0]