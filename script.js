// Function to get the computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Play a single round
function playRound(humanChoice, computerChoice) {
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (humanChoice === computerChoice) {
      return "It's a tie!";
  } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
  ) {
      humanScore++;
      return `You win this round! ${humanChoice} beats ${computerChoice}`;
  } else {
      computerScore++;
      return `You lose this round! ${computerChoice} beats ${humanChoice}`;
  }
}

// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Create UI elements for displaying results
const resultsDiv = document.createElement('div');
resultsDiv.id = 'results';
document.body.appendChild(resultsDiv);

const scoreDiv = document.createElement('div');
scoreDiv.id = 'score';
document.body.appendChild(scoreDiv);

// Handle button clicks
function handleButtonClick(event) {
  const humanChoice = event.target.id;
  const computerChoice = getComputerChoice();
  const resultMessage = playRound(humanChoice, computerChoice);

  resultsDiv.textContent = resultMessage;
  scoreDiv.textContent = `Score: You - ${humanScore}, Computer - ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
      const winner = humanScore === 5 ? "You" : "The Computer";
      resultsDiv.textContent = `${winner} won the game! Final Score: You - ${humanScore}, Computer - ${computerScore}`;
      resetGame();
  }
}

// Reset the game
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  scoreDiv.textContent = 'Score: You - 0, Computer - 0';
}

// Attach event listeners to buttons
document.querySelector('#rock').addEventListener('click', handleButtonClick);
document.querySelector('#paper').addEventListener('click', handleButtonClick);
document.querySelector('#scissors').addEventListener('click', handleButtonClick);
