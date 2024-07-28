function arithmeticOperation(operation, num1, num2) {
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operation';
    }
    return result;
}

// Example usage:
console.log(arithmeticOperation('add', 10, 5));      // Output: 15
console.log(arithmeticOperation('subtract', 10, 5)); // Output: 5
console.log(arithmeticOperation('multiply', 10, 5)); // Output: 50
console.log(arithmeticOperation('divide', 10, 5));   // Output: 2
