function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Invalid!, Please Input String';
    } else {
        return string1.includes(string2);
    }
}

console.log(matchFinder('the quick', 'ick'));