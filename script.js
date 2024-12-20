const view = document.getElementById("letter");
let count = 0;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function decrement() {
  if (count > 0) {
    count -= 1;
  }
  view.innerHTML = letters[count];
}
function increment() {
  if (count < letters.length - 1) {
    count += 1;
  }
  view.innerHTML = letters[count];
}

function reset() {
  count = 0;
  view.innerHTML = letters[count];
}

view.innerHTML = letters[count];

const clickers = document.getElementsByClassName("btn");
const audioElement = document.getElementById("mouse-sound");

Array.from(clickers).forEach((button) => {
  button.addEventListener("click", () => {
    audioElement.currentTime = 0;
    audioElement.volume = 0.3;
    audioElement.play();
  });
});
