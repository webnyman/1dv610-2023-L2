const vowels = ['a', 'o', 'u', 'å', 'e', 'i', 'y', 'ä', 'ö']

const translateToRovarSprak = (textToTranslate) => {
  let rovarSprak = ''
  for (const letter of textToTranslate) {
    if (vowels.includes(letter)) {
      rovarSprak += letter
    } else {
      rovarSprak += letter + 'o' + letter.toLowerCase()
    }
  }
  return rovarSprak
}



export { translateToRovarSprak }
