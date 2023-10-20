import { Rot13 } from '../../src/Rot13.js'

// Tests for the Rot13 class
describe('Rot13', () => {
  let rot13

  beforeEach(() => {
    rot13 = new Rot13()
  })

  // Test cases (2) for encodeToROT13
  it('should encode text to ROT13', () => {
    const encodedText = rot13.encodeToROT13('Hello World')
    expect(encodedText).toBe('Uryyä Gäbyq')
  })

  it('should handle an empty string when encoding', () => {
    expect(() => rot13.encodeToROT13('')).toThrowError('Texten är tom')
  })

  // Test cases (2) for decodeFromROT13
  it('should decode text from ROT13', () => {
    const decodedText = rot13.decodeFromROT13('Uryyä Gäbyq')
    expect(decodedText).toBe('Hello World')
  })

  it('should handle an empty string when decoding', () => {
    expect(() => rot13.decodeFromROT13('')).toThrowError('Texten är tom')
  })
})
