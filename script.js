// console.log("Hello World");
let humanScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

playGame();

function getComputerChoice() {
    let choice = Math.random();
    if (choice < 0.34) {
        return 1;
    }
    else if (choice < 0.67) {
        return 2;
    }
    else {
        return 3;
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?");
    humanChoice = humanChoice.toUpperCase();
    switch (humanChoice) {
        case "ROCK":
            return 1;
            break;
        case "PAPER":
            return 2;
            break;
        case "SCISSORS":
            return 3;
            break;
        default:
            break;
    }
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice, computerChoice);
    if (humanChoice == computerChoice) {
        console.log("Draw. Go again");
        return;
    }
    switch (humanChoice) {
        case 1:
            if (computerChoice == 2) {
                computerScore++;
            }
            else {
                humanScore++;
            }
            break;
        case 2:
            if (computerChoice == 1) {
                humanScore++;
            }
            else {
                computerScore++;
            }
            break;
        case 3:
            if (computerChoice == 1) {
                computerScore++;
            }
            else {
                humanScore++
            }
            break;
        default:
            break;
    }
    gamesPlayed++;
}


function playGame() {
    while (gamesPlayed < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Score: " + humanScore + " " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("Congrats! You won!")
    }
    else {
        console.log("Sorry! You lost!")
    }
}
