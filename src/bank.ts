import { Branch } from "./branch";
import { Customer } from "./customer";
export class Bank {
  private name: string;
  private branches: Branch[];

  constructor(name: string) {
    this.name = name;
    this.branches = [];
  }

  setName(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setBranches(branches: Branch[]) {
    this.branches = branches;
  }

  getBranches(): Branch[] {
    return this.branches;
  }

  addBranch(branch: Branch): boolean {
    if (!this.branches.includes(branch)) {
      this.branches.push(branch);
      return true;
    }
    return false;
  }

  addCustomer(branch: Branch, customer: Customer): boolean {
    if (this.branches.includes(branch)) {
      return branch.addCustomer(customer);
    } else {
      return false;
    }
  }

  addCustomerTransaction(
    branch: Branch,
    customerId: number,
    amount: number
  ): boolean {
    const branchByName = this.findBranchByName(branch.getName());
    if (branchByName) {
      branchByName.addCustomerTransaction(customerId, amount);
      return true;
    }
    return false;
  }

  findBranchByName(name: string): Branch | undefined {
    const branchName = this.branches.find(
      (branch) => branch.getName() === name
    );
    return branchName;
  }

  checkBranch(branch: Branch): boolean {
    if (this.branches.includes(branch)) {
      return true;
    }
    return false;
  }

  listCustomers(branch: Branch, includeTransaction: boolean): void {
    const branchByName = this.findBranchByName(branch.getName());
    if (branchByName) {
      branchByName.getCustomers().forEach((customer) => {
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

  searchCustomers(query: string | number): Customers[] {
    const matchedCustomers: Customers[] = [];

    this.branches.forEach((branch) => {
      branch.getCustomers().forEach((customer) => {
        if (
          customer
            .getName()
            .toLowerCase()
            .includes(query.toString().toLowerCase()) ||
          customer.getId().toString().includes(query.toString())
        ) {
          matchedCustomers.push({
            customer: customer,
            branch: branch.getName(),
          });
        }
      });
    });

    return matchedCustomers;
  }
}

type Customers = {
  customer: Customer;
  branch: string;
};
