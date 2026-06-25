function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function gethumanChoice() {
    const humanChoice = prompt("Please enter rock, paper, or scissors:");
    return humanChoice;
}

let computerScore = 0;
let humanScore = 0;
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "Computer wins this round!";
    }
}

    
    
function playGame(){
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        const humanChoice = gethumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Score: You ${humanScore} | Computer ${computerScore}`);
        
    }
    console.log("Game Over!");
    console.log(`Final Score: You ${humanScore} | Computer ${computerScore}`);
}

playGame();
