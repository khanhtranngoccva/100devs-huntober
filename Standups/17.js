class Counter extends Map {
    constructor(iterable) {
        super();
        for (let item of iterable) {
            this.set(item, this.get(item) + 1);
        }
    }

    get(item) {
        return super.get(item) ?? 0;
    }
}

/**
 * Your job is to figure out the index of which vowel is missing from a given string:
 *
 * A has an index of 0,
 * E has an index of 1,
 * I has an index of 2,
 * O has an index of 3,
 * U has an index of 4.
 * Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.
 *
 * @example ```js
 * absentVowel("John Doe hs seven red pples under his bsket");         // =>  0; missing: "a"
 * absentVowel("Bb Smith sent us six neatly arranged range bicycles"); // =>  3; missing: "o"
 * ```
 * @param x
 * @returns {number}
 */
function absentVowel(x){
    // Convert to a counter that tracks how many items are missing in the string.
    const counter = new Counter(x.toLowerCase());
    const testStr = "aeiou";
    // Iterate through every vowel in the array, and return the i-index if the corresponding vowel's count is 0.
    for (let i = 0; i < testStr.length; i++) {
        if (counter.get(testStr[i]) === 0) {
            return i;
        }
    }
}

/**
 * This is using the hinted method from Leon. Note that this has equal time complexity as the previous, but worse time because simply more operations are needed.
 * The situation changes if we extend testStr to as many letters as we want and allow it to be specified in a parameter.
 */
function absentVowel2(x) {
    const testStr = "aeiou";
    for (let i = 0; i < testStr.length; i++) {
        if (x.indexOf(testStr[i]) === -1) {
            return i;
        }
    }
}