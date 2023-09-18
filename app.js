import { translateToRovarSprak, findSpecialCharactersAndTheirPosition, removeSpecialCharacters } from './translator.js'

const text = 'Hej på dig!'
const textWithoutSpecialCharacters = removeSpecialCharacters(text)
console.log(textWithoutSpecialCharacters)
// Expected output: Hohoj jo opop dopigog!
