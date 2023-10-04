// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById("guess").value);
    attempts++;

    if (guess === randomNumber) {
        document.getElementById("message").innerHTML = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        document.getElementById("message").style.color = "green";
        document.getElementById("guess").disabled = true;
    } else if (guess < randomNumber) {
        document.getElementById("message").innerHTML = "Try a higher number.";
        document.getElementById("message").style.color = "red";
    } else {
        document.getElementById("message").innerHTML = "Try a lower number.";
        document.getElementById("message").style.color = "red";
    }
}
