function reverseString(str) {
    return str.split('').reverse().join('');
}

let input = 'Hello';
let reversed = reverseString(input);
console.log(reversed); // Output: 'olleH'
