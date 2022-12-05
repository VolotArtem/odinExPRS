const choise = ["ROCK", "PAPER", "SCISSORS"]
var playerWin = 0;
var ComputerWin = 0;

function getChoisePlayer () {
    let playerSelection = prompt("Rock, Paper or Scissors?",)
    playerSelection = playerSelection.toUpperCase();
    return playerSelection
} 

function getComputerChoice(choise){
    let randomChoise = Math.floor(Math.random()*choise.length)
    return choise[randomChoise];
}
        
function playOneRound(getChoisePlayer,getComputerChoice){
switch(getChoisePlayer){
    case "ROCK": if(getComputerChoice=="ROCK"){
        return console.log("Rock and Rock , play again!")        
    } else if(getComputerChoice=="PAPER") {
        ComputerWin++;
        return console.log("You Lose! Paper beats Rock")
    } else if(getComputerChoice=="SCISSORS") {
        playerWin ++;
         return console.log("You Win! Rock beats Scissors")
    }
    break;
    case "PAPER": if(getComputerChoice=="PAPER"){
        return console.log("Paper and Paper , play again!") 
    } else if(getComputerChoice=="ROCK") {
        return console.log("You Win! Paper beats Rock")
    } else if(getComputerChoice=="SCISSORS") {
        ComputerWin++;
        return console.log("You Lose! Rock beats Scissors")
    }
    break;
    case "SCISSORS": if(getComputerChoice=="PAPER"){
        playerWin ++;
        return console.log("You Win! Scissors beats Paper") 
    } else if(getComputerChoice=="ROCK") {
        ComputerWin++;
        return console.log("You Lose! Rock beats Scissors")
    } else if(getComputerChoice=="SCISSORS") {
        return console.log("Scissors and Scissors , play again!")
    }
    break;
    
}
}

function whoWin(){
    if(playerWin>ComputerWin){
       return alert("You win gratz")
    } else if (ComputerWin>playerWin){
        return  alert ("You lose sorry")
    } else return alert ("Draw! Refresh page , if you wanna play again")
}

function timesToPlay (playOneRound){
    let tries = prompt ("How many times to play?",)
for(let i = 0;i < tries; i++){
    let leftTries = tries - i - 1
    playOneRound(getChoisePlayer(),getComputerChoice(choise));
    console.log(`You have ${leftTries} tries`)
}
whoWin();
alert("Game over!")
}

timesToPlay(playOneRound);