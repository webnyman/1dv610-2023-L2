// Import the RovarSprak class
import { RovarSprak } from '../../Rovarsprak.js'

describe('RovarSprak', () => {
  let rovarSprak

  beforeEach(() => {
    rovarSprak = new RovarSprak()
  })

  it('should translate text to RovarSprak', () => {
    const translatedText = rovarSprak.translateToRovarSprak('Hej på dig')
    expect(translatedText).toBe('Hohejoj popå dodigog')
  })

  it('should translate text from RovarSprak', () => {
    const decodedText = rovarSprak.translateFromRovarsprak('Hohejoj popå dodigog')
    expect(decodedText).toBe('Hej på dig')
  })

  it('should handle an empty or invalid input when translating to RovarSprak', () => {
    const emptyInput = rovarSprak.translateToRovarSprak('')
    const invalidInput = rovarSprak.translateToRovarSprak('Hej på dig!#123')

    expect(emptyInput).toBe('Texten är tom eller innehåller ogiltiga tecken')
    expect(invalidInput).toBe('Texten är tom eller innehåller ogiltiga tecken')
  })

  it('should validate input text correctly', () => {
    const validText = 'Hej på dig'
    const invalidText = 'Hej på dig!###'

    expect(rovarSprak.validateTextInput(validText)).toBe(true)
    expect(rovarSprak.validateTextInput(invalidText)).toBe(false)
  })

  it('should check if text is in RovarSprak', () => {
    const rovarText = 'Hohejoj popå dodigog'
    const nonRovarText = 'Hej på dig'

    expect(rovarSprak.isRovarSprak(rovarText)).toBe(true)
    expect(rovarSprak.isRovarSprak(nonRovarText)).toBe(false)
  })
})
