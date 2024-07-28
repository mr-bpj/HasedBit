function repeatedSumDigits(num) {
    if (num < 10) {
        return num;
    }
    let sum = 0;
    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return repeatedSumDigits(sum);
}

let number = 456;
let result = repeatedSumDigits(number);
console.log(result); // Output: 6
