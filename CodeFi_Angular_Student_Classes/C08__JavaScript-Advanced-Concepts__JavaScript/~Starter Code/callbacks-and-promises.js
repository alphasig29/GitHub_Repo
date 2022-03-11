// * ============ CALLBACKS & PROMISES ============ * \\
// ~~~~~ SYNCHRONOUS CODING ~~~~~ \\

function goToSchool() {
    console.log("disn't want to go to school");
}


function code() {
    console.log("fully coded all day");
}

function growCorn() {
    setTimeout(() => {
       console.log("corn success"); 
    }, 3000);
    
}
function growApple(){
    console.log("apple success");
}

const mockAPIRequest = {

    success: Math.random() < 0.5,
    data: "hear is your data."
};

const getDetails = new Promise((resolve, reject) => {
    if (mockAPIRequest.success === true) {
        resolve(mockAPIRequest.data);
    } else {
        reject(new Error("API Request failed. Try again!"));
    }
})

getDetails
.then((done) => console.log("done", done))
.catch((err) => console.log("err", err));

// Usage:
growCorn();
growApple();
console.groupCollapsed("Synchronous Coding");

console.groupEnd();

// ~~~~~ CALLBACKS ~~~~~ \\

// Usage:

// ~~~~~ PROMISES ~~~~~ \\

// Usage:
