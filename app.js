import { cypher } from "./cypher.js"

const textToCypher = "Hello"

const fikonsprak = cypher.fikonsprak.to(textToCypher)
const rot13 = cypher.rot13.to(textToCypher)
const rovarsprak = cypher.rovarsprak.to(textToCypher)

const decodedFikonsprak = cypher.fikonsprak.from(fikonsprak)
const decodedRot13 = cypher.rot13.from(rot13)
const decodedRovarsprak = cypher.rovarsprak.from(rovarsprak)

console.log(fikonsprak)
console.log(decodedFikonsprak)
console.log(rot13)
console.log(decodedRot13)
console.log(rovarsprak)
console.log(decodedRovarsprak)
