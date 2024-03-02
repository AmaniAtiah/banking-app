import { Customer } from "./customer";
export class Branch {
  private name: string;
  private customers: Customer[];

  constructor(name: string) {
    this.name = name;
    this.customers = [];
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setCustomers(customers: Customer[]) {
    this.customers = customers;
  }

  getCustomers(): Customer[] {
    return this.customers;
  }

  addCustomer(customer: Customer): boolean {
    if (!this.customers.includes(customer)) {
      this.customers.push(customer);
      return true;
    } else {
      return false;
    }
  }

  addCustomerTransaction(customerId: number, amount: number): boolean {
    const customer = this.customers.find(
      (customer) => customer.getId() === customerId
    );

    if (customer) {
      return customer.addTransaction(amount);
    }

    return false;
  }
}
