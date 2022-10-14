import deepStrictEquals from "./01.mjs";
export default function moveAlongColumn(array, targetValue, offset) {
    var _a;
    var x, y;
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[0].length; j++) {
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
    var newY = y + offset;
    // Nor if the move offset will put the item outside the array.
    if (newY >= array.length || newY < 0) {
        return array;
    }
    _a = [array[y][x], array[newY][x]], array[newY][x] = _a[0], array[y][x] = _a[1];
    return array;
}
var myGrid = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
];
console.log(moveAlongColumn(myGrid, "e", 1));
//# sourceMappingURL=04.mjs.map