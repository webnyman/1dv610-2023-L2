import { Fikonsprak } from '../../Fikonsprak.js'

// Tests for the Fikonsprak class
describe('Fikonsprak', () => {
  let fikonsprak

  beforeEach(() => {
    fikonsprak = new Fikonsprak()
  })
  // Test cases (3) for translateToFikonSprak
  it('should translate text to Fikonsprak', () => {
    const translatedText = fikonsprak.translateToFikonSprak('Kaffe')
    expect(translatedText).toBe('fiffe kakon')
  })

  it('should handle an empty input when translating to Fikonsprak', () => {
    const emptyInput = fikonsprak.translateToFikonSprak('')
    expect(emptyInput).toBe('Texten är tom')
  })

  it('should handle input with more than one word when translating to Fikonsprak', () => {
    const multipleWordsInput = fikonsprak.translateToFikonSprak('Kaffe är gott')
    expect(multipleWordsInput).toBe('Det går bara att översätta ett ord i taget')
  })

  // Test cases (2) for translateFromFikonSprak
  it('should translate text from Fikonsprak', () => {
    const decodedText = fikonsprak.translateFromFikonSprak('fiffe kakon')
    expect(decodedText).toBe('kaffe')
  })

  it('should handle input with no vowels when translating to Fikonsprak', () => {
    const noVowelsInput = fikonsprak.translateToFikonSprak('kffr')
    expect(noVowelsInput).toBe('Texten innehåller inga vokaler')
  })

  // Test cases (2) for isFikonSprak
  it('should check if text is in Fikonsprak', () => {
    const fikonText = 'fiffe kakon'
    const nonFikonText = 'fiffa kakan'

    expect(fikonsprak.isFikonSprak(fikonText)).toBe(true)
    expect(fikonsprak.isFikonSprak(nonFikonText)).toBe(false)
  })
})
