class Branch {
  constructor(name) {
    this.name = name;
    this.customers = [];
  }

  getName() {
    return this.name;
  }

  getCustomers() {
    return this.customers;
  }

  addCustomer(customer) {
    if (!this.customers.includes(customer)) {
      this.customers.push(customer);
      return true;
    } else {
      return false;
    }
  }

  addCustomerTransaction(customerId, amount) {
    const customer = this.customers.find(
      (customer) => customer.getId() === customerId
    );

    if (customer) {
      return customer.addTransaction(amount);
    }

    return false;
  }
}

module.exports = Branch;
