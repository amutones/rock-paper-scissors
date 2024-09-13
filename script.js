// console.log("Hello World");

function getComputerChoice() {
    let choice = Math.random();
    if (choice < 0.34) {
        return "Rock";
    }
    else if (choice < 0.67) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}