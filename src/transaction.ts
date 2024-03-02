export class Transaction {
  private amount: number;
  private date: Date;

  constructor(amount: number, date: Date) {
    this.amount = amount;
    this.date = date;
  }

  getAmount(): number {
    return this.amount;
  }

  getDate(): Date {
    return this.date;
  }

  setAmount(amount: number): void {
    this.amount = amount;
  }

  setDate(date: Date): void {
    this.date = date;
  }
}
