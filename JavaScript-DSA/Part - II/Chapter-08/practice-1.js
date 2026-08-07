// Starts the Part-II of JS handbook 
// Write createBankAccount(initial) that 
// returns an object with deposit and getBalance functions
//sharing a private balance via closure.

function createBankAccount(initial) {
    let balance = initial; //private variable

    return {
        deposit: function (amount) { // deposit:adds money
            balance += amount;
        },
        getBalance: function () { //getBalance() = shows money
            return balance;
        }
    }
}

let account = createBankAccount(1000);
account.deposit(500);
console.log(account.getBalance());