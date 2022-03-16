export class User {
  name: string;
  totalCoins= 0;
  constructor(name:string) {
    this.name = name;
  }

  public addCoins(amount: number) {
    this.totalCoins += amount;
  }

  public removeCoins(courseValueCoins: number){
    this.totalCoins -= courseValueCoins;
  }
}