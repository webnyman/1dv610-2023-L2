import { Fikonsprak } from './src/Fikonsprak.js'
import { Rot13 } from './src/Rot13.js'
import { Rovarsprak } from './src/Rovarsprak.js'

const rovarSprakLibrary = new Rovarsprak()
const rot13Library = new Rot13()
const fikonSprakLibrary = new Fikonsprak()

const cypher = {
  fikonsprak: {
    to: (text) => fikonSprakLibrary.translateToFikonSprak(text),
    from: (text) => fikonSprakLibrary.translateFromFikonSprak(text)
  },
  rot13: {
    to: (text) => rot13Library.encodeToROT13(text),
    from: (text) => rot13Library.decodeFromROT13(text)
  },
  rovarsprak: {
    to: (text) => rovarSprakLibrary.translateToRovarSprak(text),
    from: (text) => rovarSprakLibrary.translateFromRovarsprak(text)
  }
}

export { cypher }
