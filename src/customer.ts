import { Transaction } from "./transaction";

export class Customer {
  private id: number;
  private name: string;
  private transactions: Transaction[];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.transactions = [];
  }

  setId(id: number) {
    this.id = id;
  }

  getId(): number {
    return this.id;
  }

  setName(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setTransactions(transactions: Transaction[]) {
    this.transactions = transactions;
  }

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  getBalance(): number {
    return this.transactions.reduce(
      (total, transaction) => total + transaction.getAmount(),
      0
    );
  }

  addTransaction(amount: number): boolean {
    if (amount > 0) {
      const transaction = new Transaction(amount, new Date());

      this.transactions.push(transaction);
      return true;
    } else {
      return false;
    }
  }
}
