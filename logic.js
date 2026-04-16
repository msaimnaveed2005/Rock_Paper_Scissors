function getComputerChoice() {
    let value = Math.random();

    if (value > 0.66) {
        return "ROCK";
    } 
    else if (value > 0.33) {
        return "PAPER";
    } 
    else {
        return "SCISSORS";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const rockbtn = document.querySelector("#rock");
    const paperbtn = document.querySelector("#paper");
    const scissorsbtn = document.querySelector("#scissors");
    const resultDiv = document.querySelector("#result");
    const scoreDiv = document.querySelector("#score");
    const winnerDiv = document.querySelector("#winner");

    function PlayRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            resultDiv.textContent = "It's a TIE!";
        }
        else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
            resultDiv.textContent = "ROCK beats SCISSORS. Human wins this round.";
            humanScore++;
        }
        else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
            resultDiv.textContent = "PAPER beats ROCK. Computer wins this round.";
            computerScore++;
        }
        else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
            resultDiv.textContent = "PAPER beats ROCK. Human wins this round.";
            humanScore++;
        }
        else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
            resultDiv.textContent = "SCISSORS beats PAPER. Computer wins this round.";
            computerScore++;
        }
        else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
            resultDiv.textContent = "SCISSORS beats PAPER. Human wins this round.";
            humanScore++;
        }
        else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
            resultDiv.textContent = "ROCK beats SCISSORS. Computer wins this round.";
            computerScore++;
        }

        scoreDiv.textContent = `Score --- Human: ${humanScore} | Computer: ${computerScore}`;

        if (humanScore === 5) {
            winnerDiv.textContent = "HUMAN WINS THE GAME!";
            disableButtons();
        }
        else if (computerScore === 5) {
            winnerDiv.textContent = "COMPUTER WINS THE GAME!";
            disableButtons();
        }
    }

    function disableButtons() {
        rockbtn.disabled = true;
        paperbtn.disabled = true;
        scissorsbtn.disabled = true;
    }

    rockbtn.addEventListener("click", () => {
        PlayRound("ROCK", getComputerChoice());
    });

    paperbtn.addEventListener("click", () => {
        PlayRound("PAPER", getComputerChoice());
    });

    scissorsbtn.addEventListener("click", () => {
        PlayRound("SCISSORS", getComputerChoice());
    });
}

playGame();