// * ============ ASYNC / AWAIT ============ * \\
// ~~~~~ OLD WAY (PROMISES) ~~~~~ \\
function getAllCommentsUsingPromises() {
  const data = fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((json) => console.log("PROMISES:", json))
    .catch((err) => console.log("err:", err));
}

getAllCommentsUsingPromises();

// ~~~~~ NEW WAY (ASYNC/AWAIT) ~~~~~ \\
async function getAllCommentsUsingAsyncAwait() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/comments");
    const res = await data.json();
    console.log("ASYNC/AWAIT:", res);
  } catch (err) {
    console.log("err:", err);
  }
}

getAllCommentsUsingAsyncAwait();
