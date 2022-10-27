/**
 * The goal of this exercise is to convert a string to a new string where
 * each character in the new string is "(" if that character appears only
 * once in the original string, or ")" if that character appears more than
 * once in the original string. Ignore capitalization when determining if a character is a duplicate.
 *
 * @param {string} input An arbitrary string.
 * @returns {string} A string from the input that matches the conditions specified.
 * @example
 * ```js
 * dupeEncoder("din");     // => "((("
 * dupeEncoder("recede");  // => "()()()"
 * dupeEncoder("Success"); // => ")())())"
 * dupeEncoder("(( @");    // => "))(("
 * ```
 */
function dupeEncoder(input) {
    // Convert the string to lowercase.
    return input.toLowerCase()
    // Convert it into an array.
        .split("")
    // Transform every character into ( or ) depending on the indexOf and lastIndexOf.
        .map((char, index, array) => array.indexOf(char) === array.lastIndexOf(char) ? "(" : ")")
    // Then join the array.
        .join("");
}

console.log(dupeEncoder("recede"));     // => "((("

// Better solution with a Hashmap! (O(n)). The old solution will flop badly against huge libraries of text.

// Implement a quick ES6 counter.
class Counter extends Map {
    constructor(iterable) {
        if (!new.target) {
            return new Counter(iterable);
        }
        super();
        for (let item of iterable) {
            super.set(item, super.get(item + 1));
        }
    }

    get(value) {
        return super.get(value) ?? 0;
    }
}

function dupeEncoder2(input) {
    // Convert the string to lowercase. This operation is O(n).
    const lowerCase = input.toLowerCase();
    // We create a counter. This operation is O(n).
    const counter = new Counter(lowerCase);
    // Second pass. We use the count of the character in a string,
    return lowerCase
        // Convert it into an array.
        .split("")
        // Transform every character into ( or ) depending on the indexOf and lastIndexOf.
        .map(char => counter.get(char) <= 1 ? "(" : ")")
        // Then join the array.
        .join("");
}

console.log(dupeEncoder("recede"));