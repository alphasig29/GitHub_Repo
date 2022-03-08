// Exercise #1 =================
// **Aim**: Write a function `redundantReturn` that takes in 
// a string `str` and returns a function that returns str.

function redundantReturn(str = "default") {
    return function () {
        return str;
    }
    // return inner();
}

console.group("Exercise #1");
console.log(redundantReturn("Pass this back")());
console.log("redundantReturn(Pass this back)() = ", redundantReturn('Pass this back')());
console.groupEnd();

// Exercise #2 ==================================
// ## Exercise #2: Intermediate

// Closures are functions that remember their lexical environments. 
// Lexical environments mean the environment in which the function 
// was declared.

// **Aim**: Fix the code to print out the string message.

function parent(x) {
    return function closure() {
      // Closure is declared here.
      return x;
    };
  }
  
  const remember = parent("remembers me");
  // Seems like the variable x would be gone after
  // parent is executed, but it's not.
  
  console.group("Exercise #2");
  console.log(remember()); // closure();
  console.groupEnd();

  // Returns "remembers me" because the inner
  // function remembers x.



//   Exercise #3 =======================================
// You will be given an array of drinks, with each drink being 
// an object with two properties: `name` and `price`. 
// Create a function with the drinks array as an argument 
// and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs 
// to be sorted:

// The output of the sorted drinks object will be:

// _Examples_

// ```js
// sortDrinkByPrice(drinks)    ➞    [{name: "lime", price: 10}, {name: "lemonade", price: 50}]


drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
    { name: "pepsi", price: 5 },
    { name: "beer", price: 15 },
    { name: "top shelf", price: 100 },
  ];

const sortDrinkByPrice =  drinks.sort((a,b) => a.price - b.price);

console.group("Exercise #3");
console.log("sortDrinkByPrice", sortDrinkByPrice);
console.groupEnd();

// Exercise #4 ========================================
// **Aim**: Create the function that takes an array with objects 
// and returns the sum of people's budgets.

// _Examples_

// ```js
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ])    ➞    65700

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ])    ➞    62600
// ```

function getBudgets(budgetObjects = []){
    let totalBudget = 0;
    budgetObjects.forEach((userBudget) => {
        totalBudget += userBudget.budget;
    });
    return totalBudget;
}
console.group("Exercise #4");

console.log("getBudgets(example 1)", getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]));

  console.log("getBudgets(example 2)",getBudgets([
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
  ]));
console.groupEnd();

//   Exercise #5 ==================================
// Write a function that converts an object into an array, 
// where each element represents a key-value pair in the form of an array.

// _Examples_

// ```js
// toArray({ a: 1, b: 2 })    ➞    [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 })    ➞    [["shrimp", 15], ["tots", 12]]

// toArray({})    ➞    []

function toArray(singleObject = {}) {
    let returnArray = [];
    Object.keys(singleObject).forEach((key) => {
        returnArray.push(key, singleObject[key]);
    });
    return returnArray;
}

console.group("Exercise #5");
console.log("toArray({ a: 1, b: 2 }) ", toArray({ a: 1, b: 2 }) );
console.log("toArray({ shrimp: 15, tots: 12 })", toArray({ shrimp: 15, tots: 12 }));
console.log("toArray({})", toArray({}));
console.groupEnd();

