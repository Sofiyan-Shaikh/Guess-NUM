let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById("guessBtn").addEventListener("click", function () {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    const message = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attempts");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = attempts;

    if (userGuess === randomNumber) {
        message.textContent = "Congratulations! You guessed the number.";
        message.style.color = "green";
    } else if (userGuess > randomNumber) {
        message.textContent = "Too high! Try Smaller number.";
        message.style.color = "blue";
    } else {
        message.textContent = "Too low! Try Bigger number.";
        message.style.color = "blue";
    }
});
