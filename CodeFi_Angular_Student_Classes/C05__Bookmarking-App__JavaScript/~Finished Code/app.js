// * ========== HTML Element Selectors ========== * \\
const body = document.body;
const input = document.querySelector(".link-input");
const overlay = document.querySelector(".overlay");

const form = document.querySelector("#link-form");
const linkList = document.querySelector(".link-list");

// * ========== Global Variables ========== * \\
const allLinks = JSON.parse(localStorage.getItem("link_list")) || [];

const BASE_URL = "https://opengraph.io/api/1.1/site";
const API_KEY = "fdcc299a-6adc-43d0-ac90-1674c1cbadf5";

// * ========== Function Declarations ========== * \\
// FUNCTION: Adds the "focus-form" class on the body when the form is in focus
function focusInput() {
  body.classList.add("focus-form");
}

// FUNCTION: Removes the "focus-form" class on the body when the form is out of focus
function endFocus() {
  if (body.classList.contains("focus-form"))
    body.classList.remove("focus-form");
}

// FUNCTION: Creates a new Link when a URL is submitted
async function createLink(e) {
  // prevents the form from submitting
  e.preventDefault();

  // Validation
  if (!input.value) return;

  // Grab data from the websites metadata
  const link = await fetchURLMetaData(input.value);

  // Add the link to the linkList
  allLinks.push(link);

  // Repopulate HTML List
  populateLinkList(allLinks);

  // Save List to Local Storage
  saveLinkListToLocalStorage(allLinks);

  // Reset the input box
  form.reset();
}

// FUNCTION: Removes a new Link when a link is deleted
function removeLink(e) {
  // If we are not clicking on the "x"... don't run any more code
  if (!e.target.matches(".close-btn")) return;

  // Find the index
  const idx = e.target.parentNode.dataset.index;

  console.log("idx:", idx);

  // remove the link from the list
  allLinks.splice(idx, 1);

  // refill the list
  populateLinkList(allLinks);

  // save to local storage
  saveLinkListToLocalStorage(allLinks);
}

// FUNCTION: Populates HTML with a list of Bookmarks
function populateLinkList(links = []) {
  // Loop over all links and create a new bookmark for each element
  linkList.innerHTML = links
    .map(
      (link, idx) => `
      <li data-index=${idx}>
        <a class="link" href=${link.url} target="_blank" >${link.title}</a>
        <button class="close-btn">&times;</button>
      </li>`
    )
    .join("");
}

// FUNCTION: Saves Link List in Local Storage
function saveLinkListToLocalStorage(links = []) {
  localStorage.setItem("link_list", JSON.stringify(links));
}

// FUNCTION: Grabs data from Open Graph API
async function fetchURLMetaData(url) {
  const res = await fetch(
    `${BASE_URL}/${encodeURIComponent(url)}?app_id=${API_KEY}`
  );

  const data = await res.json();

  // Validation
  if (data.code < 0 || data.code >= 300) alert("Error with that URL");

  return { title: data.hybridGraph.title, image: data.hybridGraph.image, url };
}

// * ========== Event Listeners ========== * \\
// EVENT LISTENER: Listens for "focusin" event on the "input" and runs the "focusInput" function
input.addEventListener("focusin", focusInput);
// EVENT LISTENER: Listens for "focusout" event on the "input" and runs the "endFocus" function
input.addEventListener("focusout", endFocus);
// EVENT LISTENER: Listens for "click" event on the "overlay" and runs the "endFocus" function
overlay.addEventListener("click", endFocus);

// EVENT LISTENER: Listens for "submit" event on the "form" and runs the "createLink" function
form.addEventListener("submit", createLink);

// EVENT LISTENER: Listens for "click" event on the "linkList" and runs the "removeLink" function
linkList.addEventListener("click", removeLink);

// * ========== On Application Start ========== * \\
populateLinkList(allLinks);
