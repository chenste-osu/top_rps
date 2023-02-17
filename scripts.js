const choices = ['ROCK', 'PAPER', 'SCISSORS'];

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function updateScore() {
    let currentScore = document.querySelector('.score').textContent;
    currentScore = parseInt(currentScore) + 1;
    document.querySelector('.score').textContent = currentScore;
}

function playRound(playerString) {
    let playerSelection = playerString.toUpperCase();
    let computerSelection = getComputerChoice();

    if (playerSelection == computerSelection) {
        console.log("Looks like it's a draw!");
        // return "Looks like it's a draw!";
    }

    if (playerSelection == 'ROCK') {
        if (computerSelection == 'PAPER') {
            console.log("".concat("You Lose! ", computerSelection , " beats " , playerSelection));
            // return "".concat("You Lose! ", computerSelection , " beats " , playerSelection);
        } else {
            updateScore();
            console.log("".concat("You Win! " , playerSelection , " beats " , computerSelection));
            // return "".concat("You Win! " , playerSelection , " beats " , computerSelection);
        }
    }

    if (playerSelection == 'PAPER') {
        if (computerSelection == 'SCISSORS') {
            console.log("".concat("You Lose! ", computerSelection , " beats " , playerSelection));
            // return "".concat("You Lose! ", computerSelection , " beats " , playerSelection);
        } else {
            updateScore();
            console.log("".concat("You Win! " , playerSelection , " beats " , computerSelection));
            // return "".concat("You Win! " , playerSelection , " beats " , computerSelection);
        }
    }

    if (playerSelection == 'SCISSORS') {
        if (computerSelection == 'ROCK') {
            console.log("".concat("You Lose! ", computerSelection , " beats " , playerSelection));
            // return "".concat("You Lose! ", computerSelection , " beats " , playerSelection);
        } else {
            updateScore();
            console.log("".concat("You Win! " , playerSelection , " beats " , computerSelection));
            // return "".concat("You Win! ", playerSelection , " beats " , computerSelection);
        }
    }
}

function game() {
    console.log("Welcome to Rock, Papers, Scissors!");
}

const rockButton = document.querySelector('.rockbtn');
const paperButton = document.querySelector('.paperbtn');
const scissorsButton = document.querySelector('.scissorsbtn');

rockButton.addEventListener('click', () => {playRound('ROCK', getComputerChoice())});
paperButton.addEventListener('click', () => {playRound('PAPER', getComputerChoice())});
scissorsButton.addEventListener('click', () => {playRound('SCISSORS', getComputerChoice())});

game();