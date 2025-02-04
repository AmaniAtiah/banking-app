// import { Customer } from "./customer";

import { Branch } from "./branch";
import { Customer } from "./customer";
import { Bank } from "./bank";

const arizonaBank = new Bank("Arizona");
const westBranch = new Branch("West Branch");
const sunBranch = new Branch("Sun Branch");
const customer1 = new Customer(1, "John");
const customer2 = new Customer(2, "Anna");
const customer3 = new Customer(3, "John");

arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
arizonaBank.addBranch(westBranch);

arizonaBank.findBranchByName("bank");
arizonaBank.findBranchByName("sun");

arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);

arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000);
arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000);

customer1.addTransaction(-1000);
console.log(customer1.getBalance());
console.log(arizonaBank.listCustomers(westBranch, true));
console.log(arizonaBank.listCustomers(sunBranch, true));

const searchResult = arizonaBank.searchCustomers(1);

if (searchResult) {
  console.log("Search Results:");
  searchResult.forEach((result) => {
    console.log(
      `- Branch: ${result.branch}, Customer Name: ${result.customer.getName()} `
    );
  });
} else {
  console.log("No matching customers found.");
}
