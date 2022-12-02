const choise = ["ROCK", "PAPER", "SCISSORS"]
let playerSelection = prompt("Rock, Paper or Scissors?",)
playerSelection = playerSelection.toUpperCase();
function getComputerChoice(choise){
    let randomChoise = Math.floor(Math.random()*choise.length)

    return choise[randomChoise];
}
function playOneRound(playerSelection,getComputerChoice){
switch(playerSelection){
    case "ROCK": if(getComputerChoice=="ROCK"){
        return alert("Rock and Rock , play again!")        
    } else if(getComputerChoice=="PAPER") {
        return alert("You Lose! Paper beats Rock")
    } else if(getComputerChoice=="SCISSORS") {
         return alert("You Win! Rock beats Scissors")
    }
    break;
    case "PAPER": if(getComputerChoice=="PAPER"){
        return alert("Paper and Paper , play again!") 
    } else if(getComputerChoice=="ROCK") {
        return alert("You Win! Paper beats Rock")
    } else if(getComputerChoice=="SCISSORS") {
        return alert("You Lose! Rock beats Scissors")
    }
    break;
    case "SCISSORS": if(getComputerChoice=="PAPER"){
        return alert("You Win! Scissors beats Paper") 
    } else if(getComputerChoice=="ROCK") {
        return alert("You Lose! Rock beats Scissors")
    } else if(getComputerChoice=="SCISSORS") {
        return alert("Scissors and Scissors , play again!")
    }
    break;
    
}

}
playOneRound(playerSelection,getComputerChoice(choise));
