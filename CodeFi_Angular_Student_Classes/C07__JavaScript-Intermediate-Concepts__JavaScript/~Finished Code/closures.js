// * ============ CLOSURES ============ * \\
// ~ DEMO 1 START ~ \\
function outer() {
  let myVariable = "Outer Function Scoped Variable";

  function inner() {
    console.log("myVariable inside inner function:", myVariable);
  }

  return inner;
}

const outerFunctionCall = outer();

outerFunctionCall(); // Prints: myVariable inside inner function: Outer Function Scoped Variable
// ~ DEMO 1 END ~ \\

// ~ DEMO 2 START ~ \\
function greeting(greeting) {
  return function (name) {
    return `${name}! ${greeting}`;
  };
}

const basicWelcome = greeting("Welcome.");
const friendlyWelcome = greeting("So glad to see you again!");

console.log("basicWelcome:", basicWelcome("John"));
console.log("friendlyWelcome:", friendlyWelcome("John"));
// ~ DEMO 2 END ~ \\

// ~ DEMO 3 START ~ \\
const createBankAccount = (initialBalance) => {
  let userBalance = initialBalance;

  return {
    getBalance: function () {
      return userBalance;
    },
    deposit: function (amount) {
      userBalance += amount;
      return userBalance;
    },
    withdrawl: function (amount) {
      userBalance -= amount;
      return userBalance;
    },
  };
};

const myAccount = createBankAccount(100);
let myBalance;

myBalance = myAccount.getBalance(); // 100
console.log("myBalance after creation:", myBalance);

myAccount.deposit(99);
myBalance = myAccount.getBalance(); // 100
console.log("myBalance after $99 deposit:", myBalance);

myAccount.withdrawl(12);
myBalance = myAccount.getBalance(); // 100
console.log("myBalance after $12 withdrawl:", myBalance);
// ~ DEMO 3 END ~ \\
