radio.onReceivedValue(function (name, value) {
    if (name == "LM") {
        LM = value
    }
    if (name == "RM") {
        RM = value
    }
    if (name == "R") {
        R = value
    }
    if (name == "Y") {
        Y = value
    }
    if (name == "G") {
        G = value
    }
    if (name == "B") {
        B = value
    }
    if (name == "Z") {
        Z = value
    }
    if (name == "LA") {
        LA = value
    }
    if (name == "RB") {
        RB = value
    }
})
let RB = 0
let LA = 0
let Z = 0
let B = 0
let G = 0
let Y = 0
let R = 0
let RM = 0
let LM = 0
radio.setGroup(87)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    basic.clearScreen()
    led.plot(0, Math.map(LM, 0, 1023, 4, 0))
    led.plot(4, Math.map(RM, 0, 1023, 4, 0))
    serial.writeValue("LM", LM)
    serial.writeValue("RM", RM)
    if (Math.abs(LM - 512) < 50) {
        maqueen.motorStop(maqueen.Motors.M1)
    } else if (LM > 512) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Math.map(LM, 512, 1023, 0, 255))
    } else if (LM < 512) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, Math.map(LM, 0, 512, 255, 0))
    }
    if (Math.abs(RM - 512) < 50) {
        maqueen.motorStop(maqueen.Motors.M2)
    } else if (RM > 512) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Math.map(RM, 512, 1023, 0, 255))
    } else if (RM < 512) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, Math.map(RM, 0, 512, 255, 0))
    }
    if (R == 1) {
        led.plot(2, 0)
        maqueen.servoRun(maqueen.Servos.S1, 0)
    }
    if (B == 1) {
        led.plot(2, 4)
        maqueen.servoRun(maqueen.Servos.S1, 180)
    }
    if (R == 0 && B == 0) {
        maqueen.servoRun(maqueen.Servos.S1, 90)
    }
    if (Y == 1) {
        led.plot(4, 2)
        led.plotBarGraph(
        1,
        1
        )
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    } else {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
    serial.writeValue("R", R)
    serial.writeValue("G", G)
    serial.writeValue("Y", Y)
    serial.writeValue("B", B)
    serial.writeValue("Z", Z)
    serial.writeValue("LA", LA)
    serial.writeValue("RB", RB)
    if (G == 1) {
        basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
        basic.showString("CM")
    }
    if (LA == 1) {
        basic.showIcon(IconNames.Happy)
        soundExpression.hello.playUntilDone()
        basic.pause(200)
        soundExpression.giggle.play()
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.SmallHeart)
        }
    }
    if (RB == 1) {
        soundExpression.twinkle.play()
        for (let loopX = 0; loopX <= 4; loopX++) {
            for (let loopY = 0; loopY <= 4; loopY++) {
                basic.pause(200)
                led.plotBrightness(loopX, loopY, 255)
            }
        }
    }
    if (Z == 1) {
        soundExpression.soaring.play()
        basic.showArrow(ArrowNames.East)
        basic.showArrow(ArrowNames.West)
        basic.showArrow(ArrowNames.North)
        basic.showArrow(ArrowNames.East)
        basic.showArrow(ArrowNames.West)
        basic.showArrow(ArrowNames.North)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Square)
    }
})
