const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

document.querySelectorAll('.choice').forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.id;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    updateHands(playerChoice, computerChoice);
    const result = determineWinner(playerChoice, computerChoice);
    document.getElementById('result').textContent = result;
    updateScore(result);
  });
});

function updateHands(player, computer) {
  document.getElementById('player-hand').src = `assets/${player}.png`;
  document.getElementById('computer-hand').src = `assets/${computer}.png`;
}

function determineWinner(player, computer) {
  if (player === computer) return "It's a tie!";
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}

function updateScore(result) {
  if (result === 'You win!') {
    playerScore++;
    document.getElementById('player-score').textContent = playerScore;
  } else if (result === 'You lose!') {
    computerScore++;
    document.getElementById('computer-score').textContent = computerScore;
  }
}

