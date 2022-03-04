// * ============ VARIABLES ============ * \\
// ~ Variable Initialization ~ \\
// This occurs when a variable is declared.
// Here the variable is assigned a memory or space by the JavaScript engine.
// Because of this, once a variable is declared, it takes a value of undefined even before assignment.

var x; // Old way of declaring variables
let y; // ES6+ way of declaring a variable which is mutable and can be changed
const z = 0; // ES6+ way of declaring a variable which is immutable and cannot be changed

// ~ Variable Assignment ~ \\
// Variable assignment is the most important step when using a variable.
// Here the variable is assigned data which is a value using the assignment operator "=".
// Values in JavaScript take one of the standard JavaScript datatypes which are:
let age = 40; // Number
const name = "Chris"; // String
let developer = true | false; // Boolean
let someLocation = null; // Null
let blue; // undefined

// ~ Variable Naming ~ \\
// ✅ VALID
let man;
let woman3;
let blackDog; // This is the best way to name variables with several words (camelCase)

// ❌ INVALID
// let 1girl;   // No numbers at the start of a variable
// let -girl;   // No special characters at the start of a variable
// let ; 	      // No empty variable names
// const test; // "const" variables must be defined

// ~ Assigning Variable Values ~ \\
let a = 1;
let b = 2;
let c = 3;
// SAME
let d = 10,
  e = 30,
  f = 90;

// Expressions
const taco = "Ta" + "co"; // "Taco"
let answerToTheUniverse = 40 + 1 + 1; // 42

// Double Declarations
// let whoAmI = "Bill";
let whoAmI = "Will";
console.log("whoAmI:", whoAmI); // ERROR
