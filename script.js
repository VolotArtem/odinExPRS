const choise = ["ROCK", "PAPER", "SCISSORS"];
var playerWin = 0;
var ComputerWin = 0;
var timeToOver = 5;
let playerChoise = document.querySelectorAll(".button");

window.onload = init;

function init (){    
    for (let i =0;i<playerChoise.length; i++){
    playerChoise[i].onclick = getButton;
    }  
}

function getButton(eventObj){
let buttonBlock = eventObj.target
console.log(buttonBlock)
playerSelection =buttonBlock.classList[1].toUpperCase();
console.log(playerSelection)
whoWin();
return playOneRound(playerSelection,getComputerChoice(choise))

}
// let playerSelection = rock.addEventListener("click", function () {
//     playerSelection =rock.classList[1].toUpperCase();
    
//     playOneRound(playerSelection, getComputerChoice(choise));
//     console.log(playerSelection)
// });

// let playerSelection1 = paper.addEventListener("click", function () {
//     playerSelection =paper.classList[1].toUpperCase();
    
//     playOneRound(playerSelection, getComputerChoice(choise));
//     console.log(playerSelection)
//   });

// let playerSelection2 = scissors.addEventListener("click", function () {
//     playerSelection =scissors.classList[1].toUpperCase();
    
//     playOneRound(playerSelection, getComputerChoice(choise));
//     console.log(playerSelection)
//   });

// function getChoisePlayer(playerSelection) {
  
//   playerSelection = playerSelection.toUpperCase();
//   return playerSelection;
// }
function startNewGame (){
    playerWin = 0;
    ComputerWin = 0;
}


function getComputerChoice(choise) {
  let randomChoise = Math.floor(Math.random() * choise.length);
  return choise[randomChoise];
}

function playOneRound(getChoisePlayer, getComputerChoice) {
  switch (getChoisePlayer) {
    case "ROCK":
      if (getComputerChoice == "ROCK") {
        return console.log("Rock and Rock , play again!");
      } else if (getComputerChoice == "PAPER") {
        ComputerWin++;
        return console.log("You Lose! Paper beats Rock");
      } else if (getComputerChoice == "SCISSORS") {
        playerWin++;
        return console.log("You Win! Rock beats Scissors");
      }
      break;
    case "PAPER":
      if (getComputerChoice == "PAPER") {
        return console.log("Paper and Paper , play again!");
      } else if (getComputerChoice == "ROCK") {
        return console.log("You Win! Paper beats Rock");
      } else if (getComputerChoice == "SCISSORS") {
        ComputerWin++;
        return console.log("You Lose! Rock beats Scissors");
      }
      break;
    case "SCISSORS":
      if (getComputerChoice == "PAPER") {
        playerWin++;
        return console.log("You Win! Scissors beats Paper");
      } else if (getComputerChoice == "ROCK") {
        ComputerWin++;
        return console.log("You Lose! Rock beats Scissors");
      } else if (getComputerChoice == "SCISSORS") {
        return console.log("Scissors and Scissors , play again!");
      }
      break;
  }
}

function whoWin() {
  if (playerWin === timeToOver) {
    return alert("You win gratz");
  } else if (ComputerWin === timeToOver) {
    return alert("You lose sorry");
  } 
}

// function timesToPlay (tries){
    
//     // let tries = prompt ("How many times to play?",)
// for(let i = 0;i < tries; i++){
//     let leftTries = tries - i - 1
//     // playOneRound(getChoisePlayer(),getComputerChoice(choise));
    
//     console.log(`You have ${leftTries} tries`)
// }
// whoWin();
// alert("Game over!")
// }




// timesToPlay(playOneRound);
