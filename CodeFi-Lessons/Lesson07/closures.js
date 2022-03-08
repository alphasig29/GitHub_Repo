// * ============ CLOSURES ============ * \\
// ~ DEMO 1 START ~ \\
function outer() {
 let myVar = "outer scope";

 function inner(){
     console.log(myVar);
 }

 //retur a reference to the inner fuction
 return inner;

}

const outterFuncCall = outer();
outterFuncCall();

// ~ DEMO 1 END ~ \\

// ~ DEMO 2 START ~ \\

function greeting(message) {
    return function (name) {
        return `${name}! ${message}`;
    }
}

const basicWelcome = greeting("welcome.");
const friendlyWelcom = greeting("So glad to see you again!");


const welcomeJohn = basicWelcome("John");
const friendlyWelcomSara = friendlyWelcom("sara");

console.log(welcomeJohn);
console.log(friendlyWelcomSara);





// ~ DEMO 2 END ~ \\

// ~ DEMO 3 START ~ \\

const createBankAccount = (initialBalance) => {
    let userBalance = initialBalance;

    // return userBalance;
    return {
        getBalance: () => userBalance,
        deposit: (amount)=> userBalance += amount,
        withdrawl: (amount) => userBalance -= amount

    };
}

const myAccount = createBankAccount(100);
myAccount.deposit(99);
myAccount.withdrawl(40);


console.log('my account', myAccount);

const myBalance = myAccount.getBalance();
console.log('myBalance', myBalance);















// ~ DEMO 3 END ~ \\
