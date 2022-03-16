import { User } from "./src/User"

describe('User should be able to receive coins convert to crypto or by courses', ()=> {
  it('should be able to receive coins', () => {
    const user = new User()
    expect(true).toBe(true)
  })
  it('should decrease amount of coins when they are used', () => {

  })
  it('should trade coins for a course if has enough amount of coins', () => {
    
  })
  it('should not trade coins for a course if coins amount arent enough', () => {
    
  })
  it('should not be able to trade coins into a course if already owns it', () => {

  })
  it('should be able to convert coins into cryptos', () => {
    
  })
  it('should not be able to convert into cryptos if the amount is not enough', () => {

  })
})