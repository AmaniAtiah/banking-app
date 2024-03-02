class Bank {
  constructor(name) {
    this.name = name;
    this.branches = [];
  }

  addBranch(branch) {
    if (!this.branches.includes(branch)) {
      this.branches.push(branch);
      return true;
    } else {
      return false;
    }
  }

  addCustomer(branch, customer) {
    if (this.branches.includes(branch)) {
      return branch.addCustomer(customer);
    } else {
      return false;
    }
  }

  addCustomerTransaction(branch, customerId, amount) {
    const branchByName = this.findBranchByName(branch.getName());
    if (branchByName) {
      branchByName.addCustomerTransaction(customerId, amount);
      return true;
    }
    return false;
  }

  findBranchByName(name) {
    const branchName = this.branches.find(
      (branch) => branch.getName() === name
    );
    return branchName;
  }

  checkBranch(branch) {
    if (this.branches.includes(branch)) {
      return true;
    }
    return false;
  }

  listCustomers(branch, includeTransaction) {
    const branchByName = this.findBranchByName(branch.getName());
    const customers = branch.getCustomers();
    if (branchByName) {
      customers.forEach((customer) => {
        if (includeTransaction) {
          console.log(
            `Customer: ${customer.getName()}, Balance: ${customer.getBalance()}`
          );
        } else {
          console.log(`Customer: ${customer.getName()}`);
        }
      });
    }
  }
}

module.exports = Bank;
