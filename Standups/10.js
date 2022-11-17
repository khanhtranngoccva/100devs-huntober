/**
 * An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.
 *
 * findDeletedNumber([1,2,3,4,5], [3,4,1,5]); // => 2
 * findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]); // => 5
 * findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]); // => 0
 *
 * @param {number[]} initial The initial array of numbers.
 * @param {number[]} remaining The number array after a number has been removed.
 * @returns {number} The missing number.
 */
function findDeletedNumber(initial, remaining) {
    // Create a set from the initial number array.
    const initialSet = new Set(initial);
    // Remove all numbers that are in the remaining array so that there is only 1 number left.
    for (let item of remaining) {
        initialSet.delete(item);
    }
    // Return the only number left in the set.
    return [...initialSet][0];
}

console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]));