const choise = ["ROCK", "PAPER", "SCISSORS"];
var playerWin = 0;
var computerWin = 0;
var roundTime = 1;
const innerComputerChoise = document.getElementById("enemy-choise");
const innerPlayerChoise = document.getElementById("player-choise");
const playerChoise = document.querySelectorAll(".button"); // получаю лист элементов с классом как выборпользователя
const numberRound = document.getElementById("round");
const roundResult = document.getElementById("round-result");
const popup = document.getElementById("my-popup"),
  popupClose = document.getElementById("close"),
  popupPlayAgain = document.getElementById("play-again");
const grats = document.getElementById("grats");
const lose = document.getElementById("lose");
const popupStartGame = document.getElementById("start-game"),
  popup2 = document.getElementById("my-popup2");
const inputRound = document.getElementById("input-round");
var scoreLimit;
window.onload = init; //вызов функции инит после загрузки страницы
//по всем элементам листа их [3] устанавливаю метод по клику
function init() {
  for (let i = 0; i < playerChoise.length; i++) {
    playerChoise[i].onclick = getButton;
  }
  inputRound.onkeydown = handleKeyPress; // принимает значение вводимое пользователем по кнопке enter на клавиатуре и начинает игру
}
// функция играем один раунд камень ножницы или бумагу
function getButton(eventObj) {
  let buttonBlock = eventObj.target; //присваиваем переменной выбор на экране камень ножницы или бумага
  playerSelection = buttonBlock.classList[1].toUpperCase(); //мне нужен верхний регистр названия класса для дальнейшего использования(я мог назвать класс большими буквами и не делать этого , но я хотел попробовать написать так)
  numberRound.innerText = `Round: ${roundTime}`; //вывожу на экран номер раунда
  outPlayerChoise(playerSelection); //вывожу на экран выбор пользователя
  playOneRound(playerSelection, getComputerChoice(choise)); //вызов функции с логикой игры одного раунда с аргументами выбора пользователя и компьютера( с параметром массива)
  whoWin(scoreLimit); //вызов фукнции логики победы или проигрыша ( с параметром лимита очков установленного пользователем)
}
//фукнция вывода очков пользователя и компъютера с параметрами победы пользователя и компъютера
function outScore(playerWin, computerWin) {
  let yourScore = document.getElementById("player-score");
  let enemyScore = document.getElementById("enemy-score");
  yourScore.innerText = `Your score ${playerWin}`;
  enemyScore.innerText = `Computer score ${computerWin}`;
}

