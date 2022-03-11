/*
## Exercise #1: Intermediate

**Aim**: Create a function that takes a "base number" as an argument. 
This function should return another function that takes a new 
argument and returns the sum of the "base number" and the new argument.

// Calling makePlusFunction(5) returns a new function that takes an input,
// and returns the result when adding 5 to it.

const plusFive = makePlusFunction(5)

plusFive(2)    ➞    7

plusFive(-8)    ➞    -3


*/

function makePlusFunction(initSum = 0){
    return function plusFive(additionalIncrement) {
        return initSum + additionalIncrement;
    }
}



console.groupCollapsed("Exercise #1 - closure function");
const plusFive = makePlusFunction(5);
// console.log('plusFive', plusFive);
console.log('plusFive(2)', plusFive(2));
console.log('plusFive(-8)', plusFive(-8));

const plusTen = makePlusFunction(10);
console.log('plusTen(0)', plusTen(0));
console.log('plusTen(188)', plusTen(188));
console.log('plusFive(plusTen(0))', plusFive(plusTen(0)));

console.groupEnd();


/*
## Exercise #2: Intermediate

**Aim**: Create a function that takes a string as input, capitalizes a letter if its ASCII code is even, and returns its lower case version if its ASCII code is odd.

_Examples_

```js
asciiCapitalize("to be or not to be!")    ➞    "To Be oR NoT To Be!"

asciiCapitalize("THE LITTLE MERMAID")    ➞    "THe LiTTLe meRmaiD"

asciiCapitalize("Oh what a beautiful morning.")    ➞    "oH wHaT a BeauTiFuL moRNiNg."


*/

function asciiCapitalize([...args]){
    let returnString = "";
    // loop over the passed string [single char] array
    args.forEach((arg) => {
        // console.log(arg, arg.charCodeAt(0));
        if (arg.charCodeAt(0)% 2 == 0) {
            returnString += arg.toUpperCase();
        } else {
            returnString += arg.toLowerCase();
        }

 })
 return returnString;

}


console.groupCollapsed("Exercise #2 - ascii fun function");
console.log('asciiCapitalize("to be or not to be!")', asciiCapitalize("to be or not to be!"));
console.log('asciiCapitalize("THE LITTLE MERMAID")', asciiCapitalize("THE LITTLE MERMAID"));
console.log('asciiCapitalize("Oh what a beautiful morning.")', asciiCapitalize("Oh what a beautiful morning."));
console.groupEnd();


/*
## Exercise #3: Advanced

**Aim**: Create a function to check if a candidate is qualified 
in an imaginary coding interview of an imaginary tech startup.

The criteria for a candidate to be qualified in the coding interview is:

- The candidate should have completed all the questions.
- The maximum time given to complete the interview is 120 minutes.
- The maximum time given for very easy questions is 5 minutes each.
- The maximum time given for easy questions is 10 minutes each.
- The maximum time given for medium questions is 15 minutes each.
- The maximum time given for hard questions is 20 minutes each.

If all the above conditions are satisfied, return "qualified", 
    else return "disqualified".

You will be given an array of time taken by a candidate to solve 
a particular question and the total time the candidate takes to 
complete the interview.

Given an array, in a true condition will always be in the 
format [very easy, very easy, easy, easy, medium, medium, hard, hard].

The maximum time to complete the interview 
includes a buffer time of 20 minutes.

interview([5, 5, 10, 10, 15, 15, 20, 20], 120)    ➞    "qualified"

interview([2, 3, 8, 6, 5, 12, 10, 18], 64)    ➞     "qualified"

interview([5, 5, 10, 10, 25, 15, 20, 20], 120)    ➞    "disqualified"
// Exceeded the time limit for a medium question.

interview([5, 5, 10, 10, 15, 15, 20], 120)    ➞    "disqualified"
// Did not complete all the questions.

interview([5, 5, 10, 10, 15, 15, 20, 20], 130)    ➞    "disqualified"
// Solved all the questions in their respected time limits but exceeded the total time limit of the interview.

*/

function interview(questionTimes, totalTime){
    // let result = "qualified";
    // console.log(questionTimes.length);
    if (totalTime > 120) {return "disqualified Exam Time > 120"};
    if (questionTimes.length < 8) {return "disqualified Did NOT Finish"};
    if (questionTimes[0] > 5 || questionTimes[1] > 5)  {return "disqualified very easy > 5"};
    if (questionTimes[2] > 10 || questionTimes[3] > 10) {return "disqualified easy > 10"};
    if (questionTimes[4] > 15 || questionTimes[5] > 15) {return "disqualified medium > 15"};
    if (questionTimes[6] > 20 || questionTimes[7] > 20) {return "disqualified hare > 20"};
    return "qualified";

}

function interviewSpread(...questionTimes){
    // evaluate each rule/criteria, and if any fail, immeditely return  disqualified
    if (questionTimes[[1][0]] > 120) {return "disqualified Exam Time > 120"};
    if (questionTimes[0].length < 8) {return "disqualified Dod NOT Finish"};
    if (questionTimes[0][0] > 5 || questionTimes[0][1] > 5)  {return "disqualified very easy >5"};
    if (questionTimes[0][2] > 10 || questionTimes[0][3] > 10) {return "disqualified easy >10"};
    if (questionTimes[0][4] > 15 || questionTimes[0][5] > 15) {return "disqualified medium >15"};
    if (questionTimes[0][6] > 20 || questionTimes[0][7] > 20) {return "disqualified hard >20"};
    return "qualified";

}

console.groupCollapsed("Exercise #3a - Interview results - params(array, totalTime)");
console.log('interview([5, 5, 10, 10, 15, 15, 20, 20], 120)', interview([5, 5, 10, 10, 15, 15, 20, 20], 120));
console.log('interview([2, 3, 8, 6, 5, 12, 10, 18], 64)', interview([2, 3, 8, 6, 5, 12, 10, 18], 64));
console.log('interview([5, 5, 10, 10, 25, 15, 20, 20], 120)', interview([5, 5, 10, 10, 25, 15, 20, 20], 120));
console.log('interview([5, 5, 10, 10, 15, 15, 20], 120)', interview([5, 5, 10, 10, 15, 15, 20], 120));
console.log('interview([5, 5, 10, 10, 15, 15, 20, 20], 130)', interview([5, 5, 10, 10, 15, 15, 20, 20], 130));
console.groupEnd()

console.groupCollapsed("Exercise #3b Spread operator - Interview results - param(...array)");
console.log('interviewSpread([5, 5, 10, 10, 15, 15, 20, 20], 120)', interviewSpread([5, 5, 10, 10, 15, 15, 20, 20], 120));
console.log('interviewSpread([2, 3, 8, 6, 5, 12, 10, 18], 64)', interviewSpread([2, 3, 8, 6, 5, 12, 10, 18], 64));
console.log('interviewSpread([5, 5, 10, 10, 25, 15, 20, 20], 120)', interviewSpread([5, 5, 10, 10, 25, 15, 20, 20], 120));
console.log('interviewSpread([5, 5, 10, 10, 15, 15, 20], 120)', interviewSpread([5, 5, 10, 10, 15, 15, 20], 120));
console.log('interviewSpread([5, 5, 10, 10, 15, 15, 20, 20], 130)', interviewSpread([5, 5, 10, 10, 15, 15, 20, 20], 130));


console.groupEnd();