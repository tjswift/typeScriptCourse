//module exercise 1 (take the code and assign types to it wherever possible)
type bankAccount = {money: number, deposit: (val: number) => void};

let bankAccount: bankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};
 
let myself: {name: string, bankAccount: bankAccount, hobbies: string[]} = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
 
console.log(myself);