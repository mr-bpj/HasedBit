function findTax(salary) {
    let tax;
    switch (true) {
        case (salary > 1500000):
            tax = salary * 0.3;
            break;
        case (salary > 1000000):
            tax = salary * 0.2;
            break;
        case (salary > 500000):
            tax = salary * 0.1;
            break;
        case (salary > 0):
            tax = 0;
            break;
        default:
            tax = 'Invalid salary amount';
    }
    return tax;
}

// Example usage:
console.log(findTax(450000));    // Output: 0 (0% tax on salary <= 500000)
console.log(findTax(800000));    // Output: 80000 (10% tax on salary between 500001 and 1000000)
console.log(findTax(1200000));   // Output: 240000 (20% tax on salary between 1000001 and 1500000)
console.log(findTax(2000000));   // Output: 600000 (30% tax on salary > 1500000)
