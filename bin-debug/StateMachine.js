function preloadAni() {
    var man0 = createBitmapByName("S00_png");
    var man1 = createBitmapByName("S01_png");
    var man2 = createBitmapByName("S02_png");
    var man3 = createBitmapByName("S03_png");
    var man4 = createBitmapByName("R000_png");
    var man5 = createBitmapByName("R001_png");
    var man6 = createBitmapByName("R002_png");
    var man7 = createBitmapByName("R003_png");
    var man8 = createBitmapByName("R004_png");
    man0.scaleX = 0.25;
    man0.scaleY = 0.25;
    man1.scaleX = 0.25;
    man1.scaleY = 0.25;
    man2.scaleX = 0.25;
    man2.scaleY = 0.25;
    man3.scaleX = 0.25;
    man3.scaleY = 0.25;
    man4.scaleX = 0.25;
    man4.scaleY = 0.25;
    man5.scaleX = 0.25;
    man5.scaleY = 0.25;
    man6.scaleX = 0.25;
    man6.scaleY = 0.25;
    man7.scaleX = 0.25;
    man7.scaleY = 0.25;
    man8.scaleX = 0.25;
    man8.scaleY = 0.25;
    var man = [man0, man1, man2, man3, man4, man5, man6, man7, man8];
    return man;
}
var timer;
function createBitmapByName(name) {
    var result = new egret.Bitmap();
    var texture = RES.getRes(name);
    result.texture = texture;
    return result;
}
var Machine = (function () {
    function Machine() {
        timer = new egret.Timer(50, 0);
        this.manAnim = preloadAni();
        this.containerM = new egret.DisplayObjectContainer();
        this.Standing = new StandState(this);
        this.Running = new RunState(this);
        this.state = this.Standing;
    }
    var d = __define,c=Machine,p=c.prototype;
    p.Idel = function () {
        this.state.Idel();
    };
    p.RunState = function (x, y, _path) {
        this.state.ClickandRun(x, y, _path);
    };
    p.setstate = function (state) {
        this.state = state;
    };
    p.getstate = function () {
        return (this.state);
    };
    Machine.Speed = 0.125;
    return Machine;
}());
egret.registerClass(Machine,'Machine');
var StandState = (function () {
    function StandState(machine) {
        this.machine = machine;
        this.count = 0;
    }
    var d = __define,c=StandState,p=c.prototype;
    p.Idel = function () {
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        timer.start();
    };
    p.timerFunc = function (event) {
        if (this.machine.containerM.numChildren > 0) {
            this.machine.containerM.removeChildAt(0);
        }
        this.machine.containerM.addChild(this.machine.manAnim[this.count]);
        this.count++;
        if (this.count >= StandState.Stand_Pics) {
            this.count = 0;
        }
        if (this.machine.getstate() != this) {
            timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        }
    };
    p.ClickandRun = function (x, y, _path) {
        console.log("Exit Idel");
    };
    StandState.Stand_Pics = 3;
    return StandState;
}());
egret.registerClass(StandState,'StandState',["State"]);
var RunState = (function () {
    function RunState(machine) {
        this.machine = machine;
        this.count = RunState.Run_pics;
    }
    var d = __define,c=RunState,p=c.prototype;
    ;
    p.Idel = function () {
        console.log("What2?!");
    };
    p.ClickandRun = function (a, b, _path) {
        this.destinationX = a;
        this.destinationY = b;
        this.aniPath = _path;
        this.stepNode = this.aniPath.shift();
        this.newX = this.stepNode.x * TileMap.TILE_SIZE - this.machine.containerM.x;
        this.newY = this.stepNode.y * TileMap.TILE_SIZE - this.machine.containerM.y;
        /*
        this.stepNode = this.aniPath.shift();
        var x =setInterval(()=>{
        if(this.aniPath.length!=0){
        this.stepNode = this.aniPath.shift();

        console.log(this.stepNode.x);

        this.newX = this.stepNode.x*100-this.machine.containerM.x;
        this.newY = this.stepNode.y*100-this.machine.containerM.y;
        }
        else{
        clearInterval(x);
        }
        },800)
        */
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc2, this);
        /*
        var tween = egret.Tween.get(this.machine.containerM);
        tween.to({ x: a - 25, y: b - 47 }, 1000).call(() => {
            this.machine.setstate(this.machine.Standing)
            this.machine.getstate().Idel();
        })*/
    };
    p.timerFunc2 = function (event) {
        if (this.machine.containerM.numChildren > 0) {
            this.machine.containerM.removeChildAt(0);
        }
        if (this.machine.containerM.x == this.stepNode.x * 100 && this.machine.containerM.y == this.stepNode.y * 100) {
            this.stepNode = this.aniPath.shift();
            this.newX = this.stepNode.x * TileMap.TILE_SIZE - this.machine.containerM.x;
            this.newY = this.stepNode.y * TileMap.TILE_SIZE - this.machine.containerM.y;
        }
        this.machine.containerM.x += this.newX * Machine.Speed;
        this.machine.containerM.y += this.newY * Machine.Speed;
        this.machine.containerM.addChild(this.machine.manAnim[this.count]);
        this.count++;
        if (this.count >= 8) {
            this.count = RunState.Run_pics;
        }
        if (this.machine.containerM.x == this.destinationX && this.machine.containerM.y == this.destinationY) {
            this.machine.setstate(this.machine.Standing);
            this.machine.getstate().Idel();
            console.log('Run Stopped!');
            timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc2, this);
        }
    };
    RunState.Run_pics = 4;
    return RunState;
}());
egret.registerClass(RunState,'RunState',["State"]);
//# sourceMappingURL=StateMachine.js.map