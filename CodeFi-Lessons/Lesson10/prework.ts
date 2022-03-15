// command to compile TS into JS:  npx tsc prework.ts

import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript";

function add(a: number, b: number){
    return a = b;
}

const result = add(2, 5);
console.log(result);

//primitives : number or : string or : boolean

// arrays
let hobbies: string[]; // number[] or boolean[]
hobbies = ['Sports', 'Cooking'];

// objects - no '='
let person: {
    name: string;
    age: number;
};

person  = {
    name: 'Max',
    age: 32
};

// array of objects, notice the brackets []
let people :{
    name:   string;
    age: number;
}[];


// type inference - best practice is to just use TS inference
let course = 'reach - The Complete Guide';
// the next line is an error in TS
// course = 1234; // error, string is infered by TypeScript, with out the union type

// union types
let courseID : string | number = 'reach - The Complete Guide';
courseID = 12345; // no error

// can use a type alias
type Student = {
    name: string;
    age: number;
};

let computerStudent: Student;  // using the type alias
let computerStudents: Student[]; // can make an array 

// functions and  types ==========================

// allow TS to infer add1 is number, so don't add ': number' before the {}
function add1(a: number, b: number) : number {
    return a = b;
}

// print is a built-in function, so this would error when compiled
// the return type of this function is 'void'
function printValue(value:any){
    console.log(value);
}

// Generics =========================================
 
function insertToBeginning(array: any[], value: any){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertToBeginning(demoArray, -1);
// becase we allow the function to accept numbers or strings, using any doesn't help us in TS

// we can assign the function to accept certain types, so that strings and numbers are not mixed
// now, everything is of type T, so the arguments passed will be the same, and now TS infer's from the const values
function insertToBeginning1<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}
const demoArray1 = [1, 2, 3];
const updatedArray1 = insertToBeginning1(demoArray, -1); //insertToBeginning1 retuns number - hover over function
cosnt stringArray = insertToBeginning1(['a', 'b', 'c'], 'd'); //insertToBeginning1 retuns string - hover over function

// Classes and TypeScript ===================================

class MyStudent {
    firstName: string;
    lastName: string;
    age: number;
    private courses: string[]; // this is not public

    constructor(first: string, last: string, age: number, courses: string[]){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }

    // add a method
    enroll(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const codefiStudent = new MyStudent('Max', 'Schwartz', 3, ['Angular', 'TypeScript', 'JavaScript']);
codefiStudent.enroll('React');
// codefiStudent.courses // this is private, and is an error in TS

// codefiStudent.courses => Angular, TypeScript, JavaScript, React


// only use the Constructor method fo the class
class MyStudent1 {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[]; // this is not public

    constructor(
        public firstName: string, 
        public lastName:  string,
        public age: number, 
        private courses: string[]
        ){ }

        // add a method
        enroll(courseName: string) {
            this.courses.push(courseName);
        }
    
        listCourses() {
            return this.courses.slice();
        }
}


// interfaces - only exists in TS ================================================
// will  not be compiled to JS
// this is just object type definitions
// interfaces can be implemented by classes

interface Human {
    firstName: string;
    age: number;

    greet: () => void;

}

let max: Human;

max = {
    firstName: 'Max',
    age : 32,
    greet() {
        console.log('Hello!');
    }
};

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log('Hello!!!!');
    };
}











