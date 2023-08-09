function findAddress(obj) {
    let keys = [];
    let values = [];
    for (let key in obj) {
        keys.push(key);
    }
    if (keys.includes('street') && keys.includes('house') && keys.includes('society')) {
        values.push(obj.street, obj.house, obj.society);
        return values[0] + "," + values[1] + ',' + values[2];
    } else if (keys.includes('street') && !keys.includes('house') && keys.includes('society')) {
        values.push(obj.street, obj.society);
        return values[0] + "," + '__' + ',' + values[1];
    } else if (!keys.includes('street') && !keys.includes('house') && keys.includes('society')) {
        values.push(obj.society);
        return "__" + "," + '__' + ',' + values[0];
    } else if (keys.includes('street') && !keys.includes('house') && !keys.includes('society')) {
        values.push(obj.street);
        return values[0] + "," + '__' + ',' + '__';
    } else if (!keys.includes('street') && !keys.includes('house') && !keys.includes('society')) {
        return '__' + "," + '__' + ',' + '__';
    }
}

const address = {
    street: 10,
    house: '15A',
    society: 'Earth Perfect'
}
console.log(findAddress(address));