/**
 * You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
 * The input to the function will be an array of three distinct numbers.
 *
 *
 * @example
 * For example: gimme([2, 3, 1]) => 0
 * 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
 *
 * Another example (just to make sure it is clear):
 *
 * gimme([5, 10, 14]) => 1
 * 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
 * @param {number[]} arr A triplet of 3 distinct numbers
 * @returns {number} The index of 3 criteria.
 */
function gimme(arr) {
    // Clone and sort to make the middle element fall into the right position, and index into the array to get it.
    // And get the index of the element in the original array.
    return arr.indexOf([...arr].sort((x, y) => x - y)[1]);
}

console.log(gimme([2, 3, 1]), 0);
console.log(gimme([5, 10, 14]), 1);