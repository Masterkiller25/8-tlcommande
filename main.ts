basic.showLeds(`
    # # # . .
    . . . # .
    # # . . #
    . . # . #
    # . # . #
    `)
radio.setGroup(5)
basic.forever(function () {
    radio.sendValue("droite", input.acceleration(Dimension.X))
    radio.sendValue("guache", input.acceleration(Dimension.Y))
})
