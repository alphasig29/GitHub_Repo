// * ============ ASYNC / AWAIT ============ * \\
// ~~~~~ OLD WAY (PROMISES) ~~~~~ \\


let res; //results



function getAllComments(){
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res) => res.json())
        .then((json) => console.log('promise', json))
        .catch((err) => console.log('err',err));
}


// getAllComments();



// ~~~~~ NEW WAY (ASYNC/AWAIT) ~~~~~ \\

async function getAllCommentsA() {
    console.log('res at top of', res);
    if (res?.length > 0) return res;

try{
    const dat = await fetch("https://jsonplaceholder.typicode.com/comments");
    const res = await dat.json();
    console.log('async res', res);
} catch (err) {
    console.log(err);
}
}

// getAllCommentsA();
// getAllCommentsA();





