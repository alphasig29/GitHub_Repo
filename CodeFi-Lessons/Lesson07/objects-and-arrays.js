// * ============ OBJECTS & ARRAYS ============ * \\
// ~ OBJECTS ~ \\
// Objects stores data grouped together using key/value pairs
const myObj = {
  key:"Value",
  name: "test123",
  nestedInfo: {
    nestedKey:"nexted value",
    age: 42,
    location:{
      state: {
        name:"Missery",
        initials: "MO"
      },
    },
  },

  createdAt: new Date(),
  printText: (text) => console.log("text = " + text)
}

const myObjCreationDate = myObj.createdAt;
const muyObjCreationDate2 = myObj["createdAt"];
console.log("cretedAt date = " + myObjCreationDate);
console.log("cretedAt date = " + muyObjCreationDate2);

myObj.printText("meethods are function inside fo objects");














// Object Example

// Object Property Usage

// Object Method Usage

// Object Constructors
const student = new Object();
student.name="missy";
student.location="paducah";

console.log(student);




// ~ ARRAYS ~ \\
// Arrays stores information in a list-like format

// Array Example

// Accessing Arrays

// Array Constructor
const newBlankArray = new Array(99);
console.log("newBlankArray",newBlankArray);

// ~ Common Array Methods ~ \\
const students = [
  { name: "Medina", grade: 88 },
  { name: "Blake", grade: 72 },
  { name: "Roscoe", grade: 58 },
  { name: "Stephanie", grade: 99 },
  { name: "Edith", grade: 93 },
  { name: "Janey", grade: 34 },
  { name: "Ivan", grade: 89 },
];

// filter - returns a whole new array
const passingStudents = students.filter((student) => student.grade > 58);
console.log("passing students", passingStudents);

// map - want to edit some items in the array, returns a new array
// adding a new property to each object
const newStudents = students.map((student) => (student.isRegistered = true));


// sort - 
//sort hightest grades to the top
const sortedStudents = students.sort((a,b) => b.grade - a.grade);
//sorting by name (a string), A is diff than a (Upper first, then lower)
const sortedStudentsName = students.sort((a,b) => b.name > a.name ? -1 : 1);
console.log("sortedStudents ", sortedStudents);
console.log("sortedStudentsName ", sortedStudentsName);

// find - only returns one value, filter returns many ; 
//      find - returns first value that meets criteria
const classClown = students.find((student) => student.name === "Roscoe");
console.log("classClown", classClown);




// forEach - not for changing the arrray , doesn't return a value later

students.forEach((student) => console.log(student));

// some - returns true/false if any item meets the criteria

const hasFailingStudents = students.some((student) => student.grade < 59);
console.log("hasFailingStudents", hasFailingStudents);

// every
const hasAllFailingStudents = students.every((student) => student.grade > 9);
console.log("hasAllFailingStudents", hasAllFailingStudents);