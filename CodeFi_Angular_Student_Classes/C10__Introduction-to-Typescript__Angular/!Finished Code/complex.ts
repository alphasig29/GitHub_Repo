// * COMPLEX TYPES START * \\
// Arrays
let students: string[];

students = ["Quinton", "Betty", "Mary"];

let mixedBag: any[];

mixedBag = [2, "Hello", false];

// Objects
let student: {
  name: string;
  age: number;
  isStudent: boolean;
};

student = {
  name: "James",
  age: 33,
  isStudent: true,
  //   hasPets: true
};

// Type inference & Unions
let course = "Codefi Coding Bootcamp";
// course = 123 // Type intferences causes an error

let bootcamp: string | number;
bootcamp = "Codefi Coding Bootcamp";
bootcamp = 123;

// Type Aliases
type CodefiPerson = {
  name: string;
  age: number;
  isStudent: boolean;
};

let randomStudent: CodefiPerson = {
  name: "James",
  age: 33,
  isStudent: true,
};
let currCodeCoach: CodefiPerson = {
  name: "Chris",
  age: 99,
  isStudent: false,
};

// Functions & Parameters
function add(a: number, b: number): number {
  return a + b;
}

function printName(name: string): void {
  console.log(name);
}

// COMPLEX TYPES END \\

// * GENERICS START * \\
function getId<Type>(value: Type): Type {
  return value;
}

let userOneId = getId<String>("stringId_userOne");
let userTwoId = getId<Number>(34);
let userThreeHasId = getId<Boolean>(true);
// GENERICS END \\

// * CLASSES & INTERFACES START * \\
interface StudentInterface {
  first: string;
  last: string;
  enroll: (courseName: string) => void;
  listCourses: () => string[];
}

class Student implements StudentInterface {
  constructor(
    public first: string,
    public last: string,
    private courses: string[]
  ) {}

  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const studentOne = new Student("Will", "Wilder", ["Codefi Front-End Bootcamp"]);
studentOne.enroll("Codefi Back-End Bootcamp");

// studentOne.courses
studentOne.listCourses();

console.log("studentOne:", studentOne);
// CLASSES & INTERFACES END \\
