console.log('Hello World! Welcome to Rock, Paper, Scissors!!');

// Array to store possible options
const computerOptions = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {

    // Picks a random number between 0-2
   const computerNumber = Math.floor(Math.random() * 3);

    // Sets computer choice as which indecie the random number is
   const computerChoice = computerOptions[computerNumber]

    console.log(computerChoice)
};

function playGame(playerSelection, computerSelection) {

}

getComputerChoice(); 


