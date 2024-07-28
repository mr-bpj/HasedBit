function countWords(paragraph) {
    return paragraph.split(/\s+/).length;
}

let paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
let wordCount = countWords(paragraph);
console.log('Word count:', wordCount); // Output: 8
