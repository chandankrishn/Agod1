
import { _decorator, Component, Node, JsonAsset, Prefab, instantiate, resources, SpriteFrame, Sprite, CCInteger } from 'cc';
import { TeamManager } from '../../GameManager/TeamManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = DragonCards
 * DateTime = Wed Mar 23 2022 15:05:55 GMT+0530 (India Standard Time)
 * Author = chandanKrishnani
 * FileBasename = DragonCards.ts
 * FileBasenameNoExtension = DragonCards
 * URL = db://assets/Script/Home/Dragons/DragonCards.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('DragonCards')
export class DragonCards extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property({type : JsonAsset})
    DragonCardsJson : JsonAsset = null;

    @property({type : Prefab})
    DragonCardPrefab : Prefab = null;

    @property({type : Prefab})
    AbilitiesPrefab : Prefab = null;

    @property({type : Node})
    parentDragonsNode : Node = null;

    @property({type : Node})
    ParentAbilityNode : Node = null;

    @property({type : CCInteger})
    AvailableDragons = 3;


    @property({type : Node})
    CenterDragonNode : Node = null;

   
    dragonCards :any[] = [];

    dargonAbilties : Node[]= [];

    dragonsData : any = null;
    cardSelected : number = 0;


    changeImage( node  : Node ,image : SpriteFrame)
    {
        node.getComponent(Sprite).spriteFrame = image;
    }

    leftArrowClick()
    {
      this.cardSelected>0 && this.setSelectedDragon( this.cardSelected -1);
    }

    rightArrowClick()
    {
        this.cardSelected < (this.dragonCards.length-1) && this.setSelectedDragon( this.cardSelected + 1);
    }
    toggleView()
    {
        this.ParentAbilityNode.active = !this.ParentAbilityNode.active;
        this.parentDragonsNode.active = !this.parentDragonsNode.active;
    
    }
    backButton()
    {
       this.node.active  = !this.node.active;

    }

    setSelectedDragon(index : number)
    {
        console.log("Called");
        this.dragonCards[this.cardSelected].getChildByName('particles').active = false;   
        this.cardSelected = index;
        this.dragonCards[index].getChildByName('particles').active = true;
        let image = this.dragonCards[index].getChildByName('DragonImage').getComponent(Sprite).spriteFrame;
        this.changeImage(this.CenterDragonNode,image);
        for(let i=0;i<4;i++)
        {
            this.changeImage( this.dargonAbilties[i].getChildByName('DragonImage'),image);

        }
    }

  

start() 
   {
    
       this.backButton();
       
       let tempNode : Node = null;
   
     

    //    for(let i=0;i<this.AvailableDragons;i++)
    //    {
    //        tempNode = instantiate(this.DragonCardPrefab);
    //        this.parentDragonsNode.addChild(tempNode);
    //        this.dragonCards.push(tempNode);
    //        resources.load(this.dragonsData.Data[array[random]].Image+'/spriteFrame',SpriteFrame, (err, spriteFrame) => 
    //         {       
    //                 let image : SpriteFrame  = spriteFrame;
    //                 TeamManager.getInstance().setDragonsImages(image);
    //                 this.changeImage(this.dragonCards[i].getChildByName('DragonImage'),image);
    //                 i==0 && this.setSelectedDragon(0);
                
    //         }
    //     );
    //        TeamManager.getInstance().setDragonsOwned(array[random]);
   
       
    //    }

       for(let i=0;i<4;i++)
       {
           tempNode = instantiate(this.AbilitiesPrefab);
           this.ParentAbilityNode.addChild(tempNode);
           this.dargonAbilties.push(tempNode);
       }
       let index = TeamManager.getInstance().getDragonbyIndex(0);
       console.log('index',index);

     
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
