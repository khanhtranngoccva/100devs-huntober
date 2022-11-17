/**
 * @example ```js
 * averageLength(['u', 'y']); // => ['u', 'y'] // average length is 1
 * averageLength(['aa', 'bbb', 'cccc']); // => ['aaa', 'bbb', 'ccc'] // average length is 3
 * averageLength(['aa', 'bb', 'ddd', 'eee']); // => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
 * ```
 * @param {string[]} arr An array of strings, each element consist of identical letters.
 * The input array's length > 1. If the average length is not an integer, use Math.round().
 * @returns {string[]} Return a new array, which will differ in that the length of each
 * string is equal to the average length of the strings of the previous array.
 */
function averageLength(arr) {
    const averageLength = Math.round(arr.reduce((acc, item) => acc + item.length, 0) / arr.length);
    return arr.map(item => item[0].repeat(averageLength))
}