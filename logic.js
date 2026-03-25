
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
    if(humanChoice == computerChoice)
    {
        console.log("TIE!");
    }
    else if(humanChoice == "ROCK" && computerChoice == "SCISSORS")
    {
        console.log("ROCK beats SCISSORS. HUMAN WINS!");
        humanScore++;
       
    }
    else if(humanChoice == "ROCK" && computerChoice == "PAPER")
    {
        console.log("PAPER beats ROCK. COMPUTER WINS!");
         computerScore++;
    }
    else if(humanChoice == "PAPER" && computerChoice == "ROCK")
    {
        console.log("PAPER beats ROCK. HUMAN WINS!");
        humanScore++;
    }
    else if(humanChoice == "PAPER" && computerChoice == "SCISSORS")
    {
        console.log("SCISSORS beats PAPER. COMPUTER WINS!");
         computerScore++;
    }
    else if(humanChoice == "SCISSORS" && computerChoice == "PAPER")
    {
        console.log("SCISSORS beats PAPER. HUMAN WINS!");
        humanScore++;
    }
    else if(humanChoice == "SCISSORS" && computerChoice == "ROCK")
    {
        console.log("ROCK beats SCISSORS. COMPUTER WINS!");
         computerScore++;
    }
    else
    {
        console.log("INVALID INPUT");
    }
}
  let humanScore=0,computerScore=0;
}
const humanChoice=getHumanChoice();
const computerChoice=getComputerChoice();
PlayRound(humanChoice,computerChoice);
