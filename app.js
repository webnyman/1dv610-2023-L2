import { translateToRovarSprak, isRovarSprak, translateFromRovarsprak, countNumberOfCharacters, countNumberOfWords, countNumberOfConsonants, countNumberOfVowels } from './translator.js'

const text = 'Hej på dig, din lilla fuling!?!'
const rovarSprak = 'Hohejoj popå dodigog, dodinon lolilollola fofulolinongog!?!'
const numberOfCharacters = countNumberOfCharacters(text)
const numberOfWords = countNumberOfWords(text)
const numberOfVowels = countNumberOfVowels(text)
const numberOfConsonants = countNumberOfConsonants(text)
const isItRovarsprak = isRovarSprak(rovarSprak)

console.log(isItRovarsprak)
console.log(numberOfCharacters)
console.log(numberOfWords)
console.log(numberOfVowels)
console.log(numberOfConsonants)
console.log(translateToRovarSprak(text))
console.log(translateFromRovarsprak(rovarSprak))
// Expected output: Hohoj jo opop dopigog!
