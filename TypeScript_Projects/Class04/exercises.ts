        // EXERCISE 01
        // Variables
        const btnRandomColor = document.querySelector("[data-action='randomBackground']") as HTMLInputElement;
        
        // functions
        function applyRandomColors() {
            //changes the background and text color randomly when clicked
            btnRandomColor.style.color = getRandomColor();
            btnRandomColor.style.background = getRandomColor();

        }

        function getRandomColor() {
            let maxVal = 0xFFFFFF; // 16777215
            let randomNumber = Math.random() * maxVal; 
            randomNumber = Math.floor(randomNumber);
            let randomNumberString = randomNumber.toString(16);
            let randColor = padLeft(randomNumberString,'0',6);
            // console.log(randColor) ;
            return `#${randColor.toUpperCase()}`
        }

        function padLeft(text:string, padChar:string, size:number): string {
            return (String(padChar).repeat(size) + text).substr( (size * -1), size) ;
        }
        // events
        btnRandomColor.addEventListener("click",applyRandomColors); 
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
        const butUpdateClock = document.querySelector("[data-action='updateClock']") as HTMLInputElement;
        const butStopClock = document.querySelector("[data-action='stopClock']") as HTMLInputElement;
        const clockHours12 = document.querySelector(".hours12") as HTMLLabelElement;
        const clockHours = document.querySelector(".hours") as HTMLLabelElement;
        const clockMinutes = document.querySelectorAll<HTMLLabelElement>(".minutes");
        const clockSeconds = document.querySelectorAll<HTMLLabelElement>(".seconds");
        const clockAMPM = document.querySelector(".ampm") as HTMLLabelElement;
        let clockInterval: number = 0;

        function updateClock(){
            const currentDateTime = new Date();
            let curHour = currentDateTime.getHours(); //going to reuse this variable
            const curMin = currentDateTime.getMinutes();
            const curSec = currentDateTime.getSeconds();
            // handle the 24 hour clock
            clockHours.innerText = curHour < 10 ? `0${curHour}` : curHour.toString();
            // handle the collection of Min and Sec
            clockMinutes.forEach(item => {
                item.innerText = curMin < 10 ? `0${curMin}` : curMin.toString();
            });
            clockSeconds.forEach(item => {
                item.innerText = curSec < 10 ? `0${curSec}` : curSec.toString();
            });

            // handle the 12 hour clock
            if (curHour > 12){
                // show PM and 12 hour clock
                curHour = curHour % 12;
                clockHours12.innerText = curHour < 10 ? `0${curHour}` : curHour.toString();
                clockAMPM.innerText = "PM";
            } else {
                clockHours12.innerText = curHour < 10 ? `0${curHour}` : curHour.toString();
                clockAMPM.innerText = "AM";
            };
            
        }

        function incrementClock(){
            // use this function to show the clock 
            // changing every second
            //console.log(clockInterval);
            if (clockInterval === 0) {
                clockInterval = setInterval(updateClock, 1000);
            };
        }

        function stopClock(){
            //console.log(clockInterval);
            if(clockInterval != 0) {
                //console.log('stopping the clock');
                clearInterval(clockInterval);
                clockInterval = 0;
            };          
        }

        //console.log(butUpdateClock);
        butUpdateClock.addEventListener("click",incrementClock);
        butStopClock.addEventListener("click",stopClock);

        //uncomment this code to run the clock always
        //clockInterval = setInterval(updateClock, 1000);

        // END ESERCISE 03

