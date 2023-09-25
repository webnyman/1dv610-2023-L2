import { RovarSprak } from './Rovarsprak.js'
import { Rot13 } from './Rot13.js'
import { Fikonsprak } from './Fikonsprak.js'

const rovarSprakLibrary = new RovarSprak()
const rot13Library = new Rot13()
const fikonSprakLibrary = new Fikonsprak()

const text = 'Hej på dig!'
const text2 = 'Kaffe'
const text3 = 'fiffe kakon'
console.log(rovarSprakLibrary.translateToRovarSprak(text))
console.log(rovarSprakLibrary.translateFromRovarsprak(rovarSprakLibrary.translateToRovarSprak(text)))
console.log(rot13Library.encodeToROT13(text))
console.log(rot13Library.decodeFromROT13(rot13Library.encodeToROT13(text)))
console.log(fikonSprakLibrary.translateToFikonSprak(text2))
console.log(fikonSprakLibrary.translateFromFikonSprak(text3))
