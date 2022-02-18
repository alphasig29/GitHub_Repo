// // * string * \\
// let username = "Administrator"


// // * number * \\
// let superSayanPower=9001;

// // * boolean * \\
// let isSuperSayan=true;

// // * special * \\  
// let nullData=null;
// let newValue = undefined;

// * object * \\
// let classmates=[
//     {name: "Michael Harris",
//     status: "sudent"},
//     {name: "Gabe",
//     status: "sudent"},
//     {name: "Meena",
//     status: "student"},
//     {name:"Sethf",
//     status:"student"},
//     {name: "Roger Smith",
//     status: "student"}
// ];

// * array * \\
//let studentArray = ["Michael Harris", "Gabe", "Meena", "Sethf", "Roger Smith"];


// * Declaring Variables * \\
//let variable1;

// Begin Exercise #2
let favFood=[
    {name: "Hamburger",
    price: 5.00},
    {name: "Bacon Cheese Burger",
    price: 7.50},
    {name: "Spaghetti",
    price: 6.50},
    {name:"Soup Bowl",
    price:3.75},
    {name: "Meatball Sandwich",
    price: 7.50}
];


function addFoodItemsToList() {
    //first locate the <ul> item
    const unorderedList = document.querySelector(".foodlist");  
    for (let i = 0; i< favFood.length; i++){
        console.log(favFood[i].name);
        const food = favFood[i];
        const foodListItem = document.createElement('li');
        foodListItem.innerText = food.name;
        unorderedList.appendChild(foodListItem);
    }
};

addFoodItemsToList();

// Begin Exercise #3
function arrayOfMultiples(num, length) {
    //frist create the return Array
    let returnArray = [];
    for (let i=0;i<length;i++){
        //crete a multiple of the passed number, and push it to the aray
        returnArray.push(num * (i + 1))
    }
    //return the array
    return returnArray;

};
console.log("array: arrayOfMultiples(7, 5) is " + arrayOfMultiples(7, 5));
//console.log(arrayOfMultiples(7, 5));

console.log("array: arrayOfMultiples(12, 10) is " + arrayOfMultiples(12, 10));
//console.log(arrayOfMultiples(12, 10));

console.log("array: arrayOfMultiples(17, 6) is " + arrayOfMultiples(17, 6));
//console.log(arrayOfMultiples(17, 6));