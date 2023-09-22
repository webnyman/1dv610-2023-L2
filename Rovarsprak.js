import { StringFunctions } from './StringFunctions.js'

class RovarSprak {
  constructor () {
    this.charsToSkip = ['a', 'o', 'u', 'å', 'e', 'i', 'y', 'ä', 'ö', '.', ',', '!', '?', ' ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    this.stringFunctions = new StringFunctions()
  }

  translateToRovarSprak (textToTranslate) {
    let rovarSprak = ''
    if (this.validateTextInput(textToTranslate)) {
      for (let i = 0; i < textToTranslate.length; i++) {
        if (this.charsToSkip.includes(textToTranslate[i])) {
          rovarSprak += textToTranslate[i]
        } else {
          rovarSprak += textToTranslate[i] + 'o' + textToTranslate[i].toLowerCase()
        }
      }
      return rovarSprak
    } else {
      return 'Texten är tom eller innehåller ogiltiga tecken'
    }
  }

  validateTextInput (text) {
    const validRegEx = /^[A-Za-z0-9\s,.;:!?åöäÅÖÄ]+$/u
    if (text.match(validRegEx) === null || this.stringFunctions.isStringEmpty(text)) {
      return false
    } else {
      return true
    }
  }
}

export { RovarSprak }
