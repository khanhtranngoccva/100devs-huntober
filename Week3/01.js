function myExampleFunction(arr) {
    if (arr === null || arr.length === 0 || arr[0].length === 0) {
        return arr;
    }
    if (arr.length >= 10) {
        arr.push('maximum');
    } else if (arr[0] === 'must be maximum') {
        arr.push('failure');
    } else if (arr[0] === 'flexible') {
        arr.push('success')
    }
    return arr;
}