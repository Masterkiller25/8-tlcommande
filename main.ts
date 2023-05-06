basic.showLeds(`
    # # # . .
    . . . # .
    # # . . #
    . . # . #
    # . # . #
    `)
radio.setGroup(5)
basic.forever(function () {
    radio.sendValue("x", input.acceleration(Dimension.X))
    radio.sendValue("y", input.acceleration(Dimension.Y))
})
