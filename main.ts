let column = 0
let sensorDots = 0
basic.showIcon(IconNames.StickFigure)
basic.forever(function () {
    sensorDots = pins.analogReadPin(AnalogPin.P0)
    column = Math.map(sensorDots, 0, 1023, 0, 4)
    basic.clearScreen()
    for (let row = 0; row <= 4; row++) {
        led.plot(Math.round(column), row)
    }
    basic.pause(200)
})
