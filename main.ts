let reading = 0
pins.setPull(DigitalPin.P0, PinPullMode.PullDown)
let prevReading = 1023
basic.forever(function () {
    reading = pins.analogReadPin(AnalogPin.P2)
    led.plotBarGraph(
    reading,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
    if (reading - prevReading > 10) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    prevReading = reading
})
