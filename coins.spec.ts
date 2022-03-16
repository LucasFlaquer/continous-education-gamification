import { Course } from "./src/Course";
import { User } from "./src/User"

describe('User should be able to receive coins convert to crypto or by courses', ()=> {
  it('should be able to receive coins', () => {
    const user = new User("John da silva")
    user.receiveCoins(100);

    expect(user.totalCoins).toBe(100);

  })
  it('should decrease amount of coins when they are used', () => {
    const user = new User("Gustavo Nogueira");
    
    const totalUserCoins = 150;
    const courseValueCoins = 100;
    
    user.receiveCoins(totalUserCoins);
    const userOldCoins = user.totalCoins;
    
    user.removeCoins(courseValueCoins);
    const userNewCoins = user.totalCoins;
    
    expect(userNewCoins).toBeLessThan(userOldCoins);
    expect(userNewCoins).toEqual(userOldCoins-courseValueCoins);
  })
  it('should trade coins for a course if has enough amount of coins', () => {
    const user = new User("Douglas");
    const course = new Course(100);
    user.receiveCoins(100);
    
    user.buyCourse(course);

    expect(user.totalCoins).toBe(0);
    expect(user.courses.includes(course)).toBeTruthy();
  })
  it('should not trade coins for a course if coins amount arent enough', () => {
    const user = new User("joao da silva")
    const course1 = new Course(200)
    user.receiveCoins(100);
    expect(() => user.buyCourse(course1)).toThrow("Not enough coins to buy this course");
    
  })
  it('should not be able to trade coins into a course if already owns it', () => {
    const user = new User("joao da silva")
    const course = new Course(100)
    user.receiveCoins(100);

    user.buyCourse(course);
    
    expect(() => user.buyCourse(course)).toThrow("User already owns this course");
  })
  it('should be able to convert coins into cryptos', () => {
    const user = new User("Gabriel Noel")
    
    const totalUserCoins = 150;

    user.receiveCoins(totalUserCoins);
    const userOldCoins = user.totalCoins;
    const userOldCryptos = user.totalCryptos;

    user.exchangeCoinsToCrypto(100);
    const userNewCoins = user.totalCoins;
    const userNewCryptos = user.totalCryptos;

    expect(userNewCoins).toBeLessThan(userOldCoins);
    expect(userNewCryptos).toBeGreaterThan(userOldCryptos);
    expect(userNewCryptos).toEqual(10);

  })
  it('should not be able to convert into cryptos if the amount is not enough', () => {

  })
})