/**
 * Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
 *
 * Return your answer as a number.
 *
 * @example ```js
 * assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
 * assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
 * assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);
 * ```
 * @param {(number|string)[]} arr An array of numbers in their original or string form.
 * @returns {number} The sum of the sequence.
 */
function sumMix(arr) {
    // This iterates through all the items in the array.
    return arr.reduce((acc, num) => {
        // Convert the num variable to a number.
        return acc + +num;
    // Starting value at 0.
    }, 0);
}