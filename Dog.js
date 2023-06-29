import dogs from './data.js'

class Dog {
    constructor(data){
        Object.assign(this, data)
        
    }
    
    getSticker(swiped, liked){
        if(swiped){
            return `<img src="images/badge-nope.png" class= "icon" id="nope-icon">
                    <img src="images/badge-like.png" class="icon noned" id="like-icon">`
        } else if (liked){
            return `<img src="images/badge-nope.png" class= "icon noned" id="nope-icon">
                    <img src="images/badge-like.png" class="icon" id="like-icon">`
        } else {
            return `<img src="images/badge-nope.png" class= "icon noned" id="nope-icon">
                    <img src="images/badge-like.png" class="icon noned" id="like-icon">`
        }
    }
    
    /*getNopeSticker(swiped){
    this.hasBeenSwiped = true
    return `<img src="images/badge-nope.png" class="icon ${swiped ? "" : "noned"}"       id="nope-icon" alt="location">`
    }
    
    getLikeSticker(liked){
        this.hasBeenLiked = true
        return `<img src="images/badge-like.png" class="icon ${liked ? "" : "noned"}"       id="like-icon" alt="location">`
    }*/
    
    getDogHtml(){
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        const sign = this.getSticker(hasBeenSwiped, hasBeenLiked)
        return `<div class="pic-container">
                    <img id= "imag" src= "${avatar}"/>
                    ${sign}
                    <h1>${name}, ${age}</h1>
                    <h2>${bio}</h2>
                </div>`  
    }
}

export default Dog
