// Tests for the Rot13 class
import { Rot13 } from '../../Rot13.js'

describe('Rot13', () => {
  let rot13

  beforeEach(() => {
    rot13 = new Rot13()
  })

  it('should encode text to ROT13', () => {
    const encodedText = rot13.encodeToROT13('Hello World')
    expect(encodedText).toBe('Uryyä Gäbyq')
  })

  it('should decode text from ROT13', () => {
    const decodedText = rot13.decodeFromROT13('Uryyä Gäbyq')
    expect(decodedText).toBe('Hello World')
  })

  it('should handle an empty string when encoding', () => {
    const encodedText = rot13.encodeToROT13('')
    expect(encodedText).toBe('Texten är tom')
  })

  it('should handle an empty string when decoding', () => {
    const decodedText = rot13.decodeFromROT13('')
    expect(decodedText).toBe('Texten är tom')
  })
})
