let rock = 'rock'
let paper = 'paper'
let scissors = 'scissors'
let optionArray = [rock, paper, scissors]

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  return optionArray[randomNumber]
}

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection)
  console.log(computerSelection)
  if (
    playerSelection === 'rock' &&
    computerSelection === 'scissors'
  ) {
    return 'You win! Rock beats scissors'
  } else if (
    playerSelection === 'rock' &&
    computerSelection === 'paper'
  ) {
    return 'You loose! Paper beats rock'
  } else if (
    playerSelection === 'paper' &&
    computerSelection === 'rock'
  ) {
    return 'You win! Paper beats rock'
  } else if (
    playerSelection === 'paper' &&
    computerSelection === 'scissors'
  ) {
    return 'You loose! Scissors beat paper'
  } else if (
    playerSelection === 'scissors' &&
    computerSelection === 'paper'
  ) {
    return 'You win! Scissors beat paper'
  } else if (
    playerSelection === 'scissors' &&
    computerSelection === 'rock'
  ) {
    return 'You loose! Rock beats scissors'
  } else {
    return "That's a tie!"
  }
}

// const playerSelection = 'rock'
// const computerSelection = getComputerChoice()
// console.log(playRound(playerSelection, computerSelection))

function checkPrompt() {
  let answer = prompt('Whats your move?')
  if (optionArray.includes(answer)) {
    return answer
  } else {
    throw new Error('should be rock, paper or scissors')
  }
}

let playerWins = 0
let computerWins = 0

let gameContinues = true

function checkScore() {
  if (playerWins === 3 || computerWins === 3) {
    gameContinues = false
  }
}

function game() {
  while (gameContinues) {
    const playerSelection = checkPrompt()
    const computerSelection = getComputerChoice()
    const result = playRound(
      playerSelection,
      computerSelection
    )
    console.log(result)
    if (
      result === 'You win! Rock beats scissors' ||
      result === 'You win! Paper beats rock' ||
      result === 'You win! Scissors beat paper'
    ) {
      playerWins += 1
    } else if (
      result === 'You loose! Paper beats rock' ||
      result === 'You loose! Rock beats scissors' ||
      result === 'You loose! Scissors beat paper'
    ) {
      computerWins += 1
    }
    checkScore()
    console.log(
      `Human - ${playerWins} : Computer - ${computerWins}`
    )
  }

  playerWins > computerWins
    ? console.log('Player wins')
    : console.log('Computer wins')
}

game()
