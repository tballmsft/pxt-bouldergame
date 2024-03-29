namespace SpriteKind {
    export const Rock = SpriteKind.create()
    export const Wall = SpriteKind.create()
    export const Dirt = SpriteKind.create()
    export const Space = SpriteKind.create()
}
TileWorld.onMoveRequest(SpriteKind.Player, function (dir) {
    TileWorld.setCode(1, _tileDir(TileDir.None))
    TileWorld.hasKind(SpriteKind.Wall, dir, _tileDir(TileDir.None), ResultSet.Zero)
    TileWorld.hasCode(11, dir, _tileDir(TileDir.None), ResultSet.Zero)
    TileWorld.moveSelf(dir)
})
TileWorld.onMoveRequest(SpriteKind.Player, function (dir) {
    TileWorld._isOneOf(dir, Membership.OneOf, TileDir.Left, TileDir.Right)
    TileWorld.hasCode(11, dir, _tileDir(TileDir.None), ResultSet.One)
    TileWorld.hasKind(SpriteKind.Space, dir, dir, ResultSet.Only)
    TileWorld.moveSelf(dir)
    TileWorld.moveOther(dir, dir)
})
TileWorld.onMovedInto(SpriteKind.Enemy, function (dir) {
    TileWorld.hasCode(7, _tileDir(TileDir.None), _tileDir(TileDir.None), ResultSet.One)
    game.over(false)
})
TileWorld.onMovedInto(SpriteKind.Rock, function (dir) {
    TileWorld.hasCode(7, _tileDir(TileDir.None), _tileDir(TileDir.None), ResultSet.One)
    game.over(false)
})
TileWorld.onChangeAround(SpriteKind.Rock, function () {
    TileWorld.hasKind(SpriteKind.Space, _tileDir(TileDir.Down), _tileDir(TileDir.None), ResultSet.Only)
    TileWorld.moveSelf(_tileDir(TileDir.Down))
})
TileWorld.onChangeAround(SpriteKind.Rock, function () {
    TileWorld.hasKind(SpriteKind.Space, _tileDir(TileDir.Left), _tileDir(TileDir.None), ResultSet.Only)
    TileWorld.hasKind(SpriteKind.Space, _tileDir(TileDir.Left), _tileDir(TileDir.Down), ResultSet.Only)
    TileWorld.hasKind(SpriteKind.Rock, _tileDir(TileDir.Down), _tileDir(TileDir.None), ResultSet.One)
    TileWorld.moveSelf(_tileDir(TileDir.Left))
})
TileWorld.onMovedInto(SpriteKind.Rock, function (dir) {
    TileWorld.hasCode(2, _tileDir(TileDir.None), _tileDir(TileDir.None), ResultSet.One)
    TileWorld.removeOther(_tileDir(TileDir.None))
})
TileWorld.onMovedInto(SpriteKind.Player, function (dir) {
    TileWorld.hasCode(11, _tileDir(TileDir.None), _tileDir(TileDir.None), ResultSet.One)
    game.over(false)
})
TileWorld.onMovedInto(SpriteKind.Player, function (dir) {
    TileWorld.hasCode(6, _tileDir(TileDir.None), _tileDir(TileDir.None), ResultSet.One)
    TileWorld.removeOther(_tileDir(TileDir.None))
})
TileWorld.onMovedInto(SpriteKind.Rock, function (dir) {
    TileWorld._isOneOf(dir, Membership.OneOf, TileDir.Down, TileDir.None)
    TileWorld.hasKind(SpriteKind.Rock, _tileDir(TileDir.None), _tileDir(TileDir.None), ResultSet.One)
    TileWorld.knockBackSelf()
})
TileWorld.onMoveRequest(SpriteKind.Rock, function (dir) {
    TileWorld._isOneOf(dir, Membership.OneOf, TileDir.Down, TileDir.None)
    TileWorld.hasKind(SpriteKind.Space, dir, _tileDir(TileDir.None), ResultSet.One)
    TileWorld.hasKind(SpriteKind.Rock, dir, _tileDir(TileDir.None), ResultSet.Zero)
    TileWorld.moveSelf(_tileDir(TileDir.Down))
})
TileWorld.onChangeAround(SpriteKind.Rock, function () {
    TileWorld.hasKind(SpriteKind.Space, _tileDir(TileDir.Right), _tileDir(TileDir.None), ResultSet.Only)
    TileWorld.hasKind(SpriteKind.Space, _tileDir(TileDir.Right), _tileDir(TileDir.Down), ResultSet.Only)
    TileWorld.hasKind(SpriteKind.Rock, _tileDir(TileDir.Down), _tileDir(TileDir.None), ResultSet.One)
    TileWorld.moveSelf(_tileDir(TileDir.Right))
})
TileWorld.onMovedInto(SpriteKind.Player, function (dir) {
    TileWorld.hasCode(2, _tileDir(TileDir.None), _tileDir(TileDir.None), ResultSet.One)
    game.over(false)
})
TileWorld.onMoveRequest(SpriteKind.Enemy, function (dir) {
    TileWorld.hasKind(SpriteKind.Space, dir, _tileDir(TileDir.None), ResultSet.One)
    TileWorld.hasKind(SpriteKind.Rock, dir, _tileDir(TileDir.None), ResultSet.Zero)
    TileWorld.moveSelf(dir)
})
TileWorld.onChangeAround(SpriteKind.Enemy, function () {
    direction = Math.randomRange(1, 4)
    TileWorld.hasKind(SpriteKind.Space, direction, _tileDir(TileDir.None), ResultSet.One)
    TileWorld.hasKind(SpriteKind.Rock, direction, _tileDir(TileDir.None), ResultSet.Zero)
    TileWorld.moveSelf(direction)
})
let direction = 0
TileWorld.setTileMap(img`
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c d d d d d d d d d d b d d d d d d b d d d d d d d d d d d d c 
c d d d d d 6 d d d d b d d d d d d b d d d d d d d d d d d d c 
c d d 7 d d b d d d d b d d d d d d b d d d d b d d d d d d d c 
c d d d d d d d d d d d d d d d d d b 1 1 d d d d d d b d d d c 
c a a a a a a a a a a a a a a a a a a 1 1 d d d d d b d d d d c 
c d d d d d d d d d d d d d d d d d d 1 1 d d d 6 b b b b b d c 
c d d d b d d d d d d d d d d d d d d 1 1 6 d d d d b d d d d c 
c d d d d d d d d d d d d d d 6 d d d 2 1 d d d d d d b d d d c 
c d d d d d d d d a a a a a a a a a a a a a a a a a a a a a a c 
c d 1 d d d d 6 d d d d d d d d b 1 1 1 1 1 1 1 1 1 1 d d d d c 
c d 1 1 d d b b b d d d d d d d d d d d d 6 d d d d 1 d d d d c 
c d 1 d d d d 6 d d d d d d d d d d d d 6 6 6 d d d 1 d d d d c 
c d b d d d d d d d d d d d d d d d d d d 6 d d d d 2 d d d d c 
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
`, Spritely.Movable, SpriteKind.Player)
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
`, Spritely.Movable, SpriteKind.Rock)
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
`, Spritely.Movable, SpriteKind.Rock)
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
`, Spritely.Fixed, SpriteKind.Wall)
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
`, Spritely.Fixed, SpriteKind.Wall)
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
`, Spritely.Fixed, SpriteKind.Dirt)
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
`, Spritely.Fixed, SpriteKind.Space)
TileWorld.addSprite(2, img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . 7 . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . 7 . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . 7 . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . 7 . . f d d d 1 1 1 1 d d d f f . . . . . 
. . . 7 7 . f b d b f d d f b d b f c f . . . . 
. . . 7 7 7 f c d c f 1 1 f c d c f b f . . . . 
. . . . 7 7 f f f b d b 1 b d f f c f . . . . . 
. . . . f c b 1 b c f f f f f f . . . . . . . . 
. . . . f 1 c 1 c 1 f f f f f f . . . . . . . . 
. . . . f d f d f d f f f f f . . . . . . . . . 
. . . . . f . f . f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, Spritely.Movable, SpriteKind.Enemy)
TileWorld.moveWithButtons(SpriteKind.Player)
game.onUpdateInterval(500, function () {
    if (TileWorld.getSpriteCount(6) == 0) {
        game.over(true)
    }
})