//функция вывода читаемого значения выбора пользователя с параметром выбора пользователя
function outPlayerChoise(playerSelection) {
  let playerChoise = playerSelection;
  let choiseLowLetter = playerChoise.slice(1).toLowerCase(); //все что после первого знака уменьшить регистр
  let choiseHighLetter = playerChoise[0]; //присваиваем первый знак
  let rightWriteChoise = choiseHighLetter + choiseLowLetter; // собираем слово первый знак плюс все что после первого
  return (innerPlayerChoise.innerText = `Your choise: ${rightWriteChoise}`);
}
////функция вывода читаемого значения выбора компъютера с параметром выбора компъютера
function outComputerChoise(computerchoise) {
  let compChoise = computerchoise;
  let choiseLowLetter = compChoise.slice(1).toLowerCase();
  let choiseHighLetter = compChoise[0];
  let rightWriteChoise = choiseHighLetter + choiseLowLetter;
  return (innerComputerChoise.innerText = `Computer choise: ${rightWriteChoise}`);
}
// функция выбора компъютера
function getComputerChoice(choise) {
  let randomChoise = Math.floor(Math.random() * choise.length);
  let computerchoise = choise[randomChoise];
  outComputerChoise(computerchoise);
  return choise[randomChoise];
}
//Логика игры одного раунда Параметры: функция выбора пользователя , функция выбора компъютера
function playOneRound(getChoisePlayer, getComputerChoice) {
  switch (
  getChoisePlayer // устанавливаем аргумент выбора пользователя
  ) {
    case "ROCK": // если выбор пользователя ROCK
      roundTime++; //каждый выбор пользователя всегда + к счетчику раунда

      if (getComputerChoice == "ROCK") {
        outScore(playerWin, computerWin);
        return (roundResult.innerText =
          "Round result: Rock and Rock , play again!");
      } else if (getComputerChoice == "PAPER") {
        //то иначе если выбор компъютера равен PAPER
        computerWin++; //компьютеру засчитывается победа и счетчик увелчивается на 1
        outScore(playerWin, computerWin); // вызов функции вывода очков с аргументами ( счетчик побед пользователя и компъютера)
        return (roundResult.innerText =
          "Round result: You Lose! Paper beats Rock"); // вывод сообщения о событии в раунде
      } else if (getComputerChoice == "SCISSORS") {
        playerWin++;
        outScore(playerWin, computerWin);
        return (roundResult.innerText =
          "Round result: You Win! Rock beats Scissors");
      }

      break; // выход если ROCK , чтобы проверка не пошла дальше
    case "PAPER":
      roundTime++;
      if (getComputerChoice == "PAPER") {
        outScore(playerWin, computerWin);
        return (roundResult.innerText =
          "Round result: Paper and Paper , play again!");
      } else if (getComputerChoice == "ROCK") {
        playerWin++;
        outScore(playerWin, computerWin);
        return (roundResult.innerText =
          "Round result: You Win! Paper beats Rock");
      } else if (getComputerChoice == "SCISSORS") {
        computerWin++;
        outScore(playerWin, computerWin);
        return (roundResult.innerText =
          "Round result: You Lose! Paper beats Scissors");
      }

      break;
    case "SCISSORS":
      roundTime++;
      if (getComputerChoice == "PAPER") {
        playerWin++;
        outScore(playerWin, computerWin);
        return (roundResult.innerText =
          "Round result: You Win! Scissors beats Paper");
      } else if (getComputerChoice == "ROCK") {
        computerWin++;
        outScore(playerWin, computerWin);
        return (roundResult.innerText =
          "Round result: You Lose! Rock beats Scissors");
      } else if (getComputerChoice == "SCISSORS") {
        outScore(playerWin, computerWin);
        return (roundResult.innerText =
          "Round result: Scissors and Scissors , play again!");
      }

      break;
  }
}
//функция определения победителя с параметром лимита очков
function whoWin(scoreLimit) {
  if (playerWin === scoreLimit) {
    //если счетчик побед пользователя равен лимиту очков то
    popupViewEnd(); //вывести модальное окно с сообщением
    grats.style.display = "block"; // вывод сообщения о победе пользователя
  } else if (computerWin === scoreLimit) {
    popupViewEnd();
    lose.style.display = "block";
  }
}
/* pop up info after game over */
function popupViewEnd() {
  popup.style.display = "block";
}
// принимает значение вводимое пользователем по кнопке enter на клавиатуре и начинает игру
function handleKeyPress(event) {
  if (event.keyCode === 13) {
    popupStartGame.onclick();
    return false;
  }
}
//кнопка( в конце игры) перезапускает страницу
popupPlayAgain.onclick = function () {
  location.reload();
};
// кнопка Start game убирает главное меню и берет значение введенное пользователем в инпут
popupStartGame.onclick = function () {
  scoreLimit = parseInt(inputRound.value);
  if (checkInput(scoreLimit, inputRound)) {
    popup2.style.display = "none";
  }
};
//фукнция проверки правильности вводных дданых
const checkInput = (scoreLimit, inputRound) => {
  if (!isNaN(scoreLimit)) {
    //если вводимое значение математически исчисляемое то
    if (scoreLimit <= 0) {
      inputRound.placeholder = "ENTER POZITIVE NUMBER!";
      inputRound.value = "";
      inputRound.classList.add("wrong-input");
      return false;
    } else if (scoreLimit > 20) {
      inputRound.placeholder = `I dont think , what you want to play until ${inputRound.value} score , change number to less`;
      inputRound.value = "";
      return false;
    } else return true;
  } else {
    inputRound.placeholder = "ENTER NUMBER , DONT TAUNT ME!";
    inputRound.value = "";
    inputRound.classList.add("wrong-input");
    return false;
  }
};
