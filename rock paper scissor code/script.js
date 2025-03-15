
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    
    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{

        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText", "blueText");
    
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        default:
            resultDisplay.classList.add("blueText");
    }

    playerScoreDisplay.classList.remove("greenText", "redText", "blueText");
    computerScoreDisplay.classList.remove("greenText", "redText", "blueText");

    if(playerScore === computerScore){
        playerScoreDisplay.classList.add("blueText");
        computerScoreDisplay.classList.add("blueText");
    }
    else if(playerScore > computerScore){
        playerScoreDisplay.classList.add("greenText");
        computerScoreDisplay.classList.add("redText");
    }
    else{
        playerScoreDisplay.classList.add("redText");
        computerScoreDisplay.classList.add("greenText");
    }

}