const cards = document.querySelectorAll('.card')
const timeOfTry = document.querySelector('.compteur')

let timeTry = 0
let timeSuccess = 0
let tries = []

document.addEventListener('keydown',refresh)

function refresh(e){
    if(e.keyCode = 32){
        e.preventDefault() 
        for(i=0;i<cards.length; i++){
            cards[i].style.order = Math.round(Math.random()*12)
            cards[i].classList.add('is-flipped')
            cards[i].addEventListener('click', flipCard)
            cards[i].style.transition = 'transform 0s'
        }
        tries = []
        timeTry = 0
        timeSuccess = 0
        timeOfTry.textContent = `you've tried 0 fois`
    }   
}

for(i=0;i<cards.length; i++){
    cards[i].classList.add('is-flipped')
    cards[i].style.order = Math.round(Math.random()*12)
    cards[i].addEventListener('click', flipCard)
}

function flipCard(event){
    
for(i=0; i<cards.length; i++){
    cards[i].style.transition = 'transform 1s'
}
    let tg = event.currentTarget
    
    if(tries.length <=1 && tg.classList.contains('is-flipped')){
        tg.classList.remove('is-flipped')
        tries.push(tg)
        console.log(tries);
        if(tries.length == 2){
            timeTry ++
            timeOfTry.textContent = `you've tried ${timeTry} fois`

            if(tries[0].children[0].children[0].outerHTML == tries[1].children[0].children[0].outerHTML){
                tries[0].removeEventListener('click', flipCard)
                tries[1].removeEventListener('click', flipCard)
                tries = []
                timeSuccess ++

                if(timeSuccess == cards.length/2){
                    timeOfTry.textContent = `bravo! vous avez fini en ${timeTry} fois`
                }
            } else {
                setTimeout(whenIsWrong, 2000)
            }
        } 
    } 
}

function whenIsWrong(){
    tries[0].classList.add('is-flipped')
    tries[1].classList.add('is-flipped')
    tries = []
}