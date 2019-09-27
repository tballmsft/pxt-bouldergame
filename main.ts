namespace SpriteKind {
    export const Rock = SpriteKind.create()
    export const Wall = SpriteKind.create()
    export const Dirt = SpriteKind.create()
    export const Space = SpriteKind.create()
}
TileWorld.onTileArrived(SpriteKind.Player, function (tile, direction) {
    //tile.setCode(1)
    //tile.hasKind(SpriteKind.Wall, direction, _tileDir(TileDir.None), ResultSet.Zero)
    //tile.hasCode(11, direction, _tileDir(TileDir.None), ResultSet.Zero)
    //tile.moveOne(direction)
})
/**
 * TileWorld.onTileArrived(SpriteKind.Player, function (tile, direction) { tile.setCode(1) tile.hasNoCode(11, direction, _tileDir(TileDir.None)) tile.hasNoCode(10, direction, _tileDir(TileDir.None)) tile.hasNoCode(12, direction, _tileDir(TileDir.None)) tile.moveOne(direction) }) TileWorld.onTileTransition(SpriteKind.Player, function (tile) { tile.hasCode(6, TileDir.None, TileDir.None) }) TileWorld.onTileArrived(SpriteKind.Player, function (tile, direction) { TileWorld.isOneOf(direction, TileDir.Left, TileDir.Right) tile.hasCode(11, direction, TileDir.None) tile.hasCode(1, direction, direction) })
 */
TileWorld.setTileMap(img`
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c d d d d d d d d d d b d d d d d d b d d d d d d d d d d d d c
    c d d d d d 6 d d d d b d d d d d d b d d d d d d d d d d d d c
    c d d 7 d d b d d d d b d d d d d d b d d d d b d d d d d d d c
    c d d d d d d d d d d d d d d d d d b 1 1 d d d d d d b d d d c
    c a a a a a a a a a a a a a a a a a a 1 1 d d d d d b d d d d c
    c d d d d d d d d d d d d d d d d d d 1 1 d d d 6 b b b b b d c
    c d d d b d d d d d d d d d d d d d d 1 1 6 d d d d b d d d d c
    c d d d d d d d d d d d d d d 6 d d d 1 1 d d d d d d b d d d c
    c d d d d d d d d a a a a a a a a a a a a a a a a a a a a a a c
    c d 1 d d d d 6 d d d d d d d d 1 1 1 1 1 1 1 1 1 1 2 d d d d c
    c d 1 1 d d b b b d d d d d d d d d d d d 6 d d d d d d d d d c
    c d 1 d d d d 6 d d d d d d d d d d d d 6 6 6 d d d d d d d d c
    c d b d d d d d d d d d d d d d d d d d d 6 d d d d d d d d d c
    c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
`)
TileWorld.setBackgroundTile(1)
TileWorld.addSprite(7, img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 3 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f e e d d d d d d e e f . .
    . . . f e e 4 4 4 4 e e f . . .
    . . e 4 f 2 2 2 2 2 2 f 4 e . .
    . . 4 d f 2 2 2 2 2 2 f d 4 . .
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`, KindKind.Movable, SpriteKind.Player)
TileWorld.addSprite(6, img`
    . . . . 8 8 8 8 8 8 8 8 . . . .
    . . . 8 8 9 9 9 9 9 9 1 1 . . .
    . . 8 8 8 8 9 9 9 9 1 1 1 1 . .
    . 8 8 8 8 8 8 9 9 1 1 1 1 1 1 .
    8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1
    . 9 9 9 9 9 9 9 1 1 1 1 1 1 1 .
    . . 9 9 9 9 9 9 1 1 1 1 1 1 . .
    . . . 9 9 9 9 9 1 1 1 1 1 . . .
    . . . . 9 9 9 9 1 1 1 1 . . . .
    . . . . . 9 9 9 1 1 1 . . . . .
    . . . . . . 9 9 1 1 . . . . . .
    . . . . . . . 9 1 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, KindKind.Movable, SpriteKind.Rock)
