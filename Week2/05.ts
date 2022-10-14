function doubleShuffle(array: any[][]): any[][] {
    let flattened = [].concat(...array);
    flattened.sort(() => Math.random() - 0.5);
    let rowLength = array[0].length;
    for (let i = 0; i < flattened.length; i++) {
        array[Math.floor(i / rowLength)][i % rowLength] = flattened[i];
    }
    return array;
}

// Time complexity: O(n)
function betterShuffle(array: any[]): any[] {
    let arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++) {
        const j = Math.floor(Math.random() * arrayLength);
        [array[j], array[i]] = [array[i], array[j]];
    }
    return array;
}

// Time complexity: O(n)
function betterDoubleShuffle(array: any[][]): any[][] {
    let flattened = [].concat(...array);
    betterShuffle(flattened);
    let rowLength = array[0].length;
    for (let i = 0; i < flattened.length; i++) {
        array[Math.floor(i / rowLength)][i % rowLength] = flattened[i];
    }
    return array;
}


let myArray = [[1,2,3],[4,5,6],[7,8,9]];
console.log(betterDoubleShuffle(myArray));