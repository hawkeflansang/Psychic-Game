var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];

var winText = document.getElementById("win-text");
var loseText = document.getElementById("lose-text");
var triesLeft = document.getElementById("tries-left");
var userGuesses = document.getElementById("user-guesses");

winText.textContent = "Wins: " + wins;
loseText.textContent = "Losses: " + losses;
triesLeft.textContent = "Guesses Left: " + guessesLeft;
userGuesses.textContent = guessesMade;

document.onkeyup = function(event) {

    var userChoice = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    var validChoice = computerChoices.indexOf(userChoice);

    if (validChoice !== -1) {

        if (userChoice === computerGuess) {

            wins++;
        }

    }

}