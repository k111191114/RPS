

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
                document.querySelector(".result").textContent = "You win! Rock beats Scissors";
                
                humanScore++;
            }
            else if(computerChoice == "paper") {
                document.querySelector(".result").textContent = "You lose! Paper beats Rock";
                computerScore++;
            }
            else console.log("Draw!");
        }
        if(humanChoice == "paper") {
            if(computerChoice == "rock") {
                document.querySelector(".result").textContent = "You win! Paper beats Rock";
                humanScore++;
            }
            else if(computerChoice == "scissors") {
                document.querySelector(".result").textContent = "You lose! Scissors beats Paper";
                computerScore++;
            }
            else console.log("Draw!");
        }
        if(humanChoice == "scissors") {
            if(computerChoice == "paper") {
                document.querySelector(".result").textContent = "You win! Scissors beats Paper";
                humanScore++;
            }
            else if(computerChoice == "rock") {
                document.querySelector(".result").textContent = "You lose! Rock beats Scissors";
                computerScore++;
            }
            else console.log("Draw!");
        }
        document.querySelector(".scores").textContent = 'H:' + humanScore + " " + "C:" + computerScore;
        if(humanScore == 5) {
            document.querySelector(".result").textContent += "Human Wins!"
        }
        if(computerScore == 5) {
            document.querySelector(".result").textContent += "Computer Wins!";
        }
    }

    const btnR = document.querySelector("#rock");
    const btnP = document.querySelector("#paper");
    const btnS = document.querySelector("#scissors");
    btnR.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });
    btnP.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });
    btnS.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });

    


}

playGame();