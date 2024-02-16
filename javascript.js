//creates choice for rock, paper, or scissors by computer
function getComputerChoice() {

    randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum === 1) {
        return 'rock';
    } else if (randNum === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }

}

//uses user input to get real players choice for rock, paper, or scissors
function getPlayerChoice() {

    let playerOption = false;

    while (playerOption === false) { //while loop runs until player selects proper input

        let playerChoice = prompt('Please choose rock, paper, or scissors.')
        let playerPiece = playerChoice.toLowerCase();

        if (playerPiece === 'rock') {
            playerOption = true;
            return 'rock';
        } else if (playerPiece === 'paper') {
            playerOption = true;
            return 'paper';
        } else if (playerPiece === 'scissors') {
            playerOption = true;
            return 'scissors';
        } else {
            playerOption = false;
            alert('Invalid input, please try again.')
        }
    }
}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

function playRound(computerSelection, playerSelection) {

    if (computerSelection === playerSelection) {
        return 'You have tied! Try again.';
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        return 'You win! Paper beats rock. Well done!';
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return 'You lose. Rock beats scissors. Better luck next time!';
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return 'You lose. Paper beats rock. Better luck next time!';
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        return 'You win! Scissors beat paper. Well done!';
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return 'You lose! Scissors beat paper. Better luck next time!';
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        return 'You win! Rock beats scissors. Well done!';
    }

}

console.log(playRound(computerSelection, playerSelection));

