// * ========== HTML Element Selectors ========== * \\
const progressBar = document.querySelector("#progress-bar");

// * ========== Function Declarations ========== * \\
// FUNCTION: Fills the progress bar
function fillProgressBar() {
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;
  const scrolled = window.scrollY;

  const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

  percentScrolled > 25
    ? (progressBar.style.display = "block")
    : (progressBar.style.display = "none");

  progressBar.value = percentScrolled;
}

// * ========== Event Listeners ========== * \\
// EVENT LISTENER: Listens for a scroll on the window of the screen to fill the progress bar
window.addEventListener("scroll", fillProgressBar);
