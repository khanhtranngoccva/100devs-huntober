/**
 * Return the average/mean of a given array, rounded down to the nearest integer.
 *
 * @param {number[]} arr An array of numbers and will never be empty.
 * @return {number} The average/mean value. Must be an integer.
 * @example ```js
 * getAverage([2,2,2,2]); // -> 2
 * getAverage([1,2,3,4,5,]); // -> 3
 * getAverage([1,1,1,1,1,1,1,2]); // -> 1
 * ```
 */
function getAverage(arr) {
    // Use arr.reduce to get the sum of the array.
    let sum = arr.reduce((acc, num) => acc + num, 0);
    // Set avg to sum / arr.length and return it.
    return Math.floor(sum / arr.length);
}

console.log(getAverage([2,2,2,2])); // -> 2
console.log(getAverage([1,2,3,4,5,])); // -> 3
console.log(getAverage([1,1,1,1,1,1,1,2])); // -> 1