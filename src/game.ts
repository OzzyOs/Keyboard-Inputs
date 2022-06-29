import * as PIXI from 'pixi.js'
import { Fish } from "./Fish"
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"
import bckGround from "./images/water.png"
// import fishTwo from "./images/fish.png"


class Game {
    pixi : PIXI.Application
    loader : PIXI.Loader
    fishes: Fish[]


    constructor(){
        this.pixi = new PIXI.Application({ width: 750, height: 500})
        document.body.appendChild(this.pixi.view)
        
        this.loader = new PIXI.Loader()
        this.loader.add('fishTexture', fishImage)
                   .add('bubbleTexture', bubbleImage)
                   .add('waterTexture', waterImage)
        this.loader.load(() => this.loadCompleted())
           
        
    
    }
            
            // startGame() {
                
            //     for(let i=0; i<10; i++) {
            //         let fish = new PIXI.sprite(this.loader.resources["fishTexture"].texture!)
            //         this.pixi.stage.addChild(fish)
            //         this.fishes.push(fish)
            //     }
                
            //     this.pixi.ticker.add(() => this.update())
            // }
            
            loadCompleted() {
                this.fishes=[];
                let background = new PIXI.Sprite(this.loader.resources["waterTexture"].texture!)
                this.pixi.stage.addChild(background)
                for(let i=0; i<10; i++) {
                    let fish = new Fish(this.loader.resources["fishTexture"].texture!)
                    this.fishes.push(fish)
                    this.pixi.stage.addChild(fish)
                }
                
              

                let fish = new Fish(this.loader.resources["fishTexture"].texture!)
      
                this.pixi.stage.addChild(fish)
            }

        

}

let g = new Game()


//
// STAP 1 - maak een pixi canvas
//


//
// STAP 2 - preload alle afbeeldingen
//

//
// STAP 3 - maak een sprite als de afbeeldingen zijn geladen
//
