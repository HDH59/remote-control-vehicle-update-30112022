radio.onReceivedValue(function (name, value) {
    if (name.compare("X") == 0) {
        Xas = value
    }
    if (name.compare("Y") == 0) {
        Yas = value
    }
    if (name.compare("B") == 0) {
        Button2 = value
    }
})
let Rspeed = 0
let Lspeed = 0
let Yspeed = 0
let Xspeed = 0
let Button2 = 0
let Yas = 0
let Xas = 0
radio.setGroup(1)
Xas = 0
Yas = 0
Button2 = 0
music.setVolume(255)
serial.writeLine("Startup")
basic.forever(function () {
    Xspeed = Math.round(Xas / 4)
    Yspeed = Math.round(Yas / 4)
    Lspeed = Xspeed / 2 + Yspeed / 2
    Rspeed = Xspeed / 2 - Yspeed / 2
    if (Rspeed < 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, Rspeed * -1)
    } else {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Rspeed * 1)
    }
    if (Lspeed < 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, Lspeed * 1)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Lspeed * -1)
    }
    if (Button2 == 1) {
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
    } else {
        music.stopAllSounds()
    }
    serial.writeValue("Lspeed", Lspeed)
    serial.writeValue("Rspeed", Rspeed)
    serial.writeValue("Xspeed", Xspeed)
    serial.writeValue("Yspeed", Yspeed)
})
