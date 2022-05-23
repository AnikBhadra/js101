const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
// TODO 1: use "getElementsByClassName" instead of "querySelector" and make changes accordingly

// const color = document.querySelector(".color");
const color = document.getElementsByClassName("color")[0];

// TODO 2: use arrow function in function definitions

// btn.addEventListener("click", function ()
btn.addEventListener("click", () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}