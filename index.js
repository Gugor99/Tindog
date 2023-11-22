import dogs from './data.js'
import Dog from './Dog.js'
const cross = document.getElementById('cross')
const heart = document.getElementById('heart')


function getNewDog(){
    const nextDog = dogs.shift()
    return nextDog ? new Dog(nextDog) : {}    
}

function endGame(){
    document.querySelector('body').innerHTML = `<div class="pic-container">
                                                    <img id= "end-img" src= "images/tindog.png"/>
                                                    <h3>There's no one around you. Expand your discovery settings to see more dawgs.</h3>
                                                    <button id="dis-settings">DISCOVERY SETTINGS</button>
                                                    <h4>No Matches</h4>
                                                </div>`
}

let currentDog = getNewDog()

cross.addEventListener('click', crossBtnPressed)
heart.addEventListener('click', heartBtnPressed)

function getNextDog(){
    if(dogs.length > 0){
      currentDog = getNewDog()
        render()  
    } else {
      endGame()  
    } 
}

function crossBtnPressed(){
    console.log("crosspreassed")
    currentDog.hasBeenSwiped = true
    setTimeout(()=>{
        getNextDog()  
    }, 1200)
    currentDog.getSticker(currentDog.hasBeenSwiped, currentDog.hasBeenLiked)
    render()
}

function heartBtnPressed(){
    currentDog.hasBeenLiked = true
    setTimeout(()=>{
        getNextDog()  
    }, 1200)
    currentDog.getSticker(currentDog.hasBeenSwiped, currentDog.hasBeenLiked)
    render()
}

function render(){
    document.getElementById("dog-box").innerHTML = currentDog.getDogHtml()
}
render()
