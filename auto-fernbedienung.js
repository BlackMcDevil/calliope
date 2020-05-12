let Beschleunigung = 0
let Richtung = 0
let LEDY = 0
let LEDX = 0
radio.setGroup(5)
radio.setTransmitPower(7)
basic.forever(() => {
    led.unplot(LEDX, LEDY)
    Richtung = pins.map(
    input.acceleration(Dimension.X),
    -1023,
    1023,
    -50,
    50
    )
    LEDX = pins.map(
    Richtung,
    -50,
    50,
    0,
    5
    )
    Beschleunigung = pins.map(
    input.acceleration(Dimension.Y),
    -1023,
    1023,
    0,
    100
    )
    LEDY = pins.map(
    Beschleunigung,
    0,
    100,
    5,
    0
    )
    led.plot(LEDX, LEDY)
    radio.sendValue("y", LEDY)
    radio.sendValue("x", LEDX)
})
