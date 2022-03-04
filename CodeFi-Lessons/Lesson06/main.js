// Exercise #1 =========================================

// **Aim**: Create a function that calculates the area 
//of a triangle given the base and height as arguments. 
//Call the function a few times with different inputs.

//console.log("EXERCIST # 1 Area of a Triangle ======================");

function triangeArea(base = 0, height = 0) {
    return base * height / 2
}

console.group("EXERCIST # 1 Area of a Triangle ======================");
console.log('base=20, height = 5, area = ' + triangeArea(20,5));
console.log('base=6.8, height = 2.8, area = ' + triangeArea(6.8,2.8));
console.log('base=16, height = 8, area = ' + triangeArea(16,8));
console.log('base=4, height = 2, area = ' + triangeArea(4,2));
console.log('base=9, height = 7, area = ' + triangeArea(9,7));
console.groupEnd();


//console.log("EXERCIST # 2 Create List of Values in an Array ======================");
// Exercise #2 ===========================================
// **Aim**: Write a function that returns an array containing all 
// the numbers inclusive to that range given the start and end values. 
// See examples below.
// reversibleInclusiveList(1, 5)    ➞    [1, 2, 3, 4, 5]
// reversibleInclusiveList(2, 8)    ➞    [2, 3, 4, 5, 6, 7, 8]
// reversibleInclusiveList(10, 20)    ➞   [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// reversibleInclusiveList(24, 17)    ➞   [24, 23, 22, 21, 20, 19, 18, 17]

function reversibleInclusiveList(start = 0, finish = 0){
    // create a string to return
    let returnArray = [];
    //determine if start>finish or finish<start to set how we will increment our values
    if (start <= finish) {
        // string is like 1 to 9
        for (let i = start; i <= finish; i++){
            // add the number to the array
            returnArray.push(i);
        };
    } else {
        // string is like 9 to 1
        //for (let i = finish; i <= start; i++){  //alternate way to do this
        for (let i = start; i >= finish; i--){
            // add the number to the array
            returnArray.push(i);
        };
    };
 
    
    // now that we have the comma seperated numbers, add brackets and return it
    return returnArray;
}

console.group("EXERCIST # 2 Create List of Values in an Array ======================");
console.log("reversibleInclusiveList(1, 5) -> " + reversibleInclusiveList(1, 5));
console.log("reversibleInclusiveList(2, 8) -> " + reversibleInclusiveList(2, 8));
console.log("reversibleInclusiveList(10, 20) -> " + reversibleInclusiveList(10, 20));
console.log("reversibleInclusiveList(24, 17) -> " + reversibleInclusiveList(24, 17));
console.groupEnd();

//console.log("EXERCISE # 3 Function to Calc to Add the Product of Sub-Arrays ======================");
// Exercise #3
// **Aim**: Create a function that takes three collections 
// of arguments and returns the sum of the product of the grouped numbers.
// product([[1,2],[1,1],[2,3]])    ➞    9
// // 1 * 2 + 1 * 1 + 2 * 3
// product([[10,2],[5,0],[2,3]])    ➞    26
// // 10 * 2 + 5 * 0 + 2 * 3
// product([[1,2],[2,3],[3,4]])   ➞    20
// // 1 * 2 + 2 * 3 + 3 * 4
// product([[1,2],[0,3],[3,0]])    ➞    2
// // 1 * 2 + 0 * 3 + 3 * 0

function product(arrayOfArrays = []) {
    // get a value to return
    let returnValue = 0;
    // we wil assume that the format of each 'sub array' is only 2 numbers
    arrayOfArrays.forEach(element => {
        // console.log(element);
        returnValue += (element[0] * element[1]);
        // console.log("returnValue = " + element + "->" + returnValue);
    });
    return returnValue;
}

function sumOfProduct(arrayOfArrays = []) {
    // get a value to return
    let returnValue = 0;

    // we wil assume that the format of each 'sub array' is only 2 numbers
    arrayOfArrays.forEach(element => {
        let productValue = 1;
        // console.log(element);
        element.forEach(e => {
            productValue *= e;
        });
        returnValue += productValue;
        // console.log("returnValue = " + element + "->" + returnValue);
    });
    return returnValue;
}

console.group("EXERCISE # 3 Function to Calc to Add the Product of Sub-Arrays ======================");
console.log("product([[1,2],[1,1],[2,3]]) expected 9 = " + product([[1,2],[1,1],[2,3]]));
console.log("product([[10,2],[5,0],[2,3]]) expected 26 = " + product([[10,2],[5,0],[2,3]]));
console.log("product([[1,2],[2,3],[3,4]]) expected 20 = " + product([[1,2],[2,3],[3,4]]));
console.log("product([[1,2],[0,3],[3,0]]) expected 2 = " + product([[1,2],[0,3],[3,0]]));
console.groupEnd();

console.group("EXERCISE # 3-alt Function to Calc to Add the Product of Sub-Arrays, sub array unlimited elements ======================");
//using nested ForEach loops
console.log("sumOfProduct([[1,2,3],[1,1],[2,3]]) expected 13 = " + sumOfProduct([[1,2,3],[1,1],[2,3]]));
console.log("sumOfProduct([[10,2,2],[5,0],[2,3,4]]) expected 64 = " + sumOfProduct([[10,2,2],[5,0],[2,3,4]]));
console.log("sumOfProduct([[1,2,5],[2,3,3],[3,4,4]]) expected 76 = " + sumOfProduct([[1,2,5],[2,3,3],[3,4,4]]));
console.log("sumOfProduct([[1,2],[0,3],[3,0]]) expected 2 = " + sumOfProduct([[1,2],[0,3],[3,0]]));
console.groupEnd();