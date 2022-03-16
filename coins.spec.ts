import { Course } from "./src/Course";
import { User } from "./src/User"

describe('User should be able to receive coins convert to crypto or by courses', ()=> {
  it('should be able to receive coins', () => {
    const user = new User("joao da silva")
    user.receiveCoins(100);

    expect(user.totalCoins).toBe(100);

  })
  it('should decrease amount of coins when they are used', () => {

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
    
  })
  it('should not be able to trade coins into a course if already owns it', () => {

  })
  it('should be able to convert coins into cryptos', () => {
    
  })
  it('should not be able to convert into cryptos if the amount is not enough', () => {

  })
})