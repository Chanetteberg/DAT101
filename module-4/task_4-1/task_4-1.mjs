"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

const AccountTypes = {
  Normal: "Brukskonto",
  Savings: "Sparekonto",
  Credit: "Kredittskonto",
  Pensjon: "Pensjonskonto",
};

const CurrencyTypes = {
  NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
  EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
  USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
  GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
  INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
  AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
  PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
  SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
  CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
  THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};

class TBankAccount {
  #type = 0;
  #balance = 0;
  #withdrawCount = 0;
  #currency = 'NOK';

  constructor(aType) {
    this.#type = aType;
  }

  toString() {
    return this.#type;
  }

  setType(aType) {
    this.#withdrawCount
    let txtOut = `The account type has change from ` + this.toString();
    this.#type = aType;
    txtOut += " to " + this.toString();
    printOut(txtOut);
  }

  getBalance() {
    return this.#balance;
  }

  deposit(aAmount) {
    this.#withdrawCount = 0;
    this.#balance += aAmount;
    printOut("Deposit of " + aAmount + ", new balance is " + this.#balance);
  }

  withdraw(aAmount) {
    let canWithdraw = true;

    switch (this.#type) {
      case AccountTypes.Pensjon:
        canWithdraw = false;
        printOut(" You can not withdraw from " + this.#type);
        return;
      case AccountTypes.Savings:
        this.#withdrawCount++;
        if (this.#withdrawCount > 3) {
          canWithdraw = false;
          printOut(" You can not withdraw from " + this.#type + " more than 3 times ");
        }
        break;
      default:
        break;
    }

    if (canWithdraw && typeof aAmount === "number" && aAmount > 0) {
      this.#balance -= aAmount;
      printOut("Withdraw of " + aAmount + ", new balance is " + this.#balance);
    } else {
      printOut("Cannot withdraw " + aAmount);
    }
  }

  CurrencyTypes(aType) {
    if (this.#currency === aType) {
      return;
    }
    printOut(" The currency ha changed from "+ this.#currency.name + " to " + aType.name);
  }
}

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Print all these types on a single comma-seperated line:
//Get all object values:
const accountTypeValues = Object.values(AccountTypes);
//Join them into a single string with commas:
const part1Text = accountTypeValues.join(", ");
//Print the result:
printOut(part1Text);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const myAccount = new TBankAccount(AccountTypes.Normal);
myAccount.setType(AccountTypes.Savings);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);
myAccount.deposit(100);
myAccount.withdraw(25);
printOut(" My account balance is" + myAccount.getBalance());

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(25);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.setType(AccountTypes.Pensjon);
myAccount.withdraw(10);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


printOut(newLine);
