var Grid = (function () {
    function Grid() {
        this._nodes = new Array();
        for (var i = 0; i < config.length; i++) {
            var tile = config[i];
            this._nodes[i] = new MyNode(tile.x, tile.y);
            this._nodes[i].walkable = tile.walkable;
        }
    }
    var d = __define,c=Grid,p=c.prototype;
    p.getNode = function (x, y) {
        return this._nodes[x * Grid._numCols + y];
    };
    p.setEndNode = function (x, y) {
        this._endNode = this._nodes[x * Grid._numCols + y];
    };
    p.setStartNode = function (x, y) {
        this._startNode = this._nodes[x * Grid._numCols + y];
    };
    p.setWalkable = function (x, y, value) {
        this._nodes[x * Grid._numCols + y].walkable = value;
    };
    p.getendNode = function () {
        return this._endNode;
    };
    /**
    * Returns the number of columns in the grid.
    */
    p.getnumCols = function () {
        return Grid._numCols;
    };
    p.getnumRows = function () {
        return Grid._numRows;
    };
    /**
    * Returns the start node.
    */
    p.getstartNode = function () {
        return this._startNode;
    };
    Grid._numCols = 10; //定义行
    Grid._numRows = 10; //定义列
    return Grid;
}());
egret.registerClass(Grid,'Grid');
//# sourceMappingURL=Grid.js.map