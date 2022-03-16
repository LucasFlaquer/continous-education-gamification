export class User {
  name: string;
  totalCoins= 0;
  constructor(name:string) {
    this.name = name;
  }

  public getCoins(ammount: number) {
    this.totalCoins += ammount;
  }
}