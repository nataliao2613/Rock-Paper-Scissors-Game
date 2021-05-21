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
let score = ''
let winner = ''

const setHeader = (title, left) => {
    winner = title
    if(document.body.clientWidth === 640){
        resultHeader.style.left = left
    }
}

if(window.localStorage.getItem('score') === null) score = 0
    else score = window.localStorage.getItem('score')

scoreBox.textContent = score

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

const showComputerChoice = () => {
    computerChoiceBox.style.display = 'block'
    setTimeout(() => {
            if(winner === 'You win'){
        userChoice.classList.add('winner-shadow')
    }
    else if(winner === 'You lose'){
        computerChoice.classList.add('winner-shadow')
    } else {
        userChoice.classList.add('winner-shadow')
        computerChoice.classList.add('winner-shadow')
    }
    }, 1000)

}

const game = () => {
    switch(userMove){
        case 'paper':
            if(computerMove === 'scissors'){
                score--
                setHeader('You lose', '22%')
                
            } else if(computerMove === 'rock'){
                score++
                setHeader('You win', '27%')             
            } else {
                setHeader('Draw', '0')
            } 
            break
        case 'rock':
            if(computerMove === 'paper'){
                score--
                setHeader('You lose', '22%')
            } else if(computerMove === 'scissors'){
                score++
                setHeader('You win', '27%')     
            } else{
                setHeader('Draw', '0')
            } 
            break
        case 'scissors':
            if(computerMove === 'rock'){
                score--
                setHeader('You lose', '22%')
            } else if(computerMove === 'paper'){
                score++
                setHeader('You win', '27%')     
            } else{
                setHeader('Draw', '0')
            } 
            break
    }
    window.localStorage.setItem('score', score)
    scoreBox.textContent = window.localStorage.getItem('score')
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
    gameSection.style.animation = 'disappear 1s 1'
    setTimeout(() => gameSection.style.display = 'none', 500)
    optionsSection.classList.add('appears')
    setTimeout(() => optionsSection.style.display = 'block', 500) 
    setTimeout(() => {
        userChoice.classList.remove(`options__icon--${userMove}`)
        computerChoice.classList.remove(`options__icon--${computerMove}`)
        computerChoiceBox.classList.remove(`computer-choice--${computerMove}`)
        userPart.classList.remove('move-left')
        computerPart.classList.remove('move-right')
        resultBox.style.display = 'none'
        computerChoiceBox.style.display = 'none'
        userChoice.classList.remove('winner-shadow')
        computerChoice.classList.remove('winner-shadow')
        optionsSection.classList.remove('disappear')
        gameSection.classList.remove('appears')
    }, 1000)

}

options.forEach((op, id) => op.addEventListener('click', () => {
    optionsSection.classList.remove('appears')
    gameSection.style.animation = ''
    optionsSection.classList.add('disappear')
    setTimeout(() => {
      optionsSection.style.display = 'none'
      gameSection.classList.add('appears')
    }, 500)
    setTimeout(() => {
        gameSection.style.display = 'flex'     
    }, 500)  
    userMove = moves[id]
    userChoice.classList.add(`options__icon--${userMove}`)

    computerChooses()
}))

rulesButton.addEventListener('click', onRule)
closeButton.addEventListener('click', onClose)
playAgainButton.addEventListener('click', newGame)