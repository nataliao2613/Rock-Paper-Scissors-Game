let rulesButton = document.querySelector('.rules-btn')
let rules = document.querySelector('.rules')
let closeButton = document.querySelector('.close-button')
let optionsList = document.querySelectorAll('.options__icon')
let optionsSection = document.querySelector('.options')
let gameSection = document.querySelector('.game')
let logo = document.querySelector('header img')
let userChoice = document.querySelector('.user-choice div')
let computerChoice = document.querySelector('.computer-choice div')
let scoreBox = document.querySelector('.score-box__text .points')
let resultBox = document.querySelector('.result')
let resultHeader = document.querySelector('.result__header')

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

const onLogoClick = () => {
    optionsSection.style.display = 'block'
    gameSection.style.display = 'none'
    userChoice.classList.remove(`options__icon--${userMove}`)
    computerChoice.classList.remove(`options__icon--${computerMove}`)
    document.querySelector('.computer-choice').classList.remove(`computer-choice--${computerMove}`)
}

const computerChooses = () => {
    let id = Math.floor(Math.random() * moves.length)
    computerMove = moves[id]
    computerChoice.classList.add(`options__icon--${computerMove}`)
    document.querySelector('.computer-choice').classList.add(`computer-choice--${computerMove}`)
    setTimeout(moveChoices, 2000)
}

const showComputerChoice = () => {
    document.querySelector('.computer-choice').style.display = 'block'
    
}

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
    document.querySelector('.game__user').classList.add('move-left')
    document.querySelector('.game__computer').classList.add('move-right')
    game()
    resultBox.style.display = 'flex'
    
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
logo.addEventListener('click', onLogoClick)