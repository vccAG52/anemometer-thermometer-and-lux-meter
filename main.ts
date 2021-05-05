let millivolts = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature() * 1.8 + 32)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
})
basic.forever(function () {
    millivolts = pins.analogReadPin(AnalogPin.P0) * 3000 / 1023
    basic.showNumber(millivolts / 5)
    basic.pause(1000)
})
