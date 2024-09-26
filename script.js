let humanScoreCount = 0;
let computerScoreCount = 0;
const GAMES_TO_WIN = 3;
const scoreContainer = document.querySelector("#score-container");
const selectionContainer = document.querySelector("#selection-container");
const buttons = document.querySelectorAll("button");
const roundResult = document.querySelector("#round-result");
const humanSelection = document.querySelector("#human-selection");
const computerSelection = document.querySelector("#computer-selection");
const final = document.querySelector("#final");


buttons.forEach((button) => {
    
        button.addEventListener("click", () => {
            playGame(button.id);
            
        });  
 
});


function getComputerChoice() {
    let choice = Math.random();
    if (choice < 0.34) {
        computerSelection.textContent = "Computer Choice: Rock";
        return 1;
    }
    else if (choice < 0.67) {
        computerSelection.textContent = "Computer Choice: Paper";
        return 2;
    }
    else {
        computerSelection.textContent = "Computer Choice: Scissors";
        return 3;
    }
};

function getHumanChoice(humanChoice) {
    console.log(humanChoice);
    switch (humanChoice) {
        case "rock-button":
            humanSelection.textContent = "Your Choice: Rock";
            return 1;
            break;
        case "paper-button":
            humanSelection.textContent = "Your Choice: Paper";
            return 2;
            break;
        case "scissors-button":
            humanSelection.textContent = "Your Choice: Scissors";
            return 3;
            break;
        default:
            break;
    }
};

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice, computerChoice);
    roundResult.textContent = "";
    if (humanChoice == computerChoice) {
        roundResult.textContent = "Draw. Go again.";
        console.log("Draw. Go again");
        return;
    }
    switch (humanChoice) {
        case 1:
            if (computerChoice == 2) {
                computerScoreCount++;
            }
            else {
                humanScoreCount++;
            }
            break;
        case 2:
            if (computerChoice == 1) {
                humanScoreCount++;
            }
            else {
                computerScoreCount++;
            }
            break;
        case 3:
            if (computerChoice == 1) {
                computerScoreCount++;
            }
            else {
                humanScoreCount++
            }
            break;
        default:
            break;
    }
    // gamesPlayed++;
}


function playGame(choice) {
    playRound(getHumanChoice(choice), getComputerChoice());
    const humanScore = document.querySelector("#human-score");
    const computerScore = document.querySelector("#computer-score");
    humanScore.textContent = "Your score: " + humanScoreCount;
    computerScore.textContent = "Computer score: " + computerScoreCount;
    
    // console.log("Score: " + humanScore + " " + computerScore);
    

    
    if (humanScoreCount === GAMES_TO_WIN) {
        
        final.textContent = "Congrats! You won!";
        // console.log("Congrats! You won!")
        humanScoreCount = 0;
        computerScoreCount = 0;
    }
    
    if (computerScoreCount === GAMES_TO_WIN){
        final.textContent = "Sorry! You lost!";
        // console.log("Sorry! You lost!")
        humanScoreCount = 0;
        computerScoreCount = 0;
    }

}
