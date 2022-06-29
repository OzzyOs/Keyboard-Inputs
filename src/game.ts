import * as PIXI from 'pixi.js'
import { Fish } from "./Fish"
import fishImage from "./images/fish.png"
import waterImage from "./images/water.jpg"
// import fishTwo from "./images/fish.png"


export class Game {
    pixi : PIXI.Application
    loader : PIXI.Loader
    fish : Fish


    constructor(){
        this.pixi = new PIXI.Application({ width: 750, height: 500})
        document.body.appendChild(this.pixi.view)
        
        this.loader = new PIXI.Loader()
        this.loader.add('fishTexture', fishImage)
                   .add('waterTexture', waterImage)
        this.loader.load(() => this.loadCompleted())
           
        
    
    }
            
            loadCompleted() {
                let background = new PIXI.Sprite(this.loader.resources["waterTexture"].texture!)
                this.pixi.stage.addChild(background)
              
                let fish = new Fish(this.loader.resources["fishTexture"].texture!)
                this.pixi.stage.addChild(fish)
            }
                

        

}

let g = new Game()

