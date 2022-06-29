import * as PIXI from 'pixi.js'
import { Sprite } from 'pixi.js'




export class Fish extends PIXI.Sprite {
    speed = 10
    
    constructor(texture:PIXI.Texture){
        super(texture)
        this.anchor.set(0.25)
        this.scale.set(1)
        this.y = 250
        this.x = 350

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))

        
    }
    update() {
        this.x += this.speed
        this.y += this.speed
    }

    onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT":
                
                this.x -= this.speed;
                this.scale.set(1, 1)
                break
            case "D":
            case "ARROWRIGHT":
                this.x += this.speed;
                this.scale.set(-1, 1)
                break
            case "W":
            case "ARROWUP":
                this.y -= this.speed;
                break
            case "S":
            case "ARROWDOWN":
                this.y += this.speed
                break
        }

        
    }

    onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case " ":
                break;
            case "A":
            case "D":
            case "ARROWLEFT":
            case "ARROWRIGHT":
                this.xspeed = 0
                break
            case "W":
            case "S":
            case "ARROWUP":
            case "ARROWDOWN":
                this.yspeed = 0
                break
        }
    }
}
