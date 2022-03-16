import { User } from "./src/User"

describe('User should be able to receive coins convert to crypto or by courses', ()=> {
  it('should be able to receive coins', () => {
    const user = new User("joao da silva")
    user.addCoins(100);

    expect(user.totalCoins).toBe(100);

  })
  it('should decrease amount of coins when they are used', () => {
    const user = new User("Gustavo Nogueira");
    
    const totalUserCoins = 150;
    const courseValueCoins = 100;
    
    user.addCoins(totalUserCoins);
    const userOldCoins = user.totalCoins;
    
    user.removeCoins(courseValueCoins);
    const userNewCoins = user.totalCoins;
    
    expect(userNewCoins).toBeLessThan(userOldCoins);
    expect(userNewCoins).toEqual(userOldCoins-courseValueCoins);
  })
  it('should trade coins for a course if has enought amount of coins', () => {
    
  })
  it('should not trade coins for a course if coins amount arent enought', () => {
    
  })
  it('should not be able to trade coins into a course if already owns it', () => {

  })
  it('should be able to convert coins into cryptos', () => {
    
  })
  it('should not be able to convert into cryptos if the amount is not enought', () => {

  })
})