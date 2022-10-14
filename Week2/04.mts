import deepStrictEquals from "./01.mjs"


enum Direction {up = -1, down = 1}

export default function moveAlongColumn(array: any[][], targetValue: any, offset: Direction): any[][] {
    let x: number, y: number;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            if (deepStrictEquals(array[i][j], targetValue)) {
                y = i;
                x = j;
            }
        }
    }
    // Halt operation if the item is not found.
    if (x === undefined || y === undefined) {
        return array;
    }
    const newY = y + offset;
    // Nor if the move offset will put the item outside the array.
    if (newY >= array.length || newY < 0) {
        return array;
    }
    [array[newY][x], array[y][x]] = [array[y][x], array[newY][x]];
    return array;
}

const myGrid = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
];

console.log(moveAlongColumn(myGrid, "e", Direction.up));
console.log(moveAlongColumn(myGrid, "e", Direction.down));
console.log(moveAlongColumn(myGrid, "e", Direction.down));
