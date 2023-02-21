let playerScore = 0;
let computerScore = 0;
function getComputerChoice() {
    // generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);
  
    // return the corresponding choice
    switch (randomNumber) {
      case 0:
        return "Rock";
      case 1:
        return "Paper";
      case 2:
        return "Scissors";
    }
  }

  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    const playerScoreLabel = document.querySelector('#playerlabel');
    const computerScoreLabel = document.querySelector('#computerlabel');
    playerScoreLabel.textContent = 'Player Score: 0';
    computerScoreLabel.textContent = 'Computer Score: 0';
    const buttons = document.querySelectorAll('.reset');
    buttons.forEach((button) => {
      button.disabled = false;
    });
  }

  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
  
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  
  function game(){

    
    const playerScoreLabel = document.querySelector('#playerlabel');
    const computerScoreLabel = document.querySelector('#computerlabel');
    playerScoreLabel.textContent = 'Player Score: 0';
    computerScoreLabel.textContent = 'Computer Score: 0';
  
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
      
        const result = playRound(playerChoice, computerChoice);
        if (result.includes('Win')){
          playerScore++;
          playerScoreLabel.textContent = `Player Score: ${playerScore}`;
        } else if (result.includes('Lose')) {
          computerScore++;
          computerScoreLabel.textContent = `Computer Score: ${computerScore}`;
        }
  
        if (playerScore + computerScore === 5) {
          buttons.forEach((button) => button.disabled = true);
          if (playerScore > computerScore){
            playerScoreLabel.textContent = `' You Win! Player Score: ${playerScore}`;
            computerScoreLabel.textContent = `Computer Score: ${computerScore}`;
          } else if (playerScore < computerScore){
            playerScoreLabel.textContent = `You Lose! Player Score: ${playerScore}`;
            computerScoreLabel.textContent = `Computer Score: ${computerScore}`;
          }else{
            playerScoreLabel.textContent = ` It's a Tie! Player Score: ${playerScore}`;
            computerScoreLabel.textContent = `Computer Score: ${computerScore}`; 
     
          }
        }
      });
    });
  }

  
  game();