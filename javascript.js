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

//uses user input as parameters to play a single round of rock paper scissors
function playRound(computerSelection, playerSelection) {

    playerWin = 'win';
    computerWin = 'loss';
    tieGame = 'tie';

    if (computerSelection === playerSelection) { //all options for round played
        console.log('You have tied this round! Try again.');
        return tieGame;
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        console.log('You win this round! Paper beats rock. Well done!');
        return playerWin;
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        console.log('You lose this round. Rock beats scissors. Better luck next time!');
        return computerWin;
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        console.log('You lose this round. Paper beats rock. Better luck next time!');
        return computerWin;
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        console.log('You win this round! Scissors beat paper. Well done!');
        return playerWin;
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        console.log('You lose this round! Scissors beat paper. Better luck next time!');
        return computerWin;
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        console.log('You win this round! Rock beats scissors. Well done!');
        return playerWin;
    }

}

//full game of rock paper scissors function using computerChoice, playerChoice, and playRound functions.
//the game keeps score and is over when a player reaches 5 points.
function playGame() {

    let computerScore = 0;
    let playerScore = 0;
    let roundNumber = 1;
    let gameOver = false;

    while(gameOver === false) { //while loop tracks if game is still playing, won't end until win condition is met

        if(playerScore < 5 && computerScore < 5){ //if statement for actual gameplay, won't move past this until a side wins

            console.log('Round ' + roundNumber);

            let computerSelection = getComputerChoice();
            let playerSelection = getPlayerChoice();
    
            let roundWinner = playRound(computerSelection, playerSelection); //starts the round and determines who wins and loses

            if(roundWinner === 'win') { //conditions for win and loss
                playerScore++;
            } else if(roundWinner === 'loss') {
                computerScore++;
            }

            //BELOW when gameOver is set to true, while loop aka game ends

        } else if(playerScore >= 5) { //if player wins

            console.log('You win the game, congratulations!')
            gameOver = true;

        } else if(computerScore >= 5) { //if computer wins

            console.log('You lose the game! Thanks for playing.')
            gameOver = true;

        } else { //Unachievable, but important for if ever it were to happen

            console.log('Tie game, how could you possibly achieve this?')
            gameOver = true;

        }

        console.log('Player 1 Score: ' + playerScore); //displays player score at the end of each round
        console.log('Computer Score: ' + computerScore);

        roundNumber++; //increments round number being displayed up by 1

    }

}

playGame();