let Bad_Guy: Sprite = null
let statusbar: StatusBarSprite = null
scene.setBackgroundColor(1)
let Person = sprites.create(img`
    . f f f . . . . . . 
    . f f f . . . . . . 
    . f f f . . . . . . 
    . . f . . . . . . . 
    . f f f . . . . . . 
    f . f . f . . . . . 
    . . f . . . . . . . 
    . . f . . . . . . . 
    . f . f . . . . . . 
    f . . . f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Person)
game.onUpdateInterval(500, function () {
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    Bad_Guy = sprites.create(img`
        . 7 2 2 . 
        . 2 2 2 . 
        . 2 2 7 . 
        . . 2 . . 
        . 7 2 2 . 
        2 . 2 . 7 
        . . 7 . . 
        . . 2 . . 
        . 2 . 2 . 
        7 . . . 2 
        `, SpriteKind.Player)
})
