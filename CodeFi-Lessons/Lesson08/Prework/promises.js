/*
https://www.better.dev/callbacks-promises-and-async

Callbacks, Promises, and Async


*/

console.group('Promises');

const weather = true;

const date = new Promise(function(resolve,reject) {
    if (weather) {
        const dateDetails = {
            name:       'cubana Restaurant',
            location:   '55th Street',
            table:      5
    };


    resolve(dateDetails)
} else {
    reject(new Error('Bad weather, so no Date'))
} 
});

const orderUber = function(dateDetails) {

    const message = `Get me an Uber ASAP to ${dateDetails.location}, we are going no a date!`;

    return Promise.resolve(message)

};

const myDate = function() {
    date
    .then(orderUber) // chaining promises
    .then(function(done) {
        console.log('We are gong on a date!');
        console.log(done);
    })
    .catch(function(error) {
        console.log(error.message)
    } )
};

myDate();

// Chaining Promises =======================

// const orderUber = function(dateDetails) {
//     return new Promise(function(resolve, reject){
//         const message = `Get me an Uber ASAP to ${dateDetails.location}, we are going no a date!`;
   
//         resolve(message)
   
//     });
// };











console.groupEnd();