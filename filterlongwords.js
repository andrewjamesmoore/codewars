function filterLongWords(sentence, n) {
const words = sentence.split(" ");
const result = words.filter(word => word.length > n);
return result;
}
