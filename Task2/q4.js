function sumOfProductsDigits(n1, n2) {
    let sum = 0;
    let num1 = n1.toString();
    let num2 = n2.toString();
    
    // Iterate through digits of num1 and num2
    for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
        let digit1 = parseInt(num1[num1.length - 1 - i]) || 0; // Get digits from right to left
        let digit2 = parseInt(num2[num2.length - 1 - i]) || 0;
        sum += digit1 * digit2;
    }
    
    return sum;
}

// Example usage:
console.log(sumOfProductsDigits(6, 34));    // Output: 24 (6*4 + 0*3)
console.log(sumOfProductsDigits(123, 45));  // Output: 14 (3*5 + 2*4 + 1*0)
