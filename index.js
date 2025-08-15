

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    if(choice == 0) return "rock";
    if(choice == 1) return "paper";
    if(choice == 2) return "scissors";
}

function getHumanChoice() {
    return prompt("rock, paper or scissors");
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        if(humanChoice == "rock") {
            if(computerChoice == "scissors") {
                console.log("You win! Rock beats Scissors");
                humanScore++;
            }
            if(computerChoice == "paper") {
                console.log("You lose! Paper beats Rock")
                computerScore++;
            }
            else console.log("Draw!");
        }
        if(humanChoice == "paper") {
            if(computerChoice == "rock") {
                console.log("You win! Paper beats Rock");
                humanScore++;
            }
            if(computerChoice == "scissors") {
                console.log("You lose! Scissors beats Paper")
                computerScore++;
            }
            else console.log("Draw!");
        }
        if(humanChoice == "scissors") {
            if(computerChoice == "paper") {
                console.log("You win! Scissors beats Paper");
                humanScore++;
            }
            if(computerChoice == "rock") {
                console.log("You lose! Rock beats Scissors")
                computerScore++;
            }
            else console.log("Draw!");
        }
    }

    for(let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(humanScore + "," + computerScore);
}

playGame();