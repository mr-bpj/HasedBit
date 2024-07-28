let string = 'INDIA';
let newArray = string.split('');
newArray.splice(2, 0, 'ONES');
let modifiedString = newArray.join('');
console.log(modifiedString); // Output: 'INDONESIA'
