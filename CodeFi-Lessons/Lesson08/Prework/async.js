async function myRide() {
    return '2017 Dodge Charger';
}

function yourRide() {
    return Promise.resolve('2017 Dodge Charger');
}

function foo() {
    return Promise.reject(25);
}

// // foo() is equivalent to 
// async function() {
//     throw 25;
// }


async function myDate2() {
    try {
        let dateDetails = await date;
        let message = await orderUber(dateDetails);
        console.log('async: ' + message);
    } catch(error) {
        console.log(error.message);
    }
}

(async () => {
    await myDate2();
})();

// ASYNC Functions and AWAIT ========================
//async function ALWAYS return a Promise
async function asyncFunc0(){
    return 'hey!';
}

/*
In the case where we explicitly return something 
that is not a promise, like above, the return value 
is automatically wrapped into a resolved promise 
with the resolved value being the non-promise. 
For the code above, 
asyncFunc().then(result => console.log(result)) 
will return the string Hey!.
*/

// ==========================
/*
The await keyword can only be used within an async block, 
otherwise it'll throw a syntax error. This means you 
cannot use await in the top level of our code,
 basically, don't use it by itself.
*/

async function asyncFunc1() {
    // retch ddata from a url endpoint
    const data = await axios.get("/some_url_endpoint");
    return data;
}

// this is cleaner =============================

async function asyncFunc2() {
    //fetch data from url endpoint
    const response = await axios.get("/some_url_endpoint");
    const data = await response.json(); 

    return data;
}

// error handling using Try/Catch =================
async function asyncFunc3() {
    try {
    //fetch data from url endpoint
    const response = await axios.get("/some_url_endpoint");
    const data = await response.json(); 
    return data;

    } catch(error) {
        console.log("error: ", error);
        alert(error); // catches both errors
    }
}

// // can append .catch() to the promise generate by the async func
// asyncFunc3().catch((error) => {
//     //handle errors appropriately
// });

// ==========================

class Example{
    async asyncMethod() {
        const data = await asyncFunc3();
        return data;
    }
}

const exampleClass = new Example();
// exampleClass.asyncMethod().then(// do whatever you want with the result);

// ================================
// we can append .the() on an await
async function asyncFunc4() {
    // fetch data from a url endpoint
    const data = await axios.get("/some_url_endpoint")
      .then((result) => {return result.names});
  
    return data;
  }

// ====================================
// If we have multiple promises we could use Promise.all with await.
async function asyncFunc5() {
    const response = await Promise.all([
      axios.get("/some_url_endpoint"),
      axios.get("/some_url_endpoint")
    ]);
    //more code
  }
