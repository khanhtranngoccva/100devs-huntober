/**
 * Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
 * If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
 * All inputs will be valid.
 *
 * @example ```js
 * last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
 * last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
 * last('take me to semynak'), ['take', 'me', 'semynak', 'to']
 * ```
 * @param {string} x A string with only alphabetic characters.
 * @return {string[]} Words sorted by the letter.
 */
function last(x) {
    // Split and sort.
    return x.split(" ").sort((a, b) => {
        // Fetch the last letter in both strings and compare them using ASCII codes.
        return a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1);
        // OR alternatively, use localeCompare which is a lot more robust.
        return a.slice(-1).localeCompare(b.slice(-1));
    });
}

console.log(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'])
console.log(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);