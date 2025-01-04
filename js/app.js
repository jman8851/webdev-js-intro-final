"use strict";

const submissionBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");
const guessMessageElement = document.getElementById("guess-message");
const currentGuessElement = document.getElementById("current-guess");
const computerGuessElement = document.getElementById("computer-guess");
const guessHistoryElement = document.getElementById("guess-history");
const guessInput = document.getElementById("guess-input");

let computerGuess = Math.floor(Math.random() * 100) + 1;
let guess = [];
let maxTries = 3;
let tries = 0;

submissionBtn.addEventListener("click", function() {
    const userGuess = parseInt(document.getElementById("guess-input").value);

    if (tries < maxTries) {
        guess.push(userGuess);
        currentGuessElement.textContent = userGuess;
        computerGuessElement.textContent = computerGuess;
        computerGuessElement.style.display = "none";
        guessHistoryElement.textContent = guess.join(", ");
        tries++;

        if (userGuess === computerGuess) {
            guessMessageElement.textContent = "Celebrate!!! You guessed the correct number!";
            endGame(); 
        } else if (tries === maxTries) {
            guessMessageElement.textContent = `Sorry, no guesses left to use. The correct number was ${computerGuess}.`;
            endGame();
        } else if (userGuess > computerGuess) {
            guessMessageElement.textContent = "Too high! Guess again.";
        } else {
            guessMessageElement.textContent = "Too low! Guess again";
        }
    }
});

restartBtn.addEventListener("click", function() {
    resetGame();
});

function resetGame() {
    computerGuess = Math.floor(Math.random() * 100) + 1;
    guess = [];
    tries = 0;
    guessMessageElement.textContent = "";
    currentGuessElement.textContent = "";
    computerGuessElement.textContent = "";
    guessHistoryElement.textContent = "";
    guessInput.value = "";
    submissionBtn.disabled = false;
    restartBtn.disabled = true;
    computerGuessElement.style.display = "none";
}
function endGame() { 
    submissionBtn.disabled = true; 
    restartBtn.disabled = false;
    computerGuessElement.textContent = computerGuess;
    computerGuessElement.style.display = "block";
}

