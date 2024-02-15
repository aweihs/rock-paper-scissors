//creates choice for rock, paper, or scissors by computer
function getComputerChoice() {

    randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum === 1) {
        return 'Rock';
    } else if (randNum === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
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
            return 'Rock';
        } else if (playerPiece === 'paper') {
            playerOption = true;
            return 'Paper';
        } else if (playerPiece === 'scissors') {
            playerOption = true;
            return 'scissors';
        } else {
            playerOption = false;
            alert('Invalid input, please try again.')
        }
    }
}

console.log(getPlayerChoice())

console.log(getComputerChoice())