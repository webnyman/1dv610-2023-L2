import * as rovarSprakLibrary from './translator.js'

const text = 'Hej på dig, din gamla sill!?!'
const rovarSprak = 'Hohejoj popå dodigog, dodinon lolilollola fofulolinongog!?!'

console.log(rovarSprakLibrary.isRovarSprak(rovarSprak))
console.log(rovarSprakLibrary.countNumberOfCharacters(text))
console.log(rovarSprakLibrary.countNumberOfWords(text))
console.log(rovarSprakLibrary.countNumberOfVowels(text))
console.log(rovarSprakLibrary.countNumberOfConsonants(text))
console.log(rovarSprakLibrary.translateToRovarSprak(text))
console.log(rovarSprakLibrary.translateFromRovarsprak(rovarSprak))
console.log(rovarSprakLibrary.reverseString(text))
console.log(rovarSprakLibrary.encodeToROT13(text))
console.log(rovarSprakLibrary.decodeFromROT13(rovarSprakLibrary.encodeToROT13(text)))
console.log(rovarSprakLibrary.translateToFikonSprak())
console.log(rovarSprakLibrary.translateFromFikonSprak())
console.log(rovarSprakLibrary.isFikonSprak('fiffe kakon'))
// Expected output: Hohoj jo opop dopigog!
