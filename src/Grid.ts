class Grid {
    private _startNode: MyNode;
    private _endNode: MyNode;
    private _nodes: Array<MyNode>;
    private static _numCols: number = 10;   //定义行
    private static _numRows: number = 10;   //定义列
    
    public constructor() {

        this._nodes = new Array();
        for (var i = 0; i < config.length; i++) {
            var tile = config[i];
            this._nodes[i] = new MyNode(tile.x,tile.y);
            this._nodes[i].walkable = tile.walkable;
        }
    }

    public getNode(x: number, y: number): MyNode {

        return this._nodes[x*Grid._numCols+y] as MyNode;
    }

    public setEndNode(x: number, y: number): void {

        this._endNode = this._nodes[x*Grid._numCols+y] as MyNode;
    }

    public setStartNode(x: number, y: number): void {

        this._startNode = this._nodes[x*Grid._numCols+y] as MyNode;
    }

    public setWalkable(x: number, y: number, value: Boolean): void {
        this._nodes[x*Grid._numCols+y].walkable = value;
    }

    public getendNode(): MyNode {
        return this._endNode;
    }
    /**
    * Returns the number of columns in the grid.
    */
    public getnumCols(): number {
        return Grid._numCols;
    }

    public getnumRows(): number {
        return Grid._numRows;
    }
    /**
    * Returns the start node.
    */
    public getstartNode(): MyNode {
        return this._startNode;
    }
}





