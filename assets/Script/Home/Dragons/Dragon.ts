
import { _decorator, Component, Node, SpriteFrame, Sprite } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Dragon
 * DateTime = Tue Mar 29 2022 14:33:46 GMT+0530 (India Standard Time)
 * Author = chandanKrishnani
 * FileBasename = Dragon.ts
 * FileBasenameNoExtension = Dragon
 * URL = db://assets/Script/Home/Dragons/Dragon.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('Dragon')
export class Dragon extends Component {
    


    dragonName : string = "";
    type : string = "";
    cardsData : any[] = [];

    start() 
    {
    
    }
    setDragon(cardsData : any)
    {
        console.log("cardsData",cardsData);

        // this.node.getComponent(Sprite).spriteFrame = image;
        this.cardsData = cardsData;
    
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
