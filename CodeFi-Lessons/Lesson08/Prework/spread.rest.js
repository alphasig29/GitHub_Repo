/*
https://www.better.dev/javascripts-three-dots-spread-vs-rest-operators

Rest parameter: collects all remaining elements into an array.

Spread operator: allows iterables ( arrays / objects / strings) 
    to be expanded into single arguments/elements.
*/

console.group('Spread Operator vs Rest Operator');

function add(x, y) {
    return x + y;
  }
  
  // returns 3-> only first 2 params are used
  console.log('add(1, 2, 3, 4, 5) = ', add(1, 2, 3, 4, 5));
  
  
  /*
  REST PARAMETERS

  With rest parameters we can gather any number 
  of arguments into an array and do what we want 
  with them. So we can re-write the add function like this:
  */

  function add(...args) {
    let result = 0;
  
    for (let arg of args) result += arg;
  
    return result;
  }
  // returns 1
  console.log('add(1) = ', add(1));
  // returns 3
  console.log('add(1,2) =', add(1,2));
  // returns 15
  console.log('add(1, 2, 3, 4, 5) =', add(1, 2, 3, 4, 5));

// Another example ==============
function xyz(x, y, ...z) {
    console.log(x, ' ', y);   // hey hello
  
    console.log(z);           // ["wassup", "goodmorning", "hi", "howdy"]
    console.log(z[0]);        // wassup
    console.log(z.length);    // 4
  }
  
  xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy")


/*
SPREAD OPERATORS
The spread operator allows us to expand elements. 
With rest parameters we were able to get a list 
of arguments into an array. spread operators however, 
let us unpack elements in an array to single/individual arguments.
*/

const arr = ["Joy", "Wangari", "Warugu"];
const newArr = ["joykare", ...arr]; //[ 'joykare', 'Joy', 'Wangari', 'Warugu' ]
console.log('newArr', newArr);

//this works as well (starring with ....)
const myNames = [...arr, "joykare"];
console.log('myNames', myNames);

//We can use the spread operator to copy an array.
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log('arr2', arr2);

// pass as a list of arguments in a function
function add2(a, b, c) {
    return a + b + c ;
  }
  
  const args = [1, 2, 3];
  
  console.log('add2(...args)', add2(...args));

// can break down a string - any iterable also works
const str = 'joykare'
console.log('str', str);
console.log('[...str]', [...str]);

console.groupEnd();





