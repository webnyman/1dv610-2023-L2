import { translateToRovarSprak, findSpecialCharactersAndTheirPosition, removeSpecialCharacters, countNumberOfCharacters, countNumberOfWords } from './translator.js'

const text = 'Hej på dig!'
const textWithoutSpecialCharacters = removeSpecialCharacters(text)
const numberOfCharacters = countNumberOfCharacters(text)
const numberOfWords = countNumberOfWords(text)
console.log(textWithoutSpecialCharacters)
console.log(numberOfCharacters)
console.log(numberOfWords)
// Expected output: Hohoj jo opop dopigog!
