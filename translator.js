const charsToSkip = ['a', 'o', 'u', 'å', 'e', 'i', 'y', 'ä', 'ö', '.', ',', '!', '?', ' ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

const translateToRovarSprak = (textToTranslate) => {
  let rovarSprak = ''
  if (validateTextInput(textToTranslate)) {
    for (let i = 0; i < textToTranslate.length; i++) {
      if (charsToSkip.includes(textToTranslate[i])) {
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

const translateFromRovarsprak = (textToTranslate = 'hohejoj') => {
  let decodedRovarSprak = ''
  if (isRovarSprak(textToTranslate) === false) {
    decodedRovarSprak = 'Texten är inte på rövarspråk'
  } else {
    for (let i = 0; i < textToTranslate.length; i++) {
      if (charsToSkip.includes(textToTranslate[i])) {
        decodedRovarSprak += textToTranslate[i]
      } else {
        decodedRovarSprak += textToTranslate[i]
        i = i + 2
      }
    }
  }
  return decodedRovarSprak
}

const isRovarSprak = (textToCheck) => {
  textToCheck = textToCheck.toLowerCase()
  let isRovarSprak = true
  for (let i = 0; i < textToCheck.length; i++) {
    if (charsToSkip.includes(textToCheck[i])) {
      isRovarSprak = true
    } else {
      if (textToCheck[i] === textToCheck[(i + 2)] && (textToCheck[(i + 1)]) === 'o') {
        isRovarSprak = true
        i = i + 2
      } else {
        isRovarSprak = false
        break
      }
    }
  }
  return isRovarSprak
}

const countNumberOfCharacters = (text) => {
  if (isStringEmpty(text)) {
    return 'Texten är tom'
  } else {
    return text.length
  }
}

const countNumberOfWords = (text) => {
  if (isStringEmpty(text)) {
    return 'Texten är tom'
  } else {
    return text.split(' ').length
  }
}

const countNumberOfVowels = (text) => {
  if (isStringEmpty(text)) {
    return 'Texten är tom'
  } else {
    return text.match(/[aouåeiyäö]/gi).length
  }
}

const countNumberOfConsonants = (text) => {
  if (isStringEmpty(text)) {
    return 'Texten är tom'
  } else {
    return text.match(/[bcdfghjklmnpqrstvwxz]/gi).length
  }
}

const validateTextInput = (text) => {
  const validRegEx = /^[A-Za-z0-9\s,.;:!?åöäÅÖÄ]+$/u
  if (text.match(validRegEx) === null || isStringEmpty(text)) {
    return false
  } else {
    return true
  }
}

const isStringEmpty = (text) => {
  if (text === '') {
    return true
  } else {
    return false
  }
}

const reverseString = (text) => {
  if (isStringEmpty(text)) {
    return 'Texten är tom'
  } else {
    return text.split('').reverse().join('')
  }
}

const encodeToROT13 = (text) => {
  let encryptedText = ''
  if (isStringEmpty(text)) {
    return 'Texten är tom'
  } else {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzåäöABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ'
    const rot13Cipher = 'nopqrstuvwxyzåäöabcdefghijklmNOPQRSTUVWXYZÅÄÖABCDEFGHIJKLM'
    encryptedText = text.replace(/[a-zåäö]/gi, letter => rot13Cipher[alphabet.indexOf(letter)])
    return encryptedText
  }
}

const decodeFromROT13 = (text) => {
  let decryptedText = ''
  if (isStringEmpty(text)) {
    return 'Texten är tom'
  } else {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzåäöABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ'
    const rot13Cipher = 'nopqrstuvwxyzåäöabcdefghijklmNOPQRSTUVWXYZÅÄÖABCDEFGHIJKLM'
    decryptedText = text.replace(/[a-zåäö]/gi, letter => alphabet[rot13Cipher.indexOf(letter)])
    return decryptedText
  }
}

const translateToFikonSprak = (textToTranslate = 'kaffe') => {
  if (isStringEmpty(textToTranslate)) {
    return 'Texten är tom'
  } else if (countNumberOfVowels(textToTranslate) === 0) {
    return 'Texten innehåller inga vokaler'
  } else {
    for (let i = 0; i < textToTranslate.length; i++) {
      if (charsToSkip.includes(textToTranslate[i])) {
        return 'fi' + textToTranslate.substring(i + 1) + ' ' + textToTranslate.substring(0, i + 1) + 'kon'
      }
    }
  }
}

const translateFromFikonSprak = (textToTranslate = 'fiffe kakon') => {
  let translatedTextArray = []
  if (isStringEmpty(textToTranslate)) {
    return 'Texten är tom'
  } else {
    translatedTextArray = textToTranslate.split(' ')
    return translatedTextArray[1].slice(0, 2) + translatedTextArray[0].substring(2)
  }
}

const isFikonSprak = (textToCheck) => {
  textToCheck = textToCheck.toLowerCase()
  let isFikonSprak = true
  if (textToCheck.substring(0, 2) === 'fi' && textToCheck.substring(textToCheck.length - 3) === 'kon') {
    isFikonSprak = true
  } else if (countNumberOfWords(textToCheck) !== 2) {
    isFikonSprak = false
  } else {
    isFikonSprak = false
  }
  return isFikonSprak
}

export { translateToRovarSprak, translateFromRovarsprak, isRovarSprak, translateToFikonSprak, translateFromFikonSprak, isFikonSprak }
export { countNumberOfCharacters, countNumberOfWords, countNumberOfVowels, countNumberOfConsonants }
export { validateTextInput, isStringEmpty, reverseString }
export { encodeToROT13, decodeFromROT13 }
