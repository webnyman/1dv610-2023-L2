import { StringFunctions } from '../../StringFunctions.js'

describe('StringFunctions', () => {
  let stringFunctions

  beforeEach(() => {
    stringFunctions = new StringFunctions()
  })

  it('should count the number of characters in a string', () => {
    expect(stringFunctions.countNumberOfCharacters('Hello')).toBe(5)
  })

  it('should count the number of words in a string', () => {
    expect(stringFunctions.countNumberOfWords('Hello world')).toBe(2)
  })

  it('should count the number of vowels in a string', () => {
    expect(stringFunctions.countNumberOfVowels('Hello')).toBe(2)
  })

  it('should count the number of consonants in a string', () => {
    expect(stringFunctions.countNumberOfConsonants('Hello')).toBe(3)
  })

  it('should return true if the string is empty', () => {
    expect(stringFunctions.isStringEmpty('')).toBe(true)
    expect(stringFunctions.isStringEmpty('Hello')).toBe(false)
  })

  it('should return true if the input is a string', () => {
    expect(stringFunctions.isString('Hello')).toBe(true)
    expect(stringFunctions.isString(123)).toBe(false)
  })

  it('should reverse a string', () => {
    expect(stringFunctions.reverseString('Hello')).toBe('olleH')
  })
})
