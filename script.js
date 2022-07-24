// returns either rock, paper, or scissors
function getComputerChoice() {
    const kvp = {
        0: "rock",
        1: "paper",
        2: "scissors",
    };

    let randomInt = Math.floor(Math.random() * 3); // integer from 0 to 2 
    return kvp[randomInt];
}

// single round of rps
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("We tied, we both picked ", playerSelection);
        return;
    }
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                console.log("You win, rock beats scissors");
                return "player";
            } else if (computerSelection === "paper") {
                console.log("You lose, paper beats rock");
                return "computer";
            }
            break;

        case "paper":
            if (computerSelection === "rock") {
                console.log("You win, paper beats rock");
                return "player";
            } else if (computerSelection === "scissors") {
                console.log("You lose, scissors beats paper");
                return "computer";
            }
            break;

        case "scissors":
            if (computerSelection === "paper") {
                console.log("You win, scissors beats paper");
                return "player";
            } else if (computerSelection === "rock") {
                console.log("You lose, rock beats scissors");
                return "computer";
            }
            break;

        default:
            return "Something went wrong";
    }
}

game();

// play 5 rounds
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = String(prompt("Enter a choice: ")).toLowerCase();
        const computerSelection = getComputerChoice();
        
        let result = playRound(playerSelection, computerSelection);
        if (result === "player") {
            playerScore++;
        } else if (result === "computer") {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You won! With a score of ", playerScore, " to ", computerScore);
    } else if (playerScore < computerScore) {
        console.log("You lost! The score was ", playerScore, " to ", computerScore);
    } else if (playerScore === computerScore) {
        console.log("It was a tie! Both you and the computer scored ", playerScore);
    }
}