
const choices = ["ROCK", "PAPER", "SCISSORS"]

function getComputerChoice () {
    return choices[Math.floor(Math.random()*choices.length)]
}


function showStats(){
    return "Player has won "+playerWins+" Games while Computer has won "+computerWins+" Games"
}

function resetStats(){
    playerWins=0
    computerWins=0
}

function setGames(num){
    games=num
}
const playerChoiceInput = document.getElementById('user-choice')
const playButton = document.getElementById('play-button')
const resultMessageDiv = document.getElementById('result-message')
const overallResultDiv = document.getElementById('overall-result')
const resetButton = document.getElementById('reset-button')
let playerWins=0
let computerWins=0


function game (playerChoice, computerChoice) {
    let message    
    if (playerChoice===computerChoice) {
            message="Uuh that's a Draw"
    } 
    else if (playerChoice==="ROCK") {
            if (computerChoice==="SCISSORS"){
                playerWins++
                message="You win, Rock beats Scissors"
            } else {
                computerWins++
                message="You lose, Paper beats Rock"
            }
    } else if (playerChoice==="SCISSORS") {
            if (computerChoice==="PAPER"){
                playerWins++
                message="You win, Scissors beats Paper"
            } else {
                computerWins++
                message="You lose, Rock beats Scissors"
            }
    }else if (playerChoice==="PAPER") {
            if (computerChoice==="ROCK"){
                playerWins++
                message="You win, Paper beats Rock"
            } else {
                computerWins++
                message="You lose, Scissors beats Paper"
            }
         }
    let stats = showStats()
    resultMessageDiv.textContent = message
    overallResultDiv.textContent = stats

}

playButton.addEventListener('click', () => {
    // Get the user's choice from the input box.
    const userChoice = playerChoiceInput.value.toUpperCase()
  
    // Make sure the user's choice is valid.
    if (!choices.includes(userChoice)) {
      resultMessageDiv.textContent = 'Invalid choice. Please choose rock, paper, or scissors.'
      return
    } else {
        game (userChoice, getComputerChoice())
    }
})




resetButton.addEventListener('click', () => {
    // Reset the game state and clear the result messages.
    playerWins = 0
    computerWins = 0
    resultMessageDiv.textContent = ''
    overallResultDiv.textContent = ''
  })
  
