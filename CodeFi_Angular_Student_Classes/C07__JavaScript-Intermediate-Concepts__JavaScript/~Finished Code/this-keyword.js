// * ============ "THIS" KEYWORD ============ * \\
// ~ Global Binding (Default) ~ //
console.log("'this' in Global Scope:", this);

// ~ Implicit Binding ~ //
const classroom = {
  name: "High Five",
  students: ["Valory", "Zane", "Ipsum"],
  printStudents: function () {
    console.log("'this' in Implicit Scope (Function Dec):", this.students);
  },
  printStudentsES6: () =>
    console.log("'this' in Implicit Scope (ES6):", this.students), // 'this' refers to the global window object here
};

classroom.printStudents();
classroom.printStudentsES6();

// ~ Explicit Binding ~ //
const getName = function () {
  console.log("'this' in Explicit Scope:", this.name);
};

const player = {
  name: "Borgov",
  isHappy: false,
};

getName.call(player);

// ~ Constructor Binding ~ //
function Company(name) {
  this.name = name;
}

const codefi = new Company("Codefi");
console.log("'this' in Constructor Scope:", codefi.name);
