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
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; ++i){
      const playerChoice = prompt ("Choose between Rock, Paper, Scissors");
      const computerChoice = getComputerChoice();
      
      const result = playRound(playerChoice, computerChoice);
      console.log(result);
      if (result.includes('Win')){
        playerScore++;
      }else if (result.includes('Lose'))
        computerScore++;


    }

    if (playerScore > computerScore){
      console.log( `You win! The score was ${playerScore}-${computerScore}.`);
    } else if (playerScore > computerScore){
      console.log(`You lost! The score was ${playerScore}-${computerScore}.`);
    }else{
      console.log(`It was a tie! The score was ${playerScore}-${computerScore}.`);      
    }
  }

  game();