// import { Transaction } from "./transaction.js";
const Transaction = require("./transaction.js");

class Customer {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.transactions = [];
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getTransactions() {
    return this.transactions;
  }

  getBalance() {
    return this.transactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
  }

  addTransaction(amount) {
    if (amount > 0) {
      const transaction = new Transaction(amount, new Date());

      this.transactions.push(transaction);
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Customer;
