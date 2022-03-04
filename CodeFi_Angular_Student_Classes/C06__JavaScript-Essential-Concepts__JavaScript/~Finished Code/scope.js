// * ============ SCOPE ============ * \\
// ~ DEMO 1 START ~ \\
let whatIsMyValue; // declare an empty variable

function checkValue() {
  console.log("whatIsMyValue Before", whatIsMyValue); // Check the variables value before
  whatIsMyValue = 5; // initialize the variable
  console.log("whatIsMyValue After", whatIsMyValue); // Check the variables value after
}

checkValue(); // call the checkValue function code
// ~ DEMO 1 END ~ \\

// ~ DEMO 2 START ~ \\
let testVariable = "Globally Initialized"; // declare + initialize testVariable GLOBALLY

function callLocalFunction() {
  let testVariable = "Locally Initialized"; // declare + initialize the testVariable LOCALLY in the function
  console.log("testVariable inside function:", testVariable); // Check the value of the testVariable inside the function

  // Note: Creating a new function creates a new local scope called function scope.
}

callLocalFunction(); // call the checkValue function

console.log("testVariable outside function:", testVariable); // Check the value of the testVariable outside the function after the function call
// ~ DEMO 2 END ~ \\

// ~ DEMO 3 START ~ \\
let isListening = false;

function startConversation(topic) {
  if (topic === "Programming") isListening = true;
}

startConversation("Programming");

console.log("isListening:", isListening); // true
// ~ DEMO 3 END ~ \\
