import { SpriteFrame, sys } from "cc";



export class TeamManager {

    private static _instance:TeamManager = new TeamManager();

    private DragonsOwned = [];
    private DragoneImages = [];


    constructor() 
    {
        if(TeamManager._instance){
            throw new Error("Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.");
        }
        TeamManager._instance = this;
    }
    
    public static getInstance():TeamManager
    {
        return TeamManager._instance;
    }

    public setDragonsImages(image : SpriteFrame)
    {
        this.DragoneImages.push(image);
    }

    public getDragonImages() : any
    {
        return this.DragoneImages;
    }

    public setDragonsOwned(Element : any) : void
    {
        this.DragonsOwned.push(Element);
    }  

    public getDragonsOwned() : any
    {
        return this.DragonsOwned;
    }
    public getDragonbyIndex(n : number)
    {
        return this.DragonsOwned[n]
    }

   
}

 