export class Ingredient {
  public id: number;
  public name: string;
  public amount: number;
  public amountUnit: string;

  constructor(name: string, amount: number, amountUnit: string) {
    this.name = name;
    this.amount = amount;
    this.amountUnit = amountUnit;
  }
}
