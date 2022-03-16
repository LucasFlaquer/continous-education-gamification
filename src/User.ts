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

  public removeCoins(courseValueCoins: number){
    this.totalCoins -= courseValueCoins;
  }

  public buyCourse(course: Course) {
    this.totalCoins -= course.price;
    this.courses.push(course);
  }
}