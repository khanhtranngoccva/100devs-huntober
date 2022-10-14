function genRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function genASCII() {
    return String.fromCharCode(genRandom(32, 128));
}

const k1 = {
    '0': 'O',
    '5': 'S',
    '1': 'I',
    '6': 'G',
    '2': 'Z',
    '7': 'L',
    '3': 'E',
    '8': 'B',
    '4': 'h',
    '9': 'q',
};

const k2 = {};
for (let [key, val] of Object.entries(k1)) {
    k2[val] = key;
}

function _swapLetter(c) {
    return String.fromCharCode(25 - c.charCodeAt(0) + 2 * 97);
}

function f7(input) {
    return [...input].map(c => {
        if (/[a-z]/.test(c)) {
            return _swapLetter(c).toUpperCase();
        } else if (/[A-Z]/.test(c)) {
            return _swapLetter(c.toLowerCase());
        } else {
            return c;
        }
    }).join("");
}

function f6(input, deleteInterval=3) {
    const result = [...input].filter((c, index) => (index + 1) % deleteInterval !== 0);
    return result.join("");
}

function encode_f6(output, interval=3) {
    let input = [];
    for (let i = 0; i < output.length; i++) {
        input.push(output[i]);
        if ((i + 1) % (interval - 1) === 0) {
            input.push(genASCII());
        }
    }
    return input.join("");
}

function f4(input) {
    return [...input].reverse().join('');
}

function f3(input, charset="Space") {
    return [...input].map(c => charset.includes(c) ? " " : c).join("");
}

function encode_f3(input, charset="Space") {
    return [...input].map(c => c === " " ? charset[genRandom(0, charset.length)] : c).join("");
}

function f1(input) {
    return [...input].map(c => k1[c] ?? k2[c] ?? c).join("");
}

const encodingProcedures = [
    [f7],
    [encode_f6, 3],
    [f4],
    [encode_f3, "Space"],
    [f1],
];

const decodingProcedures = [
    [f1],
    [f3, "Space"],
    [f4],
    [f6, 3],
    [f7],
];

function encode(input) {
    for (let [func, ...args] of encodingProcedures) {
        input = func(input, ...args);
    }
    return input;

}

function decode(input) {
    for (let [func, ...args] of decodingProcedures) {
        input = func(input, ...args);
    }
    return input;
}

let target = "HUNTOBER 1 week down. #100Devs WE GO GET!!";
let encoded = encode(target);

console.log(encoded);
console.log(decode(encoded));
