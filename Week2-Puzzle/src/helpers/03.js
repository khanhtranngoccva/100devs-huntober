export default function moveItems(input) {
    return input.sort((w1, w2) => {
        const w1IncludesA = w1.includes("a");
        const w2IncludesA = w2.includes("a");
        if (w1IncludesA && !w2IncludesA) {
            return -1;
        } else if (w2IncludesA && !w1IncludesA) {
            return 1;
        }
        const w1lengthGT3 = w1.length > 3;
        const w2lengthGT3 = w2.length > 3;
        if (w1lengthGT3 && !w2lengthGT3) {
            return 1;
        } else if (w2lengthGT3 && !w1lengthGT3) {
            return -1;
        }
        return 0;
    });
}