function reverseWords(sentence) {
    let words = sentence.split(" ");

    let reversedWords = words.map(word => reverseWord(word));

    let reversedSentence = reversedWords.join(" ");

    return reversedSentence;
}

function reverseWord(word) {
    return word.split("").reverse().join("");
}


let inputSentence = "Hello world";
let reversed = reverseWords(inputSentence);
console.log(reversed);
