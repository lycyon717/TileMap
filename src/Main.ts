class Main extends egret.DisplayObjectContainer {

    private loadingView: LoadingUI;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    }

    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    }

    private onItemLoadError(event: RES.ResourceEvent): void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }

    private onResourceLoadError(event: RES.ResourceEvent): void {

        console.warn("Group:" + event.groupName + " has failed to load");

        this.onResourceLoadComplete(event);
    }

    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    private textfield: egret.TextField;

    private createGameScene(): void {

        var container = new egret.DisplayObjectContainer();
        var loadmymap = new TileMap(container);
        this.addChild(container);

        var mach = new Machine();
        mach.Idel();
        this.addChild(mach.containerM);
   
        var itisGrid = new Grid();
        var itisAstar = new AStar();
        this.touchEnabled = true;
        
        var mapX:number = 0;
        var mapY:number = 0;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, (e)=>{
            mapX = Math.floor(e.stageX/TileMap.TILE_SIZE);
            mapY = Math.floor(e.stageY/TileMap.TILE_SIZE);


            console.log("目的地："+mapX+' '+mapY);

            itisGrid.setStartNode(Math.floor(mach.containerM.x/TileMap.TILE_SIZE),Math.floor(mach.containerM.y/TileMap.TILE_SIZE));
            itisGrid.setEndNode(mapX,mapY);
            itisAstar.findPath(itisGrid);

            mach.setstate(mach.Running);
            mach.RunState(mapX*TileMap.TILE_SIZE,mapY*TileMap.TILE_SIZE,itisAstar._path);
        }, this );
    }

}