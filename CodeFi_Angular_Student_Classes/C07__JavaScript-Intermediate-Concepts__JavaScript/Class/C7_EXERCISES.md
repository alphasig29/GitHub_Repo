# JavaScript Intermediate Concepts (Class 7)

## Exercise #1: Basic

**Aim**: Write a function `redundantReturn` that takes in a string `str` and returns a function that returns str.

---

---

## Exercise #2: Intermediate

Closures are functions that remember their lexical environments. Lexical environments mean the environment in which the function was declared.

```javascript
function parent(x) {
  return function closure() {
    // Closure is declared here.
    return x;
  };
}

const remember = parent("remembers me");
// Seems like the variable x would be gone after
// parent is executed, but it's not.

closure();
// Returns "remembers me" because the inner
// function remembers x.
```

**Aim**: Fix the code to print out the string message.


---

---

## Exercise #3: Intermediate

You will be given an array of drinks, with each drink being an object with two properties: `name` and `price`. Create a function with the drinks array as an argument and return the drinks objects sorted by price in ascending order.

Assume that the following array of drink objects needs to be sorted:

```js
drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
];
```

The output of the sorted drinks object will be:

_Examples_

```js
sortDrinkByPrice(drinks)    ➞    [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
```

---

---

## Exercise #4: Intermediate

**Aim**: Create the function that takes an array with objects and returns the sum of people's budgets.

_Examples_

```js
getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
])    ➞    65700

getBudgets([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600 }
])    ➞    62600
```

---

---

## Exercise #5: Advanced

Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

_Examples_

```js
toArray({ a: 1, b: 2 })    ➞    [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 })    ➞    [["shrimp", 15], ["tots", 12]]

toArray({})    ➞    []
```
