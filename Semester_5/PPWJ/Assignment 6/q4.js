class BankAccount {
    constructor(accountNumber, holderName, balance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this._balance = balance;
    }

    get balance() {
        return this._balance;
    }

    set balance(amount) {
        if (amount > 0) {
            this._balance += amount; 
        } else if (amount < 0 && this._balance >= Math.abs(amount)) {
            this._balance += amount; 
        } else {
            console.log("Insufficient funds or invalid amount");
        }
    }
}

let account1 = new BankAccount(12345, "Alice", 1000);
let account2 = new BankAccount(67890, "Bob", 500);

account1.balance = 200; 
account1.balance = -100; 
account2.balance = 300; 
account2.balance = -600; 
console.log(`Account 1 balance: ${account1.balance}`);
console.log(`Account 2 balance: ${account2.balance}`);
