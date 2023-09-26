# 1dv610 L2 Build a Module - Cypher and deCypher text
![Node.js](https://img.shields.io/badge/Node.js-v14.0.0-green)
![License](https://img.shields.io/badge/License-MIT-blue)

## Version
1.0.0

## Systemkrav
NodeJS > v14.0.0 (Support för ES-modules)

## Installation
git clone https://github.com/webnyman/1dv610-2023-L2.git

npm install

## Testning (Jasmine)
npm test

[Länk till testrapport](TestReport.md)

[Länk till testfall](/spec/support/)

## Beskrivning
Denna modul kodar och avkodar en text till/från följande kodspråk
- Rövarspråk
- Fikonspråk
- Rot13

## Exempel på användning
Se gärna exempel på användning i filen app.js.

Exekvera filen med kommandot: npm run testapp

---
`import { cypher } from './cypher.js'`

`const textToCypher = 'hello'`

`cypher.rovarsprak.to(textToCypher)` översätter text till Rövarspråk. Kan översätta hela meningar.

`cypher.rovarsprak.from(rovarsprak)` översätter från Rövarspråk. Kan översätta hela meningar.

`cypher.fikonsprak.to(textToCypher)` översätter text till Fikonspråk. **OBS! i nuvarande version endast ett ord i taget.**

`cypher.fikonsprak.from(fikonsprak)` översätter från Fikonspråk. **OBS! i nuvarande version endast ett ord i taget.**

`cypher.rot13.to(textToCypher)` översätter till Rot13. Kan översätta hela meningar.

`cypher.rot13.from(rot13)` översätter från Rot13. Kan översätta hela meningar.

---

## Issues
- Metoden fikonsprak kan i nuvarande version endast översätta ett ord i taget.
- Metoderna fikonsprak och rot13 genererar endast små bokstäver
