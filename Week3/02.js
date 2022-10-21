function dateHelper(dateA, dateB) {
    const curDate = new Date();
    const dateDifferenceA = Math.ceil(Math.abs(curDate.getTime() - dateA.getTime()) / (1000 * 60 * 60 * 24));
    const dateDifferenceB = Math.ceil(Math.abs(curDate.getTime() - dateB.getTime()) / (1000 * 60 * 60 * 24));
    const dateStringA = dateA.toDateString();
    const dateStringB = dateB.toDateString();
    return {
        curDate,
        // The date difference between today and the selected day. For example, 2 dates can be 0, 1, 2... days apart.
        dateDifferenceA,
        dateDifferenceB,
        dateStringA,
        dateStringB,
    };
}

function compareTimeUntilDate(dateA, dateB) {
    const {
        dateDifferenceA,
        dateDifferenceB,
        dateStringA,
        dateStringB,
    } = dateHelper(dateA, dateB);
    if (dateDifferenceA * 2 <= dateDifferenceB) {
        return `If you thought ${dateStringA} was a long wait, wait until you see how long it is until ${dateStringB}.`
    } else if (dateDifferenceA < dateDifferenceB) {
        return `Don't worry, ${dateStringB} isn't too much farther away than ${dateStringA} in the scheme of things.`
    } else if (dateDifferenceA === dateDifferenceB) {
        return `They're the same number of days away!`
    } else {
        return `You know ${dateStringA} is closer, right?`
    }
}

function compareRelativeTimeUntilDate(dateA, dateB) {
    const {
        dateDifferenceA,
        dateDifferenceB,
        dateStringA,
        dateStringB,
    } = dateHelper(dateA, dateB);
    if (dateDifferenceA < dateDifferenceB) {
        const x = Math.floor(dateDifferenceB / dateDifferenceA);
        return `Looks like ${dateStringB} is ${x} times farther away than ${dateStringA}.`
    } else if (dateDifferenceA === dateDifferenceB) {
        return `Same exact date there, mate.`
    } else {
        const x = Math.floor(dateDifferenceA / dateDifferenceB)
        return `Looks like ${dateStringA} is ${x} times farther away than ${dateStringB}.`
    }
}

function timeUntilDates(dateA, dateB) {
    const {
        dateDifferenceA,
        dateDifferenceB,
        dateStringA,
        dateStringB,
    } = dateHelper(dateA, dateB);
    const diffBetweenAAndB = dateDifferenceB - dateDifferenceA
    return `You have ${dateDifferenceA} days left until ${dateStringA}, and ${dateDifferenceB} days left until ${dateStringB}. There are ${diffBetweenAAndB} days between them.`
}

// feel free to plug these example dates into your functions
const dateA = new Date(2022, 9, 26);
const dateB = new Date(2022, 11, 25);

console.log(compareTimeUntilDate(dateA, dateB));