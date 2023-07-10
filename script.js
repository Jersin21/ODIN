
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Empate";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    return "Perdiste";
  } else {
    playerScore++;
    return "Ganaste";
  }
}

function getRandomSelection() {
  const selections = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * selections.length);
  return selections[randomIndex];
}

function playGame(playerSelection) {
  const computerSelection = getRandomSelection();
  const result = playRound(playerSelection, computerSelection);
  const resultElement = document.getElementById("result");
  resultElement.textContent = result;
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `Jugador: ${playerScore} - Computadora: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    let winner = playerScore === 5 ? "Jugador" : "Computadora";
    const messageElement = document.getElementById("message");
    messageElement.textContent = `${winner} ha ganado el juego!`;
    resultElement.classList.remove("winner", "loser");
    resultElement.classList.add(winner === "Jugador" ? "winner" : "loser");

    const buttons = document.getElementsByClassName("btn-choice");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  const scoreElement = document.getElementById("score");
  scoreElement.textContent = "Jugador: 0 - Computadora: 0";

  const resultElement = document.getElementById("result");
  resultElement.textContent = "";

  const messageElement = document.getElementById("message");
  messageElement.textContent = "";

  resultElement.classList.remove("winner", "loser");

  const buttons = document.getElementsByClassName("btn-choice");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
}