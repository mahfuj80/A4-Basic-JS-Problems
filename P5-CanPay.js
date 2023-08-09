function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
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

const arr = [20, 3, 4];
console.log(canPay(arr, 20));