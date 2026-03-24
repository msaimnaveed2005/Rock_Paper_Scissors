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
    let user_value=prompt("Enter your move: ");
    if(user_value=="R")
    {
        console.log("ROCK");
    }
    else if(user_value=="P")
    {
        console.log("PAPER");
    }
    else if(user_value=="S")
    {
        console.log("SCISSORS");
    }
}
getHumanChoice();
getComputerChoice();