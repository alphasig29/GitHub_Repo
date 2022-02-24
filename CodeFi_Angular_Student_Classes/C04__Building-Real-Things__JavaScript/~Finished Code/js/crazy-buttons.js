// * ========== HTML Element Selectors ========== * \\
const crazyButton = document.querySelector(".crazy-button");

// * ========== Function Declarations ========== * \\
// FUNCTION: Gets a random position on screen and sets the button to that location
function goBtnWild() {
  const offsetTop =
    Math.random() * (window.innerHeight - crazyButton.clientHeight);
  const offsetLeft =
    Math.random() * (window.innerWidth - crazyButton.clientWidth);

  crazyButton.style.top = offsetTop + "px";
  crazyButton.style.left = offsetLeft + "px";
}

// * ========== Event Listeners ========== * \\
// EVENT LISTENER: Listens for the mouse to hover the "crazyButton" and calls "goBtnWild()"
crazyButton.addEventListener("mouseenter", goBtnWild);
