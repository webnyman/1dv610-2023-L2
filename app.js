import { cypher } from "./cypher.js"

const textToCypher = "hello"

const fikonsprak = cypher.fikonsprak.to(textToCypher)
const rot13 = cypher.rot13.to(textToCypher)
const rovarsprak = cypher.rovarsprak.to(textToCypher)

const decodedFikonsprak = cypher.fikonsprak.from(fikonsprak)
const decodedRot13 = cypher.rot13.from(rot13)
const decodedRovarsprak = cypher.rovarsprak.from(rovarsprak)

console.log('Text att koda: ' + textToCypher)
console.log('--------------------------')
console.log('Text på fikonspråk: ' + fikonsprak)
console.log('Text avkodad från fikonspråk: ' + decodedFikonsprak)
console.log('--------------------------')
console.log('Text på Rot13: ' + rot13)
console.log('Text avkodad från fikonspråk: ' + decodedRot13)
console.log('--------------------------')
console.log('Text på rövarspråk: ' + rovarsprak)
console.log('Text avkodad från rövarspråk: ' + decodedRovarsprak)
