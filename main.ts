let Bad_Guy: Sprite = null
scene.setBackgroundColor(1)
let Person = sprites.create(img`
    . f f f . 
    . f f f . 
    . f f f . 
    . . f . . 
    . f f f . 
    f . f . f 
    . . f . . 
    . . f . . 
    . f . f . 
    f . . . f 
    `, SpriteKind.Player)
controller.moveSprite(Person)
game.onUpdateInterval(500, function () {
    Bad_Guy = sprites.create(img`
        . 2 2 2 . 
        . 2 2 2 . 
        . 2 2 2 . 
        . . 2 . . 
        . 2 2 2 . 
        2 . 2 . 2 
        . . 2 . . 
        . . 2 . . 
        . 2 . 2 . 
        2 . . . 2 
        `, SpriteKind.Player)
})
