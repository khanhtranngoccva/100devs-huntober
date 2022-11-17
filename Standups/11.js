/**
 * Implement a difference function, which subtracts one list from another and returns the result.
 * It should remove all values from list a, which are present in list b keeping their order.
 * If a value is present in b, all of its occurrences must be removed from the other:
 *
 * @example ```js
 * arrayDiff([1,2,2,2,3],[2]) == [1,3]
 * arrayDiff([1,2],[1]) == [2]
 * arrayDiff([], [4,5]), [], "a was [], b was [4,5]"
 * arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"
 * arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"
 * ```
 * @param {any[]} arr An array consisting of arbitrary items.
 * @param {any[]} toRemove Items to be purged from the array.
 * @returns {any[]} A clone of the `arr` array without any items in the
 */
function arrayDiff(arr, toRemove) {
    const removeSet = new Set(toRemove);
    return arr.filter(item => !removeSet.has(item));
}