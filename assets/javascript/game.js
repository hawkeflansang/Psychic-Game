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
userGuesses.textContent = "Guesses Made: " + guessesMade;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



document.onkeyup = function(event) {

    var userChoice = event.key;
    
    
    var validChoice = computerChoices.indexOf(userChoice);

    if (validChoice !== -1) {

        if (userChoice === computerGuess) {

            wins++;
            winText.textContent = "Wins: " + wins;
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            

        } else if (guessesLeft > 0) {

            guessesMade.push(" " + userChoice);
            userGuesses.textContent = "Guesses Made: " + guessesMade;
            guessesLeft--;
            triesLeft.textContent = "Guesses Left: " + guessesLeft;

        } else {

            losses++;
            loseText.textContent = "Losses: " + losses;
            guessesLeft = 9;
            triesLeft.textContent = "Guesses Left: " + guessesLeft;
            guessesMade = [];
            userGuesses.textContent = "Guesses Made: " + guessesMade;
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            

        }



    }
    

}