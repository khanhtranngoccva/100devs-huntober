function customDeepStrictEquals(constructor, callback) {
    deepStrictEquals.specialConstructors ??= new Map();
    deepStrictEquals.specialConstructors.set(constructor, callback);
}

export default function deepStrictEquals(actual, expected) {
    // Strict equal.
    if (actual === expected) {
        return true;
    }
    if (typeof actual !== typeof expected) {
        return false;
    }
    deepStrictEquals.specialConstructors ??= new Map();
    for (let constructor of deepStrictEquals.specialConstructors.keys()) {
        const actualCheck = actual instanceof constructor;
        const expectedCheck = expected instanceof constructor;
        if (actualCheck && expectedCheck) {
            const comparisonFunction = deepStrictEquals.specialConstructors.get(constructor);
            return comparisonFunction(actual, expected);
        }
        if (actualCheck ^ expectedCheck) {
            return false;
        }
    }
    // Deals with most mutable values. Also works with arrays because it's technically an ordinary object, and you can
    // add properties to it as like an object.
    if (typeof actual === "object" && typeof expected === "object") {
        const actualKeys = Object.keys(actual);
        const expectedKeys = Object.keys(expected);
        if (actual.constructor !== expected.constructor) {
            return false;
        }
        if (actualKeys.length !== expectedKeys.length) {
            return false;
        }
        for (let actualKey of Object.keys(actual)) {
            const actualPropValue = actual[actualKey];
            const expectedPropValue = expected[actualKey];
            if (!(deepStrictEquals(actualPropValue, expectedPropValue))) {
                return false;
            }
        }
        return true;
    }
    // You can't really check some mutable values like functions, so false is the default fallback value.
    return false;
}

customDeepStrictEquals(Date, (actual, expected) => {
    return actual.getTime() === expected.getTime();
});
customDeepStrictEquals(RegExp, (actual, expected) => {
    return actual.toString() === expected.toString();
});
customDeepStrictEquals(Map, (actual, expected) => {
    if (actual.size !== expected.size) {
        return false;
    }
    const actualKeys = [...actual.keys()].sort();
    const expectedKeys = [...expected.keys()].sort();
    for (let i = 0; i < actualKeys.length; i++) {
        const [actualKey, expectedKey] = [actualKeys[i], expectedKeys[i]];
        const keyComparisonResult = deepStrictEquals(actualKey, expectedKey);
        if (!keyComparisonResult) {
            return false;
        }
        const valueComparisonResult = deepStrictEquals(actual.get(actualKey), expected.get(expectedKey));
        if (!valueComparisonResult) {
            return false;
        }
    }
    return true;
});
customDeepStrictEquals(Set, (actual, expected) => {
    if (actual.size !== expected.size) {
        return false;
    }
    const actualKeys = [...actual.keys()].sort();
    const expectedKeys = [...expected.keys()].sort();
    for (let i = 0; i < actualKeys.length; i++) {
        const [actualKey, expectedKey] = [actualKeys[i], expectedKeys[i]];
        const keyComparisonResult = deepStrictEquals(actualKey, expectedKey);
        if (!keyComparisonResult) {
            return false;
        }
    }
    return true;
});

const a = new Map([
    [1, 2],
    [new Map(), new Set([1, 2, [3, 4, new Date()]])],
]);


const b = new Map([
    [new Map(), new Set([1, 2, [3, 4, new Date()]])],
    [1, 2],
]);