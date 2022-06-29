import * as PIXI from 'pixi.js'
import { Sprite } from 'pixi.js'




export class Fish extends PIXI.Sprite {
    constructor(texture:PIXI.Texture){
        super(texture)
        this.anchor.set(0.25)
        this.scale.set(1)
        this.tint = Math.random() * 0xffff;
        this.y = Math.random() * 500
        this.x = Math.random() * 400
    
    }

}
    
       

