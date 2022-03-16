export class User {
  name: string;
  totalCoins= 0;
  constructor(name:string) {
    this.name = name;
  }

  public recieveCoins(ammount: number) {
    this.totalCoins += ammount;
  }
}