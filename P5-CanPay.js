function canPay(changeArray, totalDue) {
    if (changeArray === []) {
        return "Invalid, Please give me valid array."
    } else {
        let sum = 0;
        for (let value of changeArray) {
            sum = sum + value;
        }
        if (sum > totalDue) {
            return true;
        } else {
            return false;
        }
    }
}

const arr = [1, 3, 5];
console.log(canPay(arr, 10));