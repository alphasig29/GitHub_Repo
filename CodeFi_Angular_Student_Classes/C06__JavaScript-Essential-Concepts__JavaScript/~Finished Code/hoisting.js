// * ============ HOISTING ============ * \\
// ~ DEMO 1 START ~ \\
// Variable declaration is hoisted. Assignment doesn't happen until later.
let someVar;

function checkIfHoisted() {
  let someVar = 10;
  console.log("someVar inside function:", someVar); // 10
}

checkIfHoisted();

console.log("someVar after function:", someVar); // undefined
// ~ DEMO 1 END ~ \\

// ~ DEMO 2 START ~ \\
let highVar = 99;

let midVar;

fakeoutFunc();

midVar = 44;

function fakeoutFunc() {
  console.log("Still Works!");
  console.log("highVar:", highVar);
  console.log("midVar:", midVar);
  console.log("lowVar:", lowVar);
}

let lowVar = 1;
// ~ DEMO 2 END ~ \\
