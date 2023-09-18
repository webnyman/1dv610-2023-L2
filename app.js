import { translateToRovarSprak, findSpecialCharactersAndTheirPosition, removeSpecialCharacters, countNumberOfCharacters } from './translator.js'

const text = 'Hej på dig!'
const textWithoutSpecialCharacters = removeSpecialCharacters(text)
const numberOfCharacters = countNumberOfCharacters(text)
console.log(textWithoutSpecialCharacters)
console.log(numberOfCharacters)
// Expected output: Hohoj jo opop dopigog!
