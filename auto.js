let Motorrechts = 0
let Richtung = 0
let Beschleunigung = 0
let LEDY = 0
let LEDX = 0
let Motorlinks = 0
radio.onDataPacketReceived( ({ receivedString: name, receivedNumber: wert }) =>  {
    led.unplot(LEDX, LEDY)
    if (name == "y") {
        LEDY = wert
    }
    if (name == "x") {
        LEDX = wert
    }
    Richtung = pins.map(
    LEDX,
    0,
    4,
    -50,
    50
    )
    Beschleunigung = pins.map(
    LEDY,
    0,
    4,
    100,
    0
    )
    led.plot(LEDX, LEDY)
})
radio.setGroup(5)
radio.setTransmitPower(7)
basic.forever(() => {
    if (Beschleunigung + Richtung > 100) {
        Motorlinks = 100
    } else {
        if (Beschleunigung + Richtung < 0) {
            Motorlinks = 0
        } else {
            Motorlinks = Beschleunigung + Richtung
        }
    }
    motors.dualMotorPower(Motor.A, Motorlinks)
    if (Beschleunigung - Richtung > 100) {
        Motorrechts = 100
    } else {
        if (Beschleunigung - Richtung < 0) {
            Motorrechts = 0
        } else {
            Motorrechts = Beschleunigung - Richtung
        }
    }
    motors.dualMotorPower(Motor.B, Motorrechts)
})
