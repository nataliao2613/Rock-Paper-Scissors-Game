let rulesButton = document.querySelector('.rules-btn')
let rules = document.querySelector('.rules')
let closeButton = document.querySelector('.close-button')
let optionsList = document.querySelectorAll('.options__icon')
let optionsSection = document.querySelector('.options')
let gameSection = document.querySelector('.game')
let userPart = document.querySelector('.game__user')
let computerPart = document.querySelector('.game__computer')
let userChoice = document.querySelector('.user-choice div')
let computerChoiceBox = document.querySelector('.computer-choice')
let computerChoice = document.querySelector('.computer-choice div')
let scoreBox = document.querySelector('.score-box__text .points')
let resultBox = document.querySelector('.result')
let resultHeader = document.querySelector('.result__header')
let playAgainButton = document.querySelector('.result button')

let show = false
let options = [...optionsList]
let moves = ['paper', 'scissors', 'rock']
let userMove = ''
let computerMove = ''
let score = 0
let winner = ''

const onRule = () => {
    show = true
    rulesDisplay()
}

const onClose = () => {
    show = false
    rulesDisplay()
}

const rulesDisplay = () => show ? rules.style.display = 'block' : rules.style.display = 'none'

const computerChooses = () => {
    let id = Math.floor(Math.random() * moves.length)
    computerMove = moves[id]
    computerChoice.classList.add(`options__icon--${computerMove}`)
    computerChoiceBox.classList.add(`computer-choice--${computerMove}`)
    setTimeout(moveChoices, 2000)
}

const showComputerChoice = () => computerChoiceBox.style.display = 'block'

const game = () => {
    switch(userMove){
        case 'paper':
            if(computerMove === 'scissors'){
                score--
                winner = 'You lose'
            } else if(computerMove === 'rock'){
                score++
                winner = 'You win'
            } else winner = 'Draw'
            break
        case 'rock':
            if(computerMove === 'paper'){
                score--
                winner = 'You lose'
            } else if(computerMove === 'scissors'){
                score++
                winner = 'You win'
            } else winner = 'Draw'
            break
        case 'scissors':
            if(computerMove === 'rock'){
                score--
                winner = 'You lose'
            } else if(computerMove === 'paper'){
                score++
                winner = 'You win'
            } else winner = 'Draw'
            break
    }
    scoreBox.textContent = score
    resultHeader.textContent = winner
    showComputerChoice()
}

const moveChoices = () => {
    userPart.classList.add('move-left')
    computerPart.classList.add('move-right')
    game()
    resultBox.style.display = 'flex'
}

const newGame = () => {
    optionsSection.style.display = 'block'
    gameSection.style.display = 'none'
    userChoice.classList.remove(`options__icon--${userMove}`)
    computerChoice.classList.remove(`options__icon--${computerMove}`)
    computerChoiceBox.classList.remove(`computer-choice--${computerMove}`)
    userPart.classList.remove('move-left')
    computerPart.classList.remove('move-right')
    resultBox.style.display = 'none'
    computerChoiceBox.style.display = 'none'
}

options.forEach((op, id) => op.addEventListener('click', () => {
    optionsSection.style.display = 'none'
    gameSection.style.display = 'flex'
    userMove = moves[id]
    userChoice.classList.add(`options__icon--${userMove}`)
    computerChooses()
}))

rulesButton.addEventListener('click', onRule)
closeButton.addEventListener('click', onClose)
playAgainButton.addEventListener('click', newGame)