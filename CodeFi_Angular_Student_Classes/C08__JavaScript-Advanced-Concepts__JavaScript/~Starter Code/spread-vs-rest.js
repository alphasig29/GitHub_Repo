// * ============ SPREAD vs REST ============ * \\
// ~~~~~~~ REST OPERATOR ~~~~~~~ \\

function getSum0(a, b, c) {
    return a + b+ c;

}

function getSum(...args){
   let sum = 0;

   args.forEach((arg) => sum += arg);
   return sum;
}

console.groupCollapsed("Rest Operator");
const testCalc = getSum(10,4,6,9,30,3);
console.log("testCalc", testCalc);


console.groupEnd();

// ~~~~~~~ SPREAD OPERATOR ~~~~~~~ \\

// const allStudents = [...ninethGraders,...tenthGraders];
// apread -> ... used inside of a fun arg, turn the items into an array
// rest -> ... used on an existing array, takes items out of an array (to a list)



console.groupCollapsed("Spread Operator");

console.groupEnd();
