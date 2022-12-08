const choise = ["ROCK", "PAPER", "SCISSORS"];
var playerWin = 0;
var computerWin = 0;
var roundTime = 1;
const innerComputerChoise = document.getElementById("enemy-choise");
const innerPlayerChoise = document.getElementById("player-choise");
let playerChoise = document.querySelectorAll(".button");
const numberRound = document.getElementById("round");
const roundResult = document.getElementById("round result");
let popup = document.getElementById("my-popup"),
popupClose = document.getElementById("close"),
popupPlayAgain = document.getElementById("play-again")
let grats = document.getElementById("grats")
let lose = document.getElementById("lose")

window.onload = init;

function init() {
  for (let i = 0; i < playerChoise.length; i++) {
    playerChoise[i].onclick = getButton;
  }
}

function getButton(eventObj) {
  let buttonBlock = eventObj.target;
  console.log(buttonBlock);
  playerSelection = buttonBlock.classList[1].toUpperCase();
  console.log(playerSelection);
  numberRound.innerText = `Round: ${roundTime}`;
  
  outPlayerChoise(playerSelection);
  playOneRound(playerSelection, getComputerChoice(choise));
  whoWin(3);
}

function outScore(playerWin,computerWin){
let yourScore= document.getElementById("player-score")
let enemyScore= document.getElementById("enemy-score")
yourScore.innerText = `Your score ${playerWin}`
enemyScore.innerText = `Computer score ${computerWin}`
}

function startNewGame() {
  playerWin = 0;
  computerWin = 0;
  roundTime = 1;
  
}
function outPlayerChoise(playerSelection) {
  let playerChoise = playerSelection;
  let choiseLowLetter = playerChoise.slice(1).toLowerCase();
  let choiseHighLetter = playerChoise[0];
  let rightWriteChoise = choiseHighLetter + choiseLowLetter;
  return (innerPlayerChoise.innerText = `Your choise: ${rightWriteChoise}`);
}

function outComputerChoise(computerchoise){
  let compChoise = computerchoise;
  let choiseLowLetter=compChoise.slice(1).toLowerCase();
  let choiseHighLetter = compChoise[0];
  let rightWriteChoise = choiseHighLetter + choiseLowLetter;
  return innerComputerChoise.innerText = `Computer choise: ${rightWriteChoise}`;
}
function getComputerChoice(choise) {
  let randomChoise = Math.floor(Math.random() * choise.length);
  let computerchoise = choise[randomChoise]
  outComputerChoise(computerchoise)
  return choise[randomChoise];
}

function playOneRound(getChoisePlayer, getComputerChoice) {
  switch (getChoisePlayer) {
    case "ROCK":
      roundTime++;

      if (getComputerChoice == "ROCK") {
        outScore(playerWin,computerWin)
        return (roundResult.innerText =
          "Round result: Rock and Rock , play again!");
      } else if (getComputerChoice == "PAPER") {
        computerWin++;
        outScore(playerWin,computerWin)
        return (roundResult.innerText =
          "Round result: You Lose! Paper beats Rock");
      } else if (getComputerChoice == "SCISSORS") {
        playerWin++;
        outScore(playerWin,computerWin)
        return (roundResult.innerText =
          "Round result: You Win! Rock beats Scissors");
      }

      break;
    case "PAPER":
      roundTime++;
      if (getComputerChoice == "PAPER") {
        outScore(playerWin,computerWin)
        return (roundResult.innerText =
          "Round result: Paper and Paper , play again!");
      } else if (getComputerChoice == "ROCK") {
        playerWin++;
        outScore(playerWin,computerWin)
        return (roundResult.innerText =
          "Round result: You Win! Paper beats Rock");
      } else if (getComputerChoice == "SCISSORS") {
        computerWin++;
        outScore(playerWin,computerWin)
        return (roundResult.innerText =
          "Round result: You Lose! Paper beats Scissors");
      }

      break;
    case "SCISSORS":
      roundTime++;
      if (getComputerChoice == "PAPER") {
        playerWin++;
        outScore(playerWin,computerWin)
        return (roundResult.innerText =
          "Round result: You Win! Scissors beats Paper");
      } else if (getComputerChoice == "ROCK") {
        computerWin++;
        outScore(playerWin,computerWin)
        return (roundResult.innerText =
          "Round result: You Lose! Rock beats Scissors");
      } else if (getComputerChoice == "SCISSORS") {
        outScore(playerWin,computerWin)
        return (roundResult.innerText =
          "Round result: Scissors and Scissors , play again!");
      }

      break;
  }
}

function whoWin(scoreLimit) {
  if (playerWin === scoreLimit) {
    popupViewEnd();
    grats.style.display = "block"
    
  } else if (computerWin === scoreLimit) {
    popupViewEnd();
    lose.style.display = "block"
    
  }
}
/* pop up info after game over */
function popupViewEnd(){
  popup.style.display = "block"

}


popupPlayAgain.onclick = function(){
    popup.style.display ="none";
    location.reload();
  }
 