TileWorld.addSprite(11, img`
    . . . . . c c b b b . . . . . .
    . . . . c b d d d d b . . . . .
    . . . . c d d d d d d b b . . .
    . . . . c d d d d d d d d b . .
    . . . c b b d d d d d d d b . .
    . . . c b b d d d d d d d b . .
    . c c c c b b b b d d d b b b .
    . c d d b c b b b b b b b b d b
    c b b d d d b b b b b d d b d b
    c c b b d d d d d d d b b b d c
    c b c c c b b b b b b b d d c c
    c c b b c c c c b d d d b c c b
    . c c c c c c c c c c c b b b b
    . . c c c c c b b b b b b b c .
    . . . . . . c c b b b b c c . .
    . . . . . . . . c c c c . . . .
`, KindKind.Movable, SpriteKind.Rock)
TileWorld.addSprite(10, img`
    d d d d d d d d d d d d d d d 8
    d 6 6 6 8 8 8 6 6 6 6 6 6 6 8 8
    d 6 6 8 6 6 6 8 6 6 6 6 6 6 8 8
    d 6 8 6 8 8 8 6 8 8 8 8 8 8 8 8
    d 8 6 8 8 d 8 8 6 6 6 6 6 6 8 8
    d 8 6 8 d d d 8 6 8 8 8 8 8 6 8
    d 8 6 8 8 d 8 8 6 6 6 6 6 6 8 8
    d 6 8 6 8 8 8 6 8 8 8 8 8 8 8 8
    d 6 6 6 6 6 6 6 6 8 6 6 6 6 8 8
    d 8 8 8 6 6 6 6 6 8 8 6 6 8 6 8
    d 6 6 6 6 6 6 6 6 8 8 8 8 8 6 8
    d 8 8 8 6 6 6 6 6 6 6 6 6 6 6 8
    d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8
    d 8 8 8 8 6 6 6 6 8 8 8 8 8 6 8
    d 6 6 6 6 6 6 6 8 8 6 6 6 8 6 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
`, KindKind.Fixed, SpriteKind.Wall)
TileWorld.addSprite(12, img`
    d d d d d d d d d d d d d d d 8
    d 6 6 6 8 8 8 6 6 6 6 6 6 6 8 8
    d 6 6 8 6 6 6 8 6 6 6 6 6 6 8 8
    d 6 8 6 8 8 8 6 8 8 8 8 8 8 8 8
    d 8 6 8 8 d 8 8 6 6 6 6 6 6 8 8
    d 8 6 8 d d d 8 6 8 8 8 8 8 6 8
    d 8 6 8 8 d 8 8 6 6 6 6 6 6 8 8
    d 6 8 6 8 8 8 6 8 8 8 8 8 8 8 8
    d 6 6 6 6 6 6 6 6 8 6 6 6 6 8 8
    d 8 8 8 6 6 6 6 6 8 8 6 6 8 6 8
    d 6 6 6 6 6 6 6 6 8 8 8 8 8 6 8
    d 8 8 8 6 6 6 6 6 6 6 6 6 6 6 8
    d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8
    d 8 8 8 8 6 6 6 6 8 8 8 8 8 6 8
    d 6 6 6 6 6 6 6 8 8 6 6 6 8 6 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
`, KindKind.Fixed, SpriteKind.Wall)
TileWorld.addSprite(13, img`
    f e e e e e f e e e e 4 4 4 4 e
    e e 4 4 e e e f f f e e e e e e
    e 4 4 4 4 4 e e f f f f f e e e
    e 4 4 4 4 4 4 e f e e e e e f e
    e 4 4 4 4 4 4 e f e 4 4 4 4 e f
    e e 4 4 4 4 4 f e 4 4 4 4 4 4 e
    e e e 4 4 4 e e e 4 4 4 4 4 4 e
    f f e e e e e f e 4 4 4 4 4 4 e
    f e e e 4 4 4 e f e 4 4 4 4 e e
    f e e 4 4 4 4 4 e e e e 4 4 e f
    e e 4 4 4 4 4 4 4 e f e e e e f
    f e 4 4 4 4 4 4 4 e e f f f e e
    f e 4 4 4 4 4 4 4 e f e e e e f
    e f e 4 4 4 4 4 e f e 4 4 e e e
    e e f e 4 4 4 e f e 4 4 4 4 e e
    f e e f e e e f e 4 4 4 4 4 4 e
`, KindKind.Fixed, SpriteKind.Dirt)
TileWorld.addSprite(1, img`
    f f f f f f f f f f f c c c c f
    f f c c f f f f f f f f f f f f
    f c c c c c f f f f f f f f f f
    f c c c c c c f f f f f f f f f
    f c c c c c c f f f c c c c f f
    f f c c c c c f f c c c c c c f
    f f f c c c f f f c c c c c c f
    f f f f f f f f f c c c c c c f
    f f f f c c c f f f c c c c f f
    f f f c c c c c f f f f c c f f
    f f c c c c c c c f f f f f f f
    f f c c c c c c c f f f f f f f
    f f c c c c c c c f f f f f f f
    f f f c c c c c f f f c c f f f
    f f f f c c c f f f c c c c f f
    f f f f f f f f f c c c c c c f
`, KindKind.Fixed, SpriteKind.Space)
TileWorld.moveWithButtons(SpriteKind.Player)
