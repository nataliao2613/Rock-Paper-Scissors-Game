let rulesButton = document.querySelector('.rules-btn')
let rules = document.querySelector('.rules')
let closeButton = document.querySelector('.close-button')
let body = document.querySelector('body')
let show = false;

const onRule = () => {
    show = true
    rulesDisplay()
}

const onClose = () => {
    show = false
    rulesDisplay()
}

const rulesDisplay = () => {
    if(show){
        rules.style.display = 'block'
        
    }
    else {
        rules.style.display = 'none'
    }
}
 


rulesButton.addEventListener('click', onRule)
closeButton.addEventListener('click', onClose)