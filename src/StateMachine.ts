function preloadAni(): egret.Bitmap[] {
    var man0: egret.Bitmap = createBitmapByName("S00_png");
    var man1: egret.Bitmap = createBitmapByName("S01_png");
    var man2: egret.Bitmap = createBitmapByName("S02_png");
    var man3: egret.Bitmap = createBitmapByName("S03_png");
    var man4: egret.Bitmap = createBitmapByName("R000_png");
    var man5: egret.Bitmap = createBitmapByName("R001_png");
    var man6: egret.Bitmap = createBitmapByName("R002_png");
    var man7: egret.Bitmap = createBitmapByName("R003_png");
    var man8: egret.Bitmap = createBitmapByName("R004_png");

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

    var man: egret.Bitmap[] = [man0, man1, man2, man3, man4, man5, man6, man7, man8];
    return man;
}

var timer: egret.Timer

function createBitmapByName(name: string): egret.Bitmap {
    var result = new egret.Bitmap();
    var texture: egret.Texture = RES.getRes(name);
    result.texture = texture;
    return result;
}

interface State {

    Idel();
    ClickandRun(x: number, y: number, _path: Array<MyNode>);
}

class Machine {

    private state: State;

    public manAnim: egret.Bitmap[];
    public containerM: egret.DisplayObjectContainer;
    public Standing: State;
    public Running: State;
    public static Speed: number = 0.125;

    private x: number;
    private y: number;

    public constructor() {
        timer = new egret.Timer(50, 0);
        this.manAnim = preloadAni();
        this.containerM = new egret.DisplayObjectContainer();
        this.Standing = new StandState(this);
        this.Running = new RunState(this);
        this.state = this.Standing;
    }

    public Idel(): void {
        this.state.Idel();
    }

    public RunState(x: number, y: number, _path: Array<MyNode>): void {
        this.state.ClickandRun(x, y, _path);
    }

    public setstate(state: State) {
        this.state = state;
    }

    public getstate(): State {
        return (this.state);
    }
}

class StandState implements State {

    public static Stand_Pics = 3;

    private machine: Machine;
    private count: number;

    public constructor(machine: Machine) {
        this.machine = machine;
        this.count = 0;
    }

    public Idel(): void {
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        timer.start();
    }

    private timerFunc(event: egret.Event) {
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
            //timer.stop();
        }
    }

    public ClickandRun(x: number, y: number, _path: Array<MyNode>): void {
        console.log("Exit Idel");
    }
}

class RunState implements State {

    public static Run_pics = 4;

    private machine: Machine;
    private count: number;

    public destinationX: number;
    public destinationY: number;

    public newX: number;
    public newY: number;

    public aniPath: Array<MyNode>;
    public stepNode: MyNode;;

    public constructor(machine: Machine) {
        this.machine = machine;
        this.count = RunState.Run_pics;
    }

    public Idel(): void {
        console.log("What2?!");
    }

    public ClickandRun(a: number, b: number, _path: Array<MyNode>): void {
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
    }

    private timerFunc2(event: egret.Event) {
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

            this.machine.setstate(this.machine.Standing)
            this.machine.getstate().Idel();
            console.log('Run Stopped!');
            timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc2, this);
        }
    }
}