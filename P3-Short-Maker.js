function sortMaker(arr) {
    for (let element of arr) {
        if (element < 0) {
            return 'Invalid Input';
        } else {
            if (arr[0] > arr[1]) {
                return arr;
            } else if (arr[0] === arr[1]) {
                return 'equal';
            } else {
                return arr.reverse();
            }
        }
    }

}