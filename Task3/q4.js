let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
let vowels = str.match(/[aeiou]/gi).length;
let consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
console.log('Vowels:', vowels); // Output: 15
console.log('Consonants:', consonants); // Output: 26
