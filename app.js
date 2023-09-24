import { RovarSprak } from './Rovarsprak.js'
import { Rot13 } from './Rot13.js'
import { Fikonsprak } from './Fikonsprak.js'

const rovarSprakLibrary = new RovarSprak()
const rot13Library = new Rot13()
const fikonSprak = new Fikonsprak()

const text = 'Hej på dig!'
const text2 = 'Kaffe'
const text3 = 'fiffe kakon'
console.log(rovarSprakLibrary.translateToRovarSprak(text))
console.log(rovarSprakLibrary.translateFromRovarsprak(rovarSprakLibrary.translateToRovarSprak(text)))
console.log(rot13Library.encodeToROT13(text))
console.log(fikonSprak.translateToFikonSprak(text2))
console.log(fikonSprak.translateFromFikonSprak(text3))
// const rovarSprak = 'Hohejoj popå dodigog, dodinon lolilollola fofulolinongog!?!'

// console.log(rovarSprakLibrary.isRovarSprak(rovarSprak))
// console.log(rovarSprakLibrary.countNumberOfCharacters(text))
// console.log(rovarSprakLibrary.countNumberOfWords(text))
// console.log(rovarSprakLibrary.countNumberOfVowels(text))
// console.log(rovarSprakLibrary.countNumberOfConsonants(text))
// console.log(rovarSprakLibrary.translateToRovarSprak(text))
// console.log(rovarSprakLibrary.translateFromRovarsprak(rovarSprak))
// console.log(rovarSprakLibrary.reverseString(text))
// console.log(rovarSprakLibrary.encodeToROT13(text))
// console.log(rovarSprakLibrary.decodeFromROT13(rovarSprakLibrary.encodeToROT13(text)))
// console.log(rovarSprakLibrary.translateToFikonSprak())
// console.log(rovarSprakLibrary.translateFromFikonSprak())
// console.log(rovarSprakLibrary.isFikonSprak('fiffe kakon'))
// Expected output: Hohoj jo opop dopigog!
