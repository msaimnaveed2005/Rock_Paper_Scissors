let humanScore=0,computerScore=0;
function getComputerChoice() {
    let value;
    value = Math.random();

    if (value > 0.66) 
    { 
        console.log("ROCK");
    } 
    else if (value > 0.33) 
    {
        console.log("PAPER");
    } 
    else 
    {
        console.log("SCISSORS");
    }
}
function getHumanChoice()
{
    let user_value = prompt("Enter your move: ");
    user_value = user_value.toLowerCase(); // convert to lowercase

    if(user_value == "rock")
    {
        console.log("ROCK");
    }
    else if(user_value == "paper")
    {
        console.log("PAPER");
    }
    else if(user_value == "scissors")
    {
        console.log("SCISSORS");
    }
}

function PlayRound(humanChoice,computerChoice)
{

}
getHumanChoice();
getComputerChoice();