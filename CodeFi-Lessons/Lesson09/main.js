// Closures

const foods = [
    {name: "apple",
price: 7,
type: "fruit"},
{name: "strawberry",
price: 6,
type: "fruit"},
{name: "bananna",
price: 2,
type: "fruit"},
{ name: "roger",
type: "customer"},
{ name: "Will",
type: "customer"}
]

const customers = ["roger", "john", "will", "too Many"]

function makeSmoothie(foods) {
    console.log("foods:", foods);
    const fruits = foods.filter((food) => food.type === "fruit");
    const fruitNames = fruits.map((fruit) => fruit.name)    ;

    return function prepareJuice(people) {
        console.log("people", people);
        for (let i=0; i < people.length; i++) {
            if (fruits[i] != undefined) {
                console.log(`${people[i]} gets a ${fruitNames[1]}`);
            } else {
                console.log("Not enough fruites for all the customers");
            };
        }
    };
};
    




const smoothiePrep = makeSmoothie(foods);
// console.log("smoothiePrep", smoothiePrep());
smoothiePrep(customers);
