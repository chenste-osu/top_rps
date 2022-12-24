const choices = ['ROCK', 'PAPER', 'SCISSORS'];

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function verifyChoice(selection) {
    let caseSelection = selection.toUpperCase();
    if (choices.includes(caseSelection)) {
        return true;
    } else {
        return false;
    }
}

function playRound(playerSelection, computerSelection) {
    let casePlayerSelection = playerSelection.toUpperCase();

    if (casePlayerSelection == 'ROCK') {
        if (computerSelection == 'ROCK') {
            return "Looks like it's a draw!";
        } else if (computerSelection == 'PAPER') {
            return "".concat("You Lose! ", computerSelection , " beats " , casePlayerSelection);
        } else {
            return "".concat("You Win! " , casePlayerSelection , " beats " , computerSelection);
        }
    }

    if (casePlayerSelection == 'PAPER') {
        if (computerSelection == 'PAPER') {
            return "Looks like it's a draw!";
        } else if (computerSelection == 'SCISSORS') {
            return "".concat("You Lose! ", computerSelection , " beats " , casePlayerSelection);
        } else {
            return "".concat("You Win! " , casePlayerSelection , " beats " , computerSelection);
        }
    }

    if (casePlayerSelection == 'SCISSORS') {
        if (computerSelection == 'SCISSORS') {
            return "Looks like it's a draw!";
        } else if (computerSelection == 'ROCK') {
            return "".concat("You Lose! ", computerSelection , " beats " , casePlayerSelection);
        } else {
            return "".concat("You Win! ", casePlayerSelection , " beats " , computerSelection);
        }
    }
}

function game() {
    console.log("Welcome to Rock, Papers, Scissors!");

    var choiceVerified = false;

    for (let i = 0; i < 5; i++) {
        let playerChoice = "";

        while (choiceVerified == false) {
            playerChoice = prompt();
            if (verifyChoice(playerChoice) == true) {
                choiceVerified = true;
            } else {
                alert("Oops! Seems like you entered a typo. Try Again.")
            }
        }

        choiceVerified = false;

        let computerChoice = getComputerChoice();
        console.log(playerChoice);
        console.log(computerChoice);
        console.log(playRound(playerChoice, computerChoice));
    }
}

// var playerChoice = 'rOcK';

// console.log(playerChoice);

// console.log(playRound(playerChoice, getComputerChoice()));

game();