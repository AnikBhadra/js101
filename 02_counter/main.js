//  setting counter variable's value equal to 0

let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

// todo 01: use arrow function
btns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;

        // TODO 02: use ternary operator
        styles.contains("increase") ? count++ :
            (styles.contains("decrease")) ? count-- :
                count = 0;
        value.textContent = count;
        // TODO 03: use ternary operator
        //  change the color of the value wrt buttons

        value.style.color = count > 0 ? "green" :
            count < 0 ? "red" :
                "black";
    });
})