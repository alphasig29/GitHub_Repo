// * ============ "THIS" KEYWORD ============ * \\
// ~ Global Binding (Default) ~ //
//console.log("GLOBAL" , this); // window



// ~ Implicit Binding ~ //
const classroom = {
    name: "Virtual High School",
    printName: function() {
        console.log("impicit: " , this.name);
    },
    printNameES6: () => console.log("Impicit ES6:", this.name)
    //printNameES6: () => console.log("Impicit ES6:", this ) // retuns the Window
};

classroom.printName(); //'virtual HS' 
classroom.printNameES6(); //returns blanks - using 'this' inside of and arrow function doesn't work

// ~ Explicit Binding ~ //

const getName = function () {
    console.log("Explicit:", this.name);
};

const player = {
    name: "putin",
    isHappy: false
};

getName.call(player);




// ~ Constructor Binding ~ // -notice the capital letter - used more in Angular
function Company(name){
    this.name = name;
}

const codefi = new Company("CodeFi");
console.log("Constructor", codefi.name);
