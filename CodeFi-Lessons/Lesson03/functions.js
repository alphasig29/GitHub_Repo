

// Exercise #1
function printArgument(someArgument){
    console.log(`You have entered ${someArgument}`);
}

printArgument(3.14);

// Exercise #2
const a_user_Object = {
    name: "Johnny",
    age: 40,
    height: "6'1",
    job: "coder"
}

function printUsers(a_user) {
    console.log(`User name is ${a_user.name}, 
    age is ${a_user.age}, 
    height is ${a_user.height},
    and works as a ${a_user.job}.  WOW! `);
}

// Esercise #3
/*
**Aim**: Create a function that takes an object and returns 
the keys and values as separate arrays. Return the keys 
sorted alphabetically and their corresponding values in the same order.

_Examples_

```js
keysAndValues({ a: 1, b: 2, c: 3 })
   ➞    [["a", "b", "c"], [1, 2, 3]]
*/

const objectUnsorted = {
    c:3,
    b:2,
    a:1
};

function sortKeyAndValues(someObject){
    // found this online, using the 'reduce' method.
    const objectSorted = Object.keys(someObject).sort().reduce(
          (obj, key) => { 
          obj[key] = someObject[key]; 
          return obj;
        }, 
        {}
      );
      return objectSorted;
    }
    
console.log(sortKeyAndValues(objectUnsorted));

function sortObjectIntoArrays(someObject) {
    // first we need to sort the Keys of the object into an array
    let keyArray = Object.keys(someObject).sort();
    console.log(keyArray);
    
    // Now use the sorted keys to build a 2nd array of the related key's value
    let valueArray = []
    for (let elem of keyArray) {
        valueArray.push(someObject[elem]);
    }
    console.log(valueArray);
}

sortObjectIntoArrays(objectUnsorted);
