/**
 * Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:
 *
 * @example ```js
 * dup("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"); // -> "alpha beta gamma delta alpha beta gamma delta"
 * ```
 * @param {string} words Lowercase words separated by whitespaces.
 * @returns {string} A list of words that has consecutive duplicates removed, as a space-delimited string.
 */
function dup(words) {
    return words.split(" ").filter((string, index, array) => string !== array[index - 1]).join(" ");
}