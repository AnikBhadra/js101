const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
// TODO 1: use "getElementsByClassName" instead of "querySelector" and make changes accordingly

const color = document.querySelector(".color");

// TODO 2: use arrow function in function definitions

btn.addEventListener("click", function () {
    // get random number between 0-3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}