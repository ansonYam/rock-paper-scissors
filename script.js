let playerScore = 0;
let computerScore = 0;
populateScoreDiv(playerScore, computerScore); // populate the 'score' div

// add event listener to player buttons
const buttons = document.getElementById('player-selection').childNodes;
buttons.forEach(button => button.addEventListener('click', () => {
    let playerSelection = button.id;
    playRound(playerSelection, getComputerChoice()); // play one round of rps
    populateScoreDiv(playerScore, computerScore);
    checkForWinner(); // check for a winner
}));

function populateResultsDiv(resultsText) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerText = resultsText;
}

function populateScoreDiv(playerScore, computerScore) {
    const scoreDiv = document.getElementById('score');
    scoreDiv.innerText = playerScore + ':' + computerScore;
}

function checkForWinner() {
    if (playerScore >= 5) {
        alert("You won! With a score of " + playerScore + ":" + computerScore);
        populateResultsDiv("");
        populateScoreDiv(0, 0);
    }
    if (computerScore >= 5) {
        alert("Computer wins! With a score of " + computerScore + ":" + playerScore);
        populateResultsDiv("");
        populateScoreDiv(0, 0);
    }
}

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

// single round of rps, populates html page with result
function playRound(playerSelection, computerSelection) {
    let resultsText = "";
    if (playerSelection === computerSelection) {
        resultsText = ("We tied, we both picked " + playerSelection);
    }
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                resultsText = ("You win, rock beats scissors");
                playerScore++;

            } else if (computerSelection === "paper") {
                resultsText = ("You lose, paper beats rock");
                computerScore++;
            }
            break;

        case "paper":
            if (computerSelection === "rock") {
                resultsText = ("You win, paper beats rock");
                playerScore++;
            } else if (computerSelection === "scissors") {
                resultsText = ("You lose, scissors beats paper");
                computerScore++;
            }
            break;

        case "scissors":
            if (computerSelection === "paper") {
                resultsText = ("You win, scissors beats paper");
                playerScore++;
            } else if (computerSelection === "rock") {
                resultsText = ("You lose, rock beats scissors");
                computerScore++;
            }
            break;

        default:
            resultsText = ("Something went wrong");
    }
    populateResultsDiv(resultsText);
}