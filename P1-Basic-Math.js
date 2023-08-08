function cubeNumber(number) {
    if (typeof number !== 'number') {
        return 'Invalid !, Please Enter A Valid Number.'
    } else {
        const result = number * number * number;
        return result;
    }
}