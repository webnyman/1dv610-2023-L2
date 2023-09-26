import { StringFunctions } from '../../src/StringFunctions.js'
// Tests for the StringFunctions class
describe('StringFunctions', () => {
  let stringFunctions

  beforeEach(() => {
    stringFunctions = new StringFunctions()
  })

  // Test case (1) for countNumberOfCharacters
  it('should count the number of characters in a string', () => {
    expect(stringFunctions.countNumberOfCharacters('Hello')).toBe(5)
  })

  // Test case (1) for countNumberOfWords
  it('should count the number of words in a string', () => {
    expect(stringFunctions.countNumberOfWords('Hello world')).toBe(2)
  })

  // Test case (1) for countNumberOfVowels
  it('should count the number of vowels in a string', () => {
    expect(stringFunctions.countNumberOfVowels('Hello')).toBe(2)
  })

  // Test case (1) for countNumberOfConsonants
  it('should count the number of consonants in a string', () => {
    expect(stringFunctions.countNumberOfConsonants('Hello')).toBe(3)
  })
  // Test cases (2) for isStringEmpty
  it('should return true if the string is empty', () => {
    expect(stringFunctions.isStringEmpty('')).toBe(true)
    expect(stringFunctions.isStringEmpty('Hello')).toBe(false)
  })
  // Test cases (2) for isString
  it('should return true if the input is a string', () => {
    expect(stringFunctions.isString('Hello')).toBe(true)
    expect(stringFunctions.isString(123)).toBe(false)
  })

  // Test case (1) for reverseString
  it('should reverse a string', () => {
    expect(stringFunctions.reverseString('Hello')).toBe('olleH')
  })
})
