/**
 * Given a string, return a new string that has transformed based on the input:
 *
 * Change case of every character, ie. lower case to upper case, upper case to lower case.
 * Reverse the order of words from the input.
 * Note: You will have to handle multiple spaces, and leading/trailing spaces.
 *
 *
 * @example ```js
 * "Example Input" ==> "iNPUT eXAMPLE"
 * ```
 * @param {string} str only contain English alphabet and spaces.
 * @returns {string} String with words reversed, opposite case.
 */
function transformStr(str) {
    // Split str by " " -> reverse -> join
    let wordReversed = str
        .split(" ").reverse().join(" ")
    // Convert to letter array -> map l lowercase if l === uppercase l, otherwise l uppercase.
        .split("").map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join("");
}

console.log(transformStr("Example Input"), "iNPUT eXAMPLE");
console.log(transformStr("Leon Noel"), "nOEL lEON");
