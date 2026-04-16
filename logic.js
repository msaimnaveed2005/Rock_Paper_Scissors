
function getComputerChoice() 
{
    let value;
    value = Math.random();

    if (value > 0.66) 
    { 
        return "ROCK";
    } 
    else if (value > 0.33) 
    {
        return "PAPER";
    } 
    else 
    {
        return "SCISSORS";
    }
}
function getHumanChoice()
{
    let user_value = prompt("Enter your move: ");
    user_value = user_value.toLowerCase(); // convert to lowercase

    if(user_value == "rock")
    {
        return "ROCK";
    }
    else if(user_value == "paper")
    {
        return "PAPER";
    }
    else if(user_value == "scissors")
    {
        return "SCISSORS";
    }
}



function playGame()
{
  function PlayRound(humanChoice, computerChoice)
{
      console.log("Human chose:", humanChoice);
      console.log("Computer chose:", computerChoice);

    if(humanChoice == computerChoice)
    {
        console.log("TIE!");
    }
    else if(humanChoice == "ROCK" && computerChoice == "SCISSORS")
    {
        console.log("ROCK beats SCISSORS.");
        humanScore++;
       
    }
    else if(humanChoice == "ROCK" && computerChoice == "PAPER")
    {
        console.log("PAPER beats ROCK.");
         computerScore++;
    }
    else if(humanChoice == "PAPER" && computerChoice == "ROCK")
    {
        console.log("PAPER beats ROCK.");
        humanScore++;
    }
    else if(humanChoice == "PAPER" && computerChoice == "SCISSORS")
    {
        console.log("SCISSORS beats PAPER.");
         computerScore++;
    }
    else if(humanChoice == "SCISSORS" && computerChoice == "PAPER")
    {
        console.log("SCISSORS beats PAPER.");
        humanScore++;
    }
    else if(humanChoice == "SCISSORS" && computerChoice == "ROCK")
    {
        console.log("ROCK beats SCISSORS.");
         computerScore++;
    }
    else
    {
        console.log("INVALID INPUT");
    }
}
  let humanScore=0,computerScore=0;
  let humanChoice;
  let computerChoice;
  /*for(let i=0;i<5;i++)
  {
    humanChoice=getHumanChoice();
    computerChoice=getComputerChoice();
    PlayRound(humanChoice,computerChoice);
  }*/
    computerChoice=getComputerChoice();
    const rockbtn=document.querySelector("#rock");
    const paperbtn=document.querySelector("#paper");
    const scissorsbtn=document.querySelector("#scissors");

    rockbtn.addEventListener("click",()=>{
        PlayRound("Rock",computerChoice);
    });
    paperbtn.addEventListener("click",()=>{
        PlayRound("Paper",computerChoice);
    });
    scissorsbtnbtn.addEventListener("click",()=>{
        PlayRound("Scissors",computerChoice);
    });
  console.log("----- FINAL SCORE -----");
  console.log("HUMAN SCORE:",humanScore);
  console.log("COMPUTER SCORE:",computerScore);
   if(humanScore > computerScore)
    {
        console.log("HUMAN WINS THE GAME!");
    }
    else if(computerScore > humanScore)
    {
        console.log("COMPUTER WINS THE GAME!");
    }
    else
    {
        console.log("GAME IS A TIE!");
    }
}
 playGame();

