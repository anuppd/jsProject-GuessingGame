let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wrong = document.getElementById("wrong");
let guesses = document.getElementById("guesses");

let answer = Math.floor(Math.random() * 100) + 1;
let numOfGusses = 0;

btn.addEventListener("click", () => {
    guessNumber();
});

const guessNumber = () => {
    if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
        wrong.innerHTML = "Enter a number between 1 to 100...";
    } else {
        numOfGusses++;
        guesses.innerHTML = "No. of Guesses: " + numOfGusses;

        if (input.value > answer) {
            wrong.innerHTML = "You have guessed a higher number...";
            input.value = "";
        } else if (input.value < answer) {
            wrong.innerHTML = "You have guessed a lower number";
            input.value = "";
        } else {
            wrong.innerHTML =
                "Congratulation! You have guessed the correct number...";
            setTimeout(() => {
                resetGame();
            }, 4000);
        }
    }
};

const resetGame = () => {
    numOfGusses = 0;
    let answer = Math.floor(Math.random() * 100) + 1;
    input.value = "";
    guesses.innerHTML = "No. of Guesses: 0";
};
