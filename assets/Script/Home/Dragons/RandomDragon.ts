
import { _decorator, Component, Node, CCInteger, JsonAsset, Prefab, instantiate } from 'cc';
import { TeamManager } from '../../GameManager/TeamManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = RandomDragon
 * DateTime = Mon Mar 28 2022 11:40:39 GMT+0530 (India Standard Time)
 * Author = chandanKrishnani
 * FileBasename = RandomDragon.ts
 * FileBasenameNoExtension = RandomDragon
 * URL = db://assets/Script/Home/RandomDragon.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('RandomDragon')
export class RandomDragon extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property({type : CCInteger})
    DragonsCount : number = 3;

    @property({type : JsonAsset})
    DragonsData : JsonAsset = null;

    @property({type : Prefab})
    DragonPrefab : Prefab = null;


    start () 
    {
        let DragonsData : any =  this.DragonsData.json;
        let array = Array.apply(null, {length: DragonsData.Data.length}).map(Number.call, Number);
        console.log("Array",array);
        let random : number = 0;
        let temp : Node = null;
        let tempScript : any = null;
    

        for(let i=0;i<this.DragonsCount;i++)
        {
           random = this.randomInt(0,array.length - 1);
           temp = instantiate(this.DragonPrefab);
           tempScript = temp.getComponent('Dragons');
           tempScript.setDragon(DragonsData.Data[random]);
           TeamManager.getInstance().setDragonsOwned(temp);
           array.splice(random,1);
        }

            
    }
    randomInt(min : number, max : number) 
    { 
        return Math.floor(Math.random() * (max - min + 1) + min);
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
