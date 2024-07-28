function correctFn(sentence, wrong, correct) {
    let regex = new RegExp(wrong, 'gi');
    let correctedSentence = sentence.replace(regex, correct);
    return correctedSentence;
}

let sentence = 'Thes is the wrang sentence.';
let correctedSentence = correctFn(sentence, 'Thes', 'This');
console.log(correctedSentence); // Output: 'This is the wrong sentence.'
