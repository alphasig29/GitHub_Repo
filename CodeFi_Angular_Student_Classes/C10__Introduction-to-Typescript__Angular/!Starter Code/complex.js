// Complex Types ===================
var students = [];
var mixedBag; // don't use this
mixedBag = [2, "hello", false];
//  Objects ==============
var student;
student = {
    name: "James",
    age: 33,
    isStudent: true
};
// let bootcamp;
var bootcamp;
bootcamp = "CodeFi Coding Co.";
bootcamp = 101;
var randomStudent = {
    name: 'James',
    age: 33,
    isStudent: true
};
// Functions and Parameters
function add(a, b) {
    return a + b;
}
// Generics ===========================
function getID(value) {
    return value;
}
var userOneID = getID("stringID");
var userTwoID = getID(12345);
var userThreeID = getID(true);
//  Classes and Interfaces ================================
var Student = /** @class */ (function () {
    function Student(first, last, courses) {
        this.first = first;
        this.last = last;
        this.courses = courses;
    }
    return Student;
}());
var studentOne = new Student("Will", "Wilder", ["CodeFi"]);
