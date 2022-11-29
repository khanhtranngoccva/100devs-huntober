/**
 * You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
 *
 * @example ```js
 * dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
 * dup(["kelless","keenness"]) = ["keles","kenes"].
 * dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
 * dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
 * dup(["kelless","keenness"]), ['keles','kenes'])
 * ```
 * @param {string[]} strings Strings will be lowercase only, no spaces.
 * @returns {string[]} Strings that have their duplicate letters removed.
 */
function dup(strings) {
    // Check each string by using map() with a callback.
    return strings.map(string => [...string]
        // Use the filter method for removing letters and a[i-1] to look at each letter's previous letter.
        .filter((char, index, array) => char !== array[index - 1]).join(""));
}