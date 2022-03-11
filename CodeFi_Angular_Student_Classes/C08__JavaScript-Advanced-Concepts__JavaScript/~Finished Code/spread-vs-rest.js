// * ============ SPREAD vs REST ============ * \\
// ~~~~~~~ REST OPERATOR ~~~~~~~ \\
console.groupCollapsed("Rest Operator");

function sumOf(...args) {
  console.log("args:", args);

  let sum = 0;

  args.forEach((arg) => (sum += arg));

  return sum;
}

const testCalculation = sumOf(1, 2, 5, 8);

console.log("testCalculation:", testCalculation);
console.groupEnd();

// ~~~~~~~ SPREAD OPERATOR ~~~~~~~ \\
const ninthGraders = ["Jennifer", "Berry", "Ashley", "Bernard"];
const tenthGraders = ["Jason", "Amy", "Samuel", "Cook"];
const completeListOfStudents = [...ninthGraders, ...tenthGraders];

console.groupCollapsed("Spread Operator");
console.log("completeListOfStudents:", completeListOfStudents);
console.groupEnd();
