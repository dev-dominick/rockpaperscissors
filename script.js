console.log('Hello World! Welcome to Rock, Paper, Scissors!!');

let btn = document.getElementById("start")
let clearBtn = document.getElementById("clear")

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
    // console.log(playerSelection);
    console.log(computerSelection);

        if(playerSelection === computerSelection){
            console.log('Tie');
            gamesPlayed.innerHTML++
            ties.innerHTML++
        }
        else if(playerSelection == 'rock'){

            if(computerSelection == 'paper'){
                gamesPlayed.innerHTML++
                losses.innerHTML++
                console.log('Computer Won, paper beats rock');
                
            }else{
                gamesPlayed.innerHTML++
                wins.innerHTML++
                console.log('Player Won, rocks beats scissors');      
            }
        }
        else if(playerSelection == 'scissors'){
            if(computerSelection == 'rock'){
                gamesPlayed.innerHTML++
                losses.innerHTML++
                console.log('Computer Won, rock beats scissors');  
            }else{
                gamesPlayed.innerHTML++
                wins.innerHTML++
                console.log('Player Won, scissors beats paper');    
            }
        }
        else if(playerSelection == 'paper'){
            if(computerSelection == 'scissors'){
                gamesPlayed.innerHTML++
                losses.innerHTML++
                console.log('Computer Won, scissors beats paper');  
            }else{
                gamesPlayed.innerHTML++
                wins.innerHTML++
                console.log('Player Won, paper beats rock');  
            }
        }

 
}

function getPlayerChoice() {

    let e = document.getElementById("choices");

    let playerSelection = e.options[e.selectedIndex].text

    console.log(playerSelection);

    return playerSelection.toLowerCase()
}


function startGame() {
    
    playGame(getPlayerChoice(), getComputerChoice())
};



function clear() {
    gamesPlayed.innerHTML = 0;
    wins.innerHTML = 0;
    losses.innerHTML = 0;
    ties.innerHTML = 0;
}


btn.addEventListener('click', event => {
    startGame()
   
})

clearBtn.addEventListener('click', event => {
    clear();
})






