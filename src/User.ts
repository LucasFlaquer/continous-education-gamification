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
    this.totalCoins -= course.price;
    if (this.courses.includes(course)) {
      throw new Error("User already owns this course");
    }
    this.courses.push(course);
  }
}