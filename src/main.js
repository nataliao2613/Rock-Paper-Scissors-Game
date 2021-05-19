let rulesButton = document.querySelector('.rules-btn')
let rules = document.querySelector('.rules')
let closeButton = document.querySelector('.close-button')
let optionsList = document.querySelectorAll('.options__icon')
let optionsSection = document.querySelector('.options')
let gameSection = document.querySelector('.game')
let logo = document.querySelector('header img')

let show = false
let options = [...optionsList]
let moves = ['paper', 'scissors', 'rock']

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
}

options.forEach((op, id) => op.addEventListener('click', () => {
    optionsSection.style.display = 'none'
    gameSection.style.display = 'flex'
    let userChoice = document.querySelector('.user-choice div')
    userChoice.classList.add(`options__icon--${moves[id]}`)

}))

rulesButton.addEventListener('click', onRule)
closeButton.addEventListener('click', onClose)
logo.addEventListener('click', onLogoClick)