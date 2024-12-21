const view = document.getElementById("letter");
let count = 0;
const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowers = "abcdefghijklmnopqrstuvwxyz";
const imgBox = document.getElementById("img-container");
const img = document.createElement("img");
img.id = "assoc-img";
imgBox.appendChild(img);
const caption = document.createElement("h3");
caption.id = "caption";
imgBox.appendChild(caption);

// load json

let structure;
let sorted;

fetch("./association_structure.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error! status: " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    structure = data;
    console.log("Loaded structure:", structure);
    sorted = structure["/"].sort((a, b) => a.localeCompare(b));
    console.log("Sorted array:", sorted);

    compile();
  })
  .catch((error) => {
    console.error("Failed to load JSON:", error);
  });

function compile() {
  view.innerHTML = uppers[count] + lowers[count];
  img.src = `./static/association/${sorted[count]}`;
  img.alt = `${sorted[count].split(".")[0]}`;
  caption.innerHTML = `${sorted[count].split(".")[0]}`;
}

function decrement() {
  if (count > 0) {
    count -= 1;
    compile();
  }
}
function increment() {
  if (count < uppers.length - 1) {
    count += 1;
    compile();
  }
}

function reset() {
  count = 0;
  compile();
}

const clickers = document.getElementsByClassName("btn");
const audioElement = document.getElementById("mouse-sound");

Array.from(clickers).forEach((button) => {
  button.addEventListener("click", () => {
    audioElement.currentTime = 0;
    audioElement.volume = 0.1;
    audioElement.play();
  });
});
