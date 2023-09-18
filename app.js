import { translateToRovarSprak, findSpecialCharactersAndTheirPosition, removeSpecialCharacters } from './translator.js'
import { countNumberOfCharacters, countNumberOfWords, countNumberOfConsonants, countNumberOfVowels } from './translator.js'

const text = 'Hej på dig!'
const textWithoutSpecialCharacters = removeSpecialCharacters(text)
const numberOfCharacters = countNumberOfCharacters(text)
const numberOfWords = countNumberOfWords(text)
const numberOfVowels = countNumberOfVowels(text)
const numberOfConsonants = countNumberOfConsonants(text)

console.log(textWithoutSpecialCharacters)
console.log(numberOfCharacters)
console.log(numberOfWords)
console.log(numberOfVowels)
console.log(numberOfConsonants)
// Expected output: Hohoj jo opop dopigog!
