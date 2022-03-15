"use strict";
// command to compile TS into JS:  npx tsc prework.ts
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
function add(a, b) {
    return a = b;
}
var result = add(2, 5);
console.log(result);
//primitives : number or : string or : boolean
// arrays
var hobbies; // number[] or boolean[]
hobbies = ['Sports', 'Cooking'];
// objects - no '='
var person;
person = {
    name: 'Max',
    age: 32
};
// array of objects, notice the brackets []
var people;
// type inference - best practice is to just use TS inference
var course = 'reach - The Complete Guide';
// the next line is an error in TS
// course = 1234; // error, string is infered by TypeScript, with out the union type
// union types
var courseID = 'reach - The Complete Guide';
courseID = 12345; // no error
var computerStudent; // using the type alias
var computerStudents; // can make an array 
// functions and  types ==========================
// allow TS to infer add1 is number, so don't add ': number' before the {}
function add1(a, b) {
    return a = b;
}
// print is a built-in function, so this would error when compiled
// the return type of this function is 'void'
function printValue(value) {
    console.log(value);
}
// Generics =========================================
function insertToBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertToBeginning(demoArray, -1);
// becase we allow the function to accept numbers or strings, using any doesn't help us in TS
// we can assign the function to accept certain types, so that strings and numbers are not mixed
// now, everything is of type T, so the arguments passed will be the same, and now TS infer's from the const values
function insertToBeginning1(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray1 = [1, 2, 3];
var updatedArray1 = insertToBeginning1(demoArray, -1); //insertToBeginning1 retuns number - hover over function
cosnt;
stringArray = insertToBeginning1(['a', 'b', 'c'], 'd'); //insertToBeginning1 retuns string - hover over function
// Classes and TypeScript ===================================
var MyStudent = /** @class */ (function () {
    function MyStudent(first, last, age, courses) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }
    // add a method
    MyStudent.prototype.enroll = function (courseName) {
        this.courses.push(courseName);
    };
    MyStudent.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return MyStudent;
}());
var codefiStudent = new MyStudent('Max', 'Schwartz', 3, ['Angular', 'TypeScript', 'JavaScript']);
codefiStudent.enroll('React');
// codefiStudent.courses // this is private, and is an error in TS
// codefiStudent.courses => Angular, TypeScript, JavaScript, React
// only use the Constructor method fo the class
var MyStudent1 = /** @class */ (function () {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[]; // this is not public
    function MyStudent1(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    // add a method
    MyStudent1.prototype.enroll = function (courseName) {
        this.courses.push(courseName);
    };
    MyStudent1.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return MyStudent1;
}());
var max;
max = {
    firstName: 'Max',
    age: 32,
    greet: function () {
        console.log('Hello!');
    }
};
var Instructor = /** @class */ (function () {
    function Instructor() {
    }
    Instructor.prototype.greet = function () {
        console.log('Hello!!!!');
    };
    ;
    return Instructor;
}());
