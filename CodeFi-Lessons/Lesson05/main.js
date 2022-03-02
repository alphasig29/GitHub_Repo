// Variables to identify ==============================
const localStorateKey = "CodeFi.UserInfo.Array";
const overlay = document.querySelector(".overlay");
const inputFName = document.getElementById("f-name");
const inputLName = document.getElementById("l-name");
const inputEmail = document.getElementById("email");
const htmlBody = document.body;
const inputForm = document.querySelector(".input-form");
const userArray = JSON.parse( localStorage.getItem(localStorateKey)) || [];
const userList = document.querySelector(".user-list");

// first thing to do is retrieve array settings from localStorage and 
//  display them
displayUserList(userArray);


// functions ===================================
function showOverlay() {
    // adding this class to the body darkens the background
    // and makes the user list un-clickable
    htmlBody.classList.add("show-overlay");
}

function hideOverlay() {
    // removing the class that darkens the background 
    //  from the body if it exists
    if (htmlBody.classList.contains("show-overlay")) {
      htmlBody.classList.remove("show-overlay");  
      // remove any lingering data in the inputd form
      inputForm.reset();
    };
}

function addNewUser(e) {
    e.preventDefault();

    // make sure we have input to save
    if (!inputFName.value || !inputLName.value || !inputEmail.value) {
        alert('All 3 fields are required to add a new user.');
        return;
    }

    // load the info we want to store to an object
    const oUser = {
        fName: inputFName.value,
        lName: inputLName.value,
        email: inputEmail.value
    }

    // add the new user to the global array of users
    userArray.push(oUser);
   
    // add to local storage for long term retention
    saveUserArrayToStorage(userArray);    
    
    // what what we currently have in the array
    displayUserList(userArray);

    //get rid of lingering data in the input form
    inputForm.reset();

    // return to default view/no overlay
    hideOverlay();


}

function displayUserList(listOfUsers = []){
    // add each element from the passed array to the UI's ul
    const userListHtml = listOfUsers.map((user, i) => {
        console.log("user item = ", user);
        return `<li class="user-list-item" data-id="${i}">
            <a href="mailto:${user.email}">${user.fName} ${user.lName}</a>
            <button class="close-button btn">&times;</button>
            </li>`;
    }).join("");
    userList.innerHTML=userListHtml;

}

function removeUserItem(e){
    // if we click the X button, remove the clicked item
    if (e.target.matches(".close-button")) {
        // lets remove this item
        const index = e.target.parentNode.dataset.id;

        // remove the clicked item from the global array
        userArray.splice(index,1);
        
    }
    // what what is currently in the user global array
    displayUserList(userArray);
}

function saveUserArrayToStorage(arrayOfUsers = []) {
    // jsut save to local storeage with unique name
    localStorage.setItem(localStorateKey,JSON.stringify(arrayOfUsers));
}

// events
// lets add events to show the overlay when the user enters an Input control
inputFName.addEventListener('focusin',showOverlay);
inputLName.addEventListener('focusin',showOverlay);
inputEmail.addEventListener('focusin',showOverlay);
overlay.addEventListener('click', hideOverlay);
inputForm.addEventListener('submit', addNewUser);
userList.addEventListener('click', removeUserItem);