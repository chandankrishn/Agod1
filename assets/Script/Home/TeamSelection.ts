
import { _decorator, Component, Node, Prefab, CCInteger, instantiate, UITransform, systemEvent, Input, input, TweenSystem, Sprite, v2, BoxCollider, Vec3, Intersection2D } from 'cc';
import { TeamManager } from '../GameManager/TeamManager';

const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TeamSelection
 * DateTime = Thu Mar 24 2022 17:03:51 GMT+0530 (India Standard Time)
 * Author = chandanKrishnani
 * FileBasename = TeamSelection.ts
 * FileBasenameNoExtension = TeamSelection
 * URL = db://assets/Script/Home/Dragons/TeamSelection.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('TeamSelection')
export class TeamSelection extends Component 
{
    
    @property({type : CCInteger})
    DragonPositions = 7;

    @property({type : Prefab})
    DragonSelectionPrefab : Prefab = null;

    @property({type : Prefab})
    DragonsPrefab : Prefab = null;

    @property({type : Node})
    DragonsParent : Node = null;



    DragonPositionNode : Node[] = [];
    dragons: Node[] = [];
    dragonMove : boolean = false;
    targetDragon : number = 0;
    DragableNode : Node = null;


    

    start() 
    {
        let startXpos = - (this.node.getComponent(UITransform).width * 0.1);
        let startYpos : any  =  -(this.node.getComponent(UITransform).height * 0.33);
        let tempNode : Node = null;

        for(let i=1;i<=3;i++)
        {
            for(let j=1;j<=3;j++)   
            {
                tempNode = instantiate(this.DragonSelectionPrefab);
                this.node.addChild(tempNode);
                tempNode.setPosition(startXpos,startYpos,1);
                if(j%2!=0)
                {
                    startXpos = startXpos - 120;
                    startYpos = startYpos + 80;
                }
                else
                    startYpos = startYpos - 160;
                this.DragonPositionNode.push(tempNode);
            }
         }
         this.setUpDragons();
         this.setTouchEvents();
    }


    setUpDragons()
    {
        let dragons : any = TeamManager.getInstance().getDragonImages();
        var tempNode : Node= null;
        this.DragableNode = instantiate(this.DragonsPrefab);
        this.node.addChild(this.DragableNode);
        this.DragableNode.active = false;

        for(let i=0;i<dragons.length;i++)
        {
            tempNode = instantiate(this.DragonsPrefab);
            this.DragonsParent.addChild(tempNode);
            tempNode.getComponent(Sprite).spriteFrame = dragons[i];
            this.dragons.push(tempNode);
        }
    
    }


    backButton(event : any)
    {
        this.node.active = !this.node.active;
    }

    setTouchEvents() : void
    {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove,this);
        input.on(Input.EventType.TOUCH_END,this.onTouchEnd, this);
    }

    onTouchStart(event : any)
    {
            for(let i=0; i<this.dragons.length;i++)
            {

                if (this.dragons[i].getComponent(UITransform).getBoundingBoxToWorld().contains(v2(event.getUILocation().x, event.getUILocation().y))) 
                {
                    
                    // this.DragableNode.active = true;
                    // this.DragableNode.getComponent(Sprite).spriteFrame = this.dragons[i].getComponent(Sprite).spriteFrame;
                    // this.DragableNode.setPosition(event.getUILocation());
                    let current : Vec3 = this.node.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(event.getUILocation().x,event.getUILocation().y,1));
                    this.dragons[i].setPosition(current);
                    
                    this.dragons[i].parent = this.node;
                    
                    // this.dragons[i].active = false;
                    this.targetDragon = i;
                    this.dragonMove = true;
                }
        }
        
    }
    planevalidMoveCheck(current : any) :void
    {        
        if(this.dragonMove)
        {        
            this.dragons[this.targetDragon].setPosition(current);
          
        }

    }

    onTouchMove(event: any)
    {   

            let current : Vec3 = this.node.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(event.getUILocation().x,event.getUILocation().y,1));
            this.planevalidMoveCheck(current);  
    }
  
    onTouchEnd()
    {  
        var colide : boolean = false;
        for(let i=0; i<this.DragonPositionNode.length;i++)  
        {
            colide =  Intersection2D.rectRect( this.dragons[this.targetDragon].getChildByName('Colider').getComponent(UITransform)?.getBoundingBoxToWorld(),this.DragonPositionNode[i].getChildByName('colider').getComponent(UITransform)?.getBoundingBoxToWorld());
            if(colide)
            {
                let pos : Vec3 = this.DragonPositionNode[i].getPosition();
                pos.y = pos.y +  this.dragons[this.targetDragon].getComponent(UITransform).height/2;                
                this.dragons[this.targetDragon].setPosition(pos);
                break;

            }
                
        }
        if(!colide)
        {
            this.dragons[this.targetDragon].parent = this.DragonsParent;   

        }

        
        
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
