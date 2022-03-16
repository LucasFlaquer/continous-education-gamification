import { Course } from "./Course";

export class User {
  name: string;
  totalCoins= 0;
  courses: Course[] = [];

  constructor(name:string) {
    this.name = name;
  }

  public receiveCoins(amount: number) {
    this.totalCoins += amount;
  }

  public buyCourse(course: Course) {
    if(this.totalCoins < course.price)
      throw new Error("Not enough coins to buy this course");
    this.totalCoins -= course.price;
    this.courses.push(course);
  }
}