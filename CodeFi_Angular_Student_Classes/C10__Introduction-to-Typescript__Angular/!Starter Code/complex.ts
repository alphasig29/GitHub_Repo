// Complex Types ===================

let students: string[] = [];

let mixedBag: any[]; // don't use this
mixedBag = [2, "hello", false];

//  Objects ==============

let student: {
    name:string;
    age: number;
    isStudent: boolean;
};

student = {
    name: "James",
    age: 33,
    isStudent: true
};

// let bootcamp;
let bootcamp: string | number;

bootcamp = "CodeFi Coding Co.";
bootcamp = 101;

//  Aliases =====================

type CodeFiPerson = {
    name: string;
    age: number;
    isStudent: boolean
}

let randomStudent: CodeFiPerson = {
    name: 'James',
    age: 33,
    isStudent: true
};

// Functions and Parameters

function add(a: number ,b: number) : number {
    return a + b;
}

// Generics ===========================

function getID<T>(value: T):T {
    return value;
}

let userOneID = getID("stringID");
let userTwoID = getID(12345);
let userThreeID = getID(true);


//  Classes and Interfaces ================================

class Student implements IStudent {
    constructor(
        public first: string,
        public last: string,
        private courses: string[]
        ){}

    enroll(courseName: string){
        this.courses.push(courseName);
    }

    listCourses(){
        return this.courses.slice();
    }
}

const studentOne = new Student("Will", "Wilder", ["CodeFi"]);
studentOne.listCourses();
studentOne.enroll("Back-end Bootcamp");


interface IStudent {
    first: string;
    last:   string;
    enroll:(courseName:string) => void;
    listCourses:() => string[];
}





