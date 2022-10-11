import deepStrictEquals from "./01.mjs";

export default function shiftItem(array, target, offset) {
    const currentIndex = array.findIndex(candidate => deepStrictEquals(candidate, target));
    if (currentIndex === -1) {
        return false;
    }
    const newIndex = currentIndex + offset;
    if (newIndex < 0 || newIndex >= array.length) {
        return false;
    }
    const item = array.splice(currentIndex, 1)[0];
    array.splice(newIndex, 0, item);
    return true;
}
