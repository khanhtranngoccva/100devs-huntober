// Time complexity: O(n)
function betterShuffle(array) {
    let arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++) {
        const j = Math.floor(Math.random() * arrayLength);
        [array[j], array[i]] = [array[i], array[j]];
    }
    return array;
}

// Time complexity: O(n)
export default function betterDoubleShuffle(array) {
    let flattened = [].concat(...array);
    betterShuffle(flattened);
    let rowLength = array[0].length;
    for (let i = 0; i < flattened.length; i++) {
        array[Math.floor(i / rowLength)][i % rowLength] = flattened[i];
    }
    return array;
}