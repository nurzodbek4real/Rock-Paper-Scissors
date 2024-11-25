function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
    }

function getHumanChoice() {
    let userInput = prompt("Please input rock, paper, or scissors:").toLowerCase();

    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        console.log("Invalid input. Please enter 'rock', 'paper', or 'scissors'.");
        console.log(getHumanChoice());
    }
}


function playGame() {
  
  let humanScore = 0;
  let computerScore = 0;

  for (round = 1; round <= 5; round++) {
  console.log(`Round ${round}:`);

  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  
  const result = playRound(humanChoice, computerChoice);


  if (result === "human") {
    humanScore++;
  } else if (result === "computer") {
    computerScore++;
  }

  console.log(`Current Scores: You - ${humanScore}, Computer - ${computerScore}\n`);


  if (humanScore > computerScore) {
    console.log(`Congratulations. You won the game with a score of ${humanScore} to ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`Game over! The computer won with the score of ${computerScore} to ${humanScore}`);
  } else {
    console.log(`It's a tie. Both you and the computer scored ${humanScore}`);
  }
}
}
  
  // Refactor playRound to return the winner
  function playRound(humanChoice, computerChoice) {
    // Normalize humanChoice to be case-insensitive
    humanChoice = humanChoice.toLowerCase();
  
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
  
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
      return "tie";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
      return "human";
    } else {
      console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
      return "computer";
    }
  }
  
  // Example Game Start
  playGame();