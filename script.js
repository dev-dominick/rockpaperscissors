console.log('Hello World! Welcome to Rock, Paper, Scissors!!');

let btn = document.getElementById("start")
// let score = 0
// Array to store possible options

let gamesPlayed = document.getElementById('gamesPlayed');
let wins = document.getElementById('wins');
let losses = document.getElementById('losses');
let ties = document.getElementById('ties');

gamesPlayed.innerHTML = 0;
wins.innerHTML = 0;
losses.innerHTML = 0;
ties.innerHTML = 0;

function getComputerChoice() {
    const computerOptions = ['rock', 'paper', 'scissors']

    // Picks a random number between 0-2
   const computerNumber = Math.floor(Math.random() * 3);

    // Sets computer choice as which indecie the random number is
   const computerSelection = computerOptions[computerNumber]

    return computerSelection
};

function playGame(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);



   
        if(playerSelection === computerSelection){
            console.log('Tie');
            gameData.ties++
            gameData.gamesPlayed++
        }
        else if(playerSelection == 'rock'){

            if(computerSelection == 'paper'){
                gameData.losses++
                gameData.gamesPlayed++
                console.log('Computer Won, paper beats rock');
                
            }else{
                gameData.wins++
                gameData.gamesPlayed++
                console.log('Player Won, rocks beats scissors');      
            }
        }
        else if(playerSelection == 'scissors'){
            if(computerSelection == 'rock'){
                gameData.losses++
                gameData.gamesPlayed++
                console.log('Computer Won, rock beats scissors');  
            }else{
                gameData.wins++
                gameData.gamesPlayed++
                console.log('Player Won, scissors beats paper');    
            }
        }
        else if(playerSelection == 'paper'){
            if(computerSelection == 'scissors'){
                gameData.losses++
                gameData.gamesPlayed++
                console.log('Computer Won, scissors beats paper');  
            }else{
                gameData.wins++
                gameData.gamesPlayed++
                console.log('Player Won, paper beats rock');  
            }
        }

 
}



function startGame() {
    let playerSelection = prompt('Please select rock, paper, or scissors').toLocaleLowerCase()
    playGame(playerSelection, getComputerChoice())
};

btn.addEventListener('click', event => {
    startGame();
})




