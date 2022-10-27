/**
 * Given an array of integers , Find the Nth smallest element in this array of integers.
 *
 * @param {number[]} input An array with at least 3 elements.
 * @param {number} n The input to get the n-lowest number.
 * Array/list size is at least 3.
 * Array/list's numbers could be a mixture of positives , negatives and zeros.
 * Repetition in array/list's numbers could occur , so don't Remove Duplications.
 *
 * @example ```js
 * nthSmallest([3,1,2], 2); // => 2
 * nthSmallest([15,20,7,10,4,3], 3); // => 7
 * nthSmallest([15,20,7,10,4,3], 3); // => 7
 * nthSmallest([177,225,243,-169,-12,-5,2,92], 5); // => 92
 * ```
 */
function nthSmallest(input, n) {
    return input
        // Sort the array in ascending order.
        .sort((x, y) => x - y)
        // Get the n - 1 index of the array, corresponding to the nth element.
        [n - 1];
}

console.log(nthSmallest([3,1,2], 2)); // => 2
console.log(nthSmallest([15,20,7,10,4,3], 3)); // => 7