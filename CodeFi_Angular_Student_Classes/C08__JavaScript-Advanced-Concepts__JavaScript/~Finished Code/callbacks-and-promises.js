// * ============ CALLBACKS & PROMISES ============ * \\
// ~~~~~ SYNCHRONOUS CODING ~~~~~ \\
function goToSchool() {
  console.log("THE BUS! Welp, I missed the bus!");
}
function code() {
  console.log("Coded all day successfully!");
}

// Usage:
console.groupCollapsed("Synchronous Coding");
goToSchool();
code();
console.groupEnd();

// ~~~~~ CALLBACKS ~~~~~ \\
function growCorn() {
  setTimeout(() => {
    console.log("Corn Success");
  }, 3000);
}
function PickApple() {
  console.log("Apple Success");
}

// Usage:
// growCorn();
// PickApple();

// ~~~~~ PROMISES ~~~~~ \\
const someAPIRequest = {
  success: Math.random() < 0.5,
  data: "Here is your data",
};
const getDetails = new Promise((resolve, reject) => {
  if (someAPIRequest.success) {
    resolve(someAPIRequest.data);
  } else {
    reject(new Error("API Request Failed. Try again."));
  }
});

// Usage:
getDetails
  .then((done) => {
    console.log("done:", done);
  })
  .catch((err) => {
    console.log("err:", err);
  });
