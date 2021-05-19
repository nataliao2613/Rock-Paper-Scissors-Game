let rulesButton = document.querySelector('.rules-btn')
let rules = document.querySelector('.rules')
let closeButton = document.querySelector('.close-button')
let optionsList = document.querySelectorAll('.options__icon')
let optionsSection = document.querySelector('.options')
let gameSection = document.querySelector('.game')
let logo = document.querySelector('header img')
let userChoice = document.querySelector('.user-choice div')
let computerChoice = document.querySelector('.computer-choice div')

let show = false
let options = [...optionsList]
let moves = ['paper', 'scissors', 'rock']
let userMove = ''
let computerMove = ''

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
}

const computerChooses = () => {
    let id = Math.floor(Math.random() * moves.length)
    computerMove = moves[id]
    computerChoice.classList.add(`options__icon--${computerMove}`)
    document.querySelector('.computer-choice').classList.add(`computer-choice--${computerMove}`)
    setTimeout(showComputerChoice, 3000)
}

const showComputerChoice = () => {
    document.querySelector('.computer-choice').style.display = 'block'
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