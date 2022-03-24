// EXERCISE 01
// Variables
var btnRandomColor = document.querySelector("[data-action='randomBackground']");
// functions
function applyRandomColors() {
    //changes the background and text color randomly when clicked
    btnRandomColor.style.color = getRandomColor();
    btnRandomColor.style.background = getRandomColor();
}
function getRandomColor() {
    var maxVal = 0xFFFFFF; // 16777215
    var randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    var randomNumberString = randomNumber.toString(16);
    var randColor = padLeft(randomNumberString, '0', 6);
    // console.log(randColor) ;
    return "#".concat(randColor.toUpperCase());
}
function padLeft(text, padChar, size) {
    return (String(padChar).repeat(size) + text).substr((size * -1), size);
}
// events
btnRandomColor.addEventListener("click", applyRandomColors);
// END OF EXERCIST 01
// // BEGIN EXERCISE 02
// const testArrayOne = [true, false, false, true, false];
// const testArrayTwo = [false, false, false, false];
// const testArrayThree = [];
// // Create a function that returns the number of true values in an array.
// function countOfTrue(booleanArray){
//     let count = 0;
//     booleanArray.forEach(element => {
//         //console.log(element);
//         if(element == true){
//             count++;
//         }
//         //count = (element == true)? count++: count;
//         //console.log(count);
//     });
//     //console.log(count);
//     return count;
// }
// console.log("countOfTrue(" + testArrayOne + ") = " + countOfTrue(testArrayOne));
// console.log("countOfTrue(" + testArrayTwo + ") = " + countOfTrue(testArrayTwo));
// console.log("countOfTrue(" + testArrayThree + ") = " + countOfTrue(testArrayThree));
// // END ESERCISE 02
// BEGIN EXERCISE 03
var butUpdateClock = document.querySelector("[data-action='updateClock']");
var butStopClock = document.querySelector("[data-action='stopClock']");
var clockHours12 = document.querySelector(".hours12");
var clockHours = document.querySelector(".hours");
var clockMinutes = document.querySelectorAll(".minutes");
var clockSeconds = document.querySelectorAll(".seconds");
var clockAMPM = document.querySelector(".ampm");
var clockInterval = 0;
function updateClock() {
    var currentDateTime = new Date();
    var curHour = currentDateTime.getHours(); //going to reuse this variable
    var curMin = currentDateTime.getMinutes();
    var curSec = currentDateTime.getSeconds();
    // handle the 24 hour clock
    clockHours.innerText = curHour < 10 ? "0".concat(curHour) : curHour.toString();
    // handle the collection of Min and Sec
    clockMinutes.forEach(function (item) {
        item.innerText = curMin < 10 ? "0".concat(curMin) : curMin.toString();
    });
    clockSeconds.forEach(function (item) {
        item.innerText = curSec < 10 ? "0".concat(curSec) : curSec.toString();
    });
    // handle the 12 hour clock
    if (curHour > 12) {
        // show PM and 12 hour clock
        curHour = curHour % 12;
        clockHours12.innerText = curHour < 10 ? "0".concat(curHour) : curHour.toString();
        clockAMPM.innerText = "PM";
    }
    else {
        clockHours12.innerText = curHour < 10 ? "0".concat(curHour) : curHour.toString();
        clockAMPM.innerText = "AM";
    }
    ;
}
function incrementClock() {
    // use this function to show the clock 
    // changing every second
    //console.log(clockInterval);
    if (clockInterval === 0) {
        clockInterval = setInterval(updateClock, 1000);
    }
    ;
}
function stopClock() {
    //console.log(clockInterval);
    if (clockInterval != 0) {
        //console.log('stopping the clock');
        clearInterval(clockInterval);
        clockInterval = 0;
    }
    ;
}
//console.log(butUpdateClock);
butUpdateClock.addEventListener("click", incrementClock);
butStopClock.addEventListener("click", stopClock);
//uncomment this code to run the clock always
//clockInterval = setInterval(updateClock, 1000);
// END ESERCISE 03
