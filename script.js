// console.log("Hello World");
let humanScore = 0;
let computerScore = 0;
// let gamesPlayed = 0;
let humanChoice = "";
const GAMES_TO_WIN = 3;
const div = document.createElement("div");
const buttons = document.querySelectorAll("button");
// playGame();

buttons.forEach((button) => {
    
        button.addEventListener("click", () => {
            playGame(button.id);
            // playRound(getHumanChoice(button.id),getComputerChoice());
        });  
 
});


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
};

function getHumanChoice(humanChoice) {
    //let humanChoice = prompt("Rock, paper, or scissors?");
    console.log(humanChoice);
    //humanChoice = humanChoice.toUpperCase();
    switch (humanChoice) {
        case "rock-button":
            return 1;
            break;
        case "paper-button":
            return 2;
            break;
        case "scissors-button":
            return 3;
            break;
        default:
            break;
    }
};

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
    // gamesPlayed++;
}


function playGame(choice) {
    
    playRound(getHumanChoice(choice), getComputerChoice());
    console.log("Score: " + humanScore + " " + computerScore);
    

    
    if (humanScore === GAMES_TO_WIN) {
        console.log("Congrats! You won!")
        humanScore = 0;
        computerScore = 0;
    }
    
    if (computerScore === GAMES_TO_WIN){
        console.log("Sorry! You lost!")
        humanScore = 0;
        computerScore = 0;
    }

}
