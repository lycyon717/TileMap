var config = [
    { x: 0, y: 0, walkable: true, image: "floor_png" },
    { x: 0, y: 1, walkable: true, image: "floor_png" },
    { x: 0, y: 2, walkable: true, image: "floor_png" },
    { x: 0, y: 3, walkable: false, image: "wall_png" },
    { x: 0, y: 4, walkable: true, image: "floor_png" },
    { x: 0, y: 5, walkable: true, image: "floor_png" },
    { x: 0, y: 6, walkable: true, image: "floor_png" },
    { x: 0, y: 7, walkable: true, image: "floor_png" },
    { x: 0, y: 8, walkable: true, image: "floor_png" },
    { x: 0, y: 9, walkable: true, image: "floor_png" },
    { x: 1, y: 0, walkable: true, image: "floor_png" },
    { x: 1, y: 1, walkable: true, image: "floor_png" },
    { x: 1, y: 2, walkable: true, image: "floor_png" },
    { x: 1, y: 3, walkable: true, image: "floor_png" },
    { x: 1, y: 4, walkable: true, image: "floor_png" },
    { x: 1, y: 5, walkable: true, image: "floor_png" },
    { x: 1, y: 6, walkable: true, image: "floor_png" },
    { x: 1, y: 7, walkable: false, image: "wall_png" },
    { x: 1, y: 8, walkable: false, image: "wall_png" },
    { x: 1, y: 9, walkable: false, image: "wall_png" },
    { x: 2, y: 0, walkable: true, image: "floor_png" },
    { x: 2, y: 1, walkable: true, image: "floor_png" },
    { x: 2, y: 2, walkable: true, image: "floor_png" },
    { x: 2, y: 3, walkable: false, image: "wall_png" },
    { x: 2, y: 4, walkable: true, image: "floor_png" },
    { x: 2, y: 5, walkable: true, image: "floor_png" },
    { x: 2, y: 6, walkable: true, image: "floor_png" },
    { x: 2, y: 7, walkable: false, image: "wall_png" },
    { x: 2, y: 8, walkable: true, image: "floor_png" },
    { x: 2, y: 9, walkable: true, image: "floor_png" },
    { x: 3, y: 0, walkable: false, image: "wall_png" },
    { x: 3, y: 1, walkable: false, image: "wall_png" },
    { x: 3, y: 2, walkable: false, image: "wall_png" },
    { x: 3, y: 3, walkable: false, image: "wall_png" },
    { x: 3, y: 4, walkable: true, image: "floor_png" },
    { x: 3, y: 5, walkable: false, image: "wall_png" },
    { x: 3, y: 6, walkable: true, image: "floor_png" },
    { x: 3, y: 7, walkable: true, image: "floor_png" },
    { x: 3, y: 8, walkable: true, image: "floor_png" },
    { x: 3, y: 9, walkable: true, image: "floor_png" },
    { x: 4, y: 0, walkable: true, image: "floor_png" },
    { x: 4, y: 1, walkable: true, image: "floor_png" },
    { x: 4, y: 2, walkable: true, image: "floor_png" },
    { x: 4, y: 3, walkable: false, image: "wall_png" },
    { x: 4, y: 4, walkable: true, image: "floor_png" },
    { x: 4, y: 5, walkable: false, image: "wall_png" },
    { x: 4, y: 6, walkable: true, image: "floor_png" },
    { x: 4, y: 7, walkable: false, image: "wall_png" },
    { x: 4, y: 8, walkable: true, image: "floor_png" },
    { x: 4, y: 9, walkable: true, image: "floor_png" },
    { x: 5, y: 0, walkable: true, image: "floor_png" },
    { x: 5, y: 1, walkable: true, image: "floor_png" },
    { x: 5, y: 2, walkable: true, image: "floor_png" },
    { x: 5, y: 3, walkable: true, image: "floor_png" },
    { x: 5, y: 4, walkable: true, image: "floor_png" },
    { x: 5, y: 5, walkable: false, image: "wall_png" },
    { x: 5, y: 6, walkable: true, image: "floor_png" },
    { x: 5, y: 7, walkable: false, image: "wall_png" },
    { x: 5, y: 8, walkable: false, image: "wall_png" },
    { x: 5, y: 9, walkable: false, image: "wall_png" },
    { x: 6, y: 0, walkable: true, image: "floor_png" },
    { x: 6, y: 1, walkable: true, image: "floor_png" },
    { x: 6, y: 2, walkable: true, image: "floor_png" },
    { x: 6, y: 3, walkable: false, image: "wall_png" },
    { x: 6, y: 4, walkable: true, image: "floor_png" },
    { x: 6, y: 5, walkable: false, image: "wall_png" },
    { x: 6, y: 6, walkable: true, image: "floor_png" },
    { x: 6, y: 7, walkable: false, image: "wall_png" },
    { x: 6, y: 8, walkable: true, image: "floor_png" },
    { x: 6, y: 9, walkable: true, image: "floor_png" },
    { x: 7, y: 0, walkable: true, image: "floor_png" },
    { x: 7, y: 1, walkable: true, image: "floor_png" },
    { x: 7, y: 2, walkable: true, image: "floor_png" },
    { x: 7, y: 3, walkable: false, image: "wall_png" },
    { x: 7, y: 4, walkable: true, image: "floor_png" },
    { x: 7, y: 5, walkable: false, image: "wall_png" },
    { x: 7, y: 6, walkable: true, image: "floor_png" },
    { x: 7, y: 7, walkable: true, image: "floor_png" },
    { x: 7, y: 8, walkable: true, image: "floor_png" },
    { x: 7, y: 9, walkable: true, image: "floor_png" },
    { x: 8, y: 0, walkable: false, image: "wall_png" },
    { x: 8, y: 1, walkable: false, image: "wall_png" },
    { x: 8, y: 2, walkable: false, image: "wall_png" },
    { x: 8, y: 3, walkable: false, image: "wall_png" },
    { x: 8, y: 4, walkable: true, image: "floor_png" },
    { x: 8, y: 5, walkable: false, image: "wall_png" },
    { x: 8, y: 6, walkable: true, image: "floor_png" },
    { x: 8, y: 7, walkable: false, image: "wall_png" },
    { x: 8, y: 8, walkable: true, image: "floor_png" },
    { x: 8, y: 9, walkable: true, image: "floor_png" },
    { x: 9, y: 0, walkable: true, image: "floor_png" },
    { x: 9, y: 1, walkable: true, image: "floor_png" },
    { x: 9, y: 2, walkable: true, image: "floor_png" },
    { x: 9, y: 3, walkable: true, image: "floor_png" },
    { x: 9, y: 4, walkable: true, image: "floor_png" },
    { x: 9, y: 5, walkable: false, image: "wall_png" },
    { x: 9, y: 6, walkable: true, image: "floor_png" },
    { x: 9, y: 7, walkable: false, image: "wall_png" },
    { x: 9, y: 8, walkable: false, image: "wall_png" },
    { x: 9, y: 9, walkable: false, image: "wall_png" },
];
var TileMap = (function (_super) {
    __extends(TileMap, _super);
    function TileMap(outside) {
        _super.call(this);
        this.container = outside;
        this.init();
    }
    var d = __define,c=TileMap,p=c.prototype;
    p.init = function () {
        for (var i = 0; i < config.length; i++) {
            var tile = config[i];
            var bitmap = new egret.Bitmap();
            bitmap.texture = RES.getRes(tile.image);
            bitmap.x = tile.x * 100;
            bitmap.y = tile.y * 100;
            bitmap.touchEnabled = tile.walkable;
            this.container.addChild(bitmap);
        }
    };
    TileMap.TILE_SIZE = 100;
    return TileMap;
}(egret.DisplayObjectContainer));
egret.registerClass(TileMap,'TileMap');
//# sourceMappingURL=TileMap.js.map