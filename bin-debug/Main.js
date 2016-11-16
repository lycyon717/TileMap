var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main,p=c.prototype;
    p.onAddToStage = function (event) {
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    };
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    };
    p.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    p.onResourceLoadError = function (event) {
        console.warn("Group:" + event.groupName + " has failed to load");
        this.onResourceLoadComplete(event);
    };
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    p.createGameScene = function () {
        var container = new egret.DisplayObjectContainer();
        var loadmymap = new TileMap(container);
        this.addChild(container);
        var mach = new Machine();
        mach.Idel();
        this.addChild(mach.containerM);
        var itisGrid = new Grid();
        var itisAstar = new AStar();
        this.touchEnabled = true;
        var mapX = 0;
        var mapY = 0;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            mapX = Math.floor(e.stageX / TileMap.TILE_SIZE);
            mapY = Math.floor(e.stageY / TileMap.TILE_SIZE);
            console.log("目的地：" + mapX + ' ' + mapY);
            itisGrid.setStartNode(Math.floor(mach.containerM.x / TileMap.TILE_SIZE), Math.floor(mach.containerM.y / TileMap.TILE_SIZE));
            itisGrid.setEndNode(mapX, mapY);
            itisAstar.findPath(itisGrid);
            mach.setstate(mach.Running);
            mach.RunState(mapX * TileMap.TILE_SIZE, mapY * TileMap.TILE_SIZE, itisAstar._path);
        }, this);
    };
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
//# sourceMappingURL=Main.js.map