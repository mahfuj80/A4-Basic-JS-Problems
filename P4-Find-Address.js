function findAddress(obj) {
    let result = [];
    for (let key in obj) {
        const value = obj[key];
        if (value.length > 0) {
            result.push(value);
        } else {
            if (typeof value === 'number') {
                result.push(value);
            } else {
                if (value.length < 1) {
                    result.push(",__")
                }
            }
        }
    }
    if (result.length === 3) {
        return finalResult = result[0] + "," + result[1] + "," + result[2];
    } else if (result.length === 2) {
        return finalResult = result[0] + "," + result[1] + "," + "__";
    }
}

const address = {
    street: 10,
    house: '13A'
}

console.log(findAddress(address));