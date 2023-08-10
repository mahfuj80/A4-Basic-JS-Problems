function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "Invalid, Please give me valid array."
    } else {
        let sum = 0;
        for (let value of changeArray) {
            sum = sum + value;
        }
        return sum >= totalDue;
    }
}

const arr = [2, 3, 4];
console.log(canPay(arr, 20));