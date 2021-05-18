let rulesButton = document.querySelector('.rules-btn')
let rules = document.querySelector('.rules')
let closeButton = document.querySelector('.close-button')
let show = false;
let optionsList = document.querySelectorAll('.options__icon')
let options = [...optionsList]
let optionsSection = document.querySelector('.options')
let gameSection = document.querySelector('.game')

const onRule = () => {
    show = true
    rulesDisplay()
}

const onClose = () => {
    show = false
    rulesDisplay()
}

const choseOption = () => {
    optionsSection.style.display = 'none'
    gameSection.style.display = 'flex'
}

const rulesDisplay = () => show ? rules.style.display = 'block' : rules.style.display = 'none'
options.forEach((op, id) => op.addEventListener('click', choseOption))


rulesButton.addEventListener('click', onRule)
closeButton.addEventListener('click', onClose)