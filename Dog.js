import dogs from './data.js'

class Dog {
    constructor(data){
        Object.assign(this, data)
        
    }
    
    getSticker(swiped, liked){
        if(swiped){
            return `<img src="badge-nope.png" class= "icon" id="nope-icon">
                    <img src="badge-like.png" class="icon noned" id="like-icon">`
        } else if (liked){
            return `<img src="badge-nope.png" class= "icon noned" id="nope-icon">
                    <img src="badge-like.png" class="icon" id="like-icon">`
        } else {
            return `<img src="badge-nope.png" class= "icon noned" id="nope-icon">
                    <img src="badge-like.png" class="icon noned" id="like-icon">`
        }
    }
    
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
