let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  }

  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    return 'player wins';
  } else {
    computerScore++;
    return 'computer wins!';
  }
}

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  document.getElementById('winner-announcement').innerHTML = result;
  document.getElementById('player-choice-emoji').textContent = getEmoji(playerChoice);
  document.getElementById('computer-choice-emoji').textContent = getEmoji(computerChoice);
  updateScores();
}

function getEmoji(choice) {
  switch (choice) {
    case 'rock':
      return '✊';
    case 'paper':
      return '✋';
    case 'scissors':
      return '✌️';
    default:
      return '';
  }
}

function updateScores() {
  document.getElementById('scores').textContent = `Computer ${computerScore} - ${playerScore} Player`;
}

document.getElementById('rock-btn').addEventListener('click', function () {
  playGame('rock');
});

document.getElementById('paper-btn').addEventListener('click', function () {
  playGame('paper');
});

document.getElementById('scissors-btn').addEventListener('click', function () {
  playGame('scissors');
});
