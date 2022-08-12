function positiveArray(number) {
    let positive = [];
    for (let i = 0; i < number.length; i++) {
        const num = number[i];
        if (num >= 0) {
            positive.push(num);
        }
        else if (num < 0) {
            break;
        }
    }
    return positive;
}

const array = positiveArray([2, 5, -1, 3, 4]);
console.log(array);