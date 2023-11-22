import dogBellaImage from './images/dog-bella.jpg';
import dogRexImage from './images/dog-rex.jpg';
import dogTeddyImage from './images/dog-teddy.jpg';
import badgeNope from './images/badge-nope.png';
import badgeLike from './images/badge-like.png';


class Dog {
    constructor(data){
        Object.assign(this, data)
        
    }
    
    getSticker(swiped, liked){
        if(swiped){
            return `<img src=${badgeNope} class= "icon" id="nope-icon">
                    <img src=${badgeLike} class="icon noned" id="like-icon">`
        } else if (liked){
            return `<img src=${badgeNope} class= "icon noned" id="nope-icon">
                    <img src=${badgeLike} class="icon" id="like-icon">`
        } else {
            return `<img src=${badgeNope} class= "icon noned" id="nope-icon">
                    <img src=${badgeLike} class="icon noned" id="like-icon">`
        }
    }
    
    getDogHtml(){
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        const corrDog = (avatar) => {
            let selDog = ""
            if(avatar === "images/dog-rex.jpg"){
                selDog = `${dogRexImage}`
            } else if(avatar === "images/dog-bella.jpg" ) {
                selDog = `${dogBellaImage}`
            } else {
                selDog = `${dogTeddyImage}`
            }
            return selDog
        }

        const sign = this.getSticker(hasBeenSwiped, hasBeenLiked)
        return `<div class="pic-container">
                    <img id= "imag" src= "${corrDog(avatar)}"/>
                    ${sign}
                    <h1>${name}, ${age}</h1>
                    <h2>${bio}</h2>                    
                </div>`  
    }
}

export default Dog
