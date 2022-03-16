import { Course } from "./Course";

export class User {
  name: string;
  totalCoins=0;
  totalCryptos=0;
  courses: Course[] = [];

  constructor(name:string) {
    this.name = name;
  }

  public receiveCoins(amount: number) {
    this.totalCoins += amount;
  }

  public removeCoins(courseValueCoins: number){
    this.totalCoins -= courseValueCoins;
  }

  public buyCourse(course: Course) {
    if(this.totalCoins < course.price)
      throw new Error("Not enough coins to buy this course");
    this.totalCoins -= course.price;
    if (this.courses.includes(course)) {
      throw new Error("User already owns this course");
    }
    this.courses.push(course);
  }
}