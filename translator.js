const charsToSkip = ['a', 'o', 'u', 'å', 'e', 'i', 'y', 'ä', 'ö', '.', ',', '!', '?', ' ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

const translateToRovarSprak = (textToTranslate) => {
  let rovarSprak = ''
  for (let i = 0; i < textToTranslate.length; i++) {
    if (charsToSkip.includes(textToTranslate[i])) {
      rovarSprak += textToTranslate[i]
    } else {
      rovarSprak += textToTranslate[i] + 'o' + textToTranslate[i].toLowerCase()
    }
  }
  return rovarSprak
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
      // Check if text to translate is rövarspråk
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
  return text.length
}

const countNumberOfWords = (text) => {
  return text.split(' ').length
}

const countNumberOfVowels = (text) => {
  return text.match(/[aouåeiyäö]/gi).length
}

const countNumberOfConsonants = (text) => {
  return text.match(/[bcdfghjklmnpqrstvwxz]/gi).length
}

export { translateToRovarSprak, translateFromRovarsprak, isRovarSprak }
export { countNumberOfCharacters, countNumberOfWords, countNumberOfVowels, countNumberOfConsonants }
