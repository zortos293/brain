function Stage2open () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(300)
    strip.clear()
    basic.pause(300)
    strip2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(300)
    strip2.clear()
    basic.pause(300)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(300)
    strip.clear()
    strip2.clear()
    basic.clearScreen()
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 50) {
        Player1 = 1
    }
    if (receivedNumber == 51) {
        Player_2 = 1
    }
    if (receivedNumber == 52) {
        Player_3 = 1
        Stage1Move()
    }
    if (receivedNumber == 10) {
        radio.setGroup(69)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        basic.showString("P1 WON")
        strip.clear()
        strip2.clear()
        radio.setGroup(25)
    }
    if (receivedNumber == 20) {
        radio.setGroup(69)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        basic.showString("P2 WON")
        strip.clear()
        strip2.clear()
        radio.setGroup(25)
    }
    if (receivedNumber == 30) {
        radio.setGroup(69)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        basic.showString("P3 WON")
        strip.clear()
        strip2.clear()
        radio.setGroup(25)
    }
    if (receivedNumber == 11) {
        radio.setGroup(69)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        basic.showString("P1 WON")
        strip.clear()
        strip2.clear()
        radio.setGroup(25)
    }
    if (receivedNumber == 21) {
        radio.setGroup(69)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        basic.showString("P2 WON")
        strip.clear()
        strip2.clear()
        radio.setGroup(25)
    }
    if (receivedNumber == 31) {
        radio.setGroup(69)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        basic.showString("P3 WON")
        strip.clear()
        strip2.clear()
        radio.setGroup(25)
    }
    if (receivedNumber == 12) {
        radio.setGroup(69)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        basic.showString("P1 WON")
        strip.clear()
        strip2.clear()
        radio.setGroup(25)
    }
    if (receivedNumber == 22) {
        radio.setGroup(69)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        basic.showString("P2 WON")
        strip.clear()
        strip2.clear()
        radio.setGroup(25)
    }
    if (receivedNumber == 32) {
        radio.setGroup(69)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        basic.showString("P3 WON")
        strip.clear()
        strip2.clear()
        radio.setGroup(25)
    }
    if (receivedNumber == 13) {
        radio.setGroup(69)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        basic.showString("P1 WON")
        strip.clear()
        strip2.clear()
        radio.setGroup(25)
    }
    if (receivedNumber == 23) {
        radio.setGroup(69)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        basic.showString("P2 WON")
        strip.clear()
        strip2.clear()
        radio.setGroup(25)
    }
    if (receivedNumber == 33) {
        radio.setGroup(69)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        basic.showString("P3 WON")
        strip.clear()
        strip2.clear()
        radio.setGroup(25)
    }
})
function Stage4open () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(300)
    strip.clear()
    basic.pause(300)
    strip2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(300)
    strip2.clear()
    basic.pause(300)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(300)
    strip.clear()
    strip2.clear()
    basic.clearScreen()
}
function stage_5 () {
    radio.sendNumber(1)
    basic.showString("A ")
    basic.pause(1000)
    basic.showString("A ")
    basic.pause(1000)
}
function Stage3Open () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(300)
    strip.clear()
    basic.pause(300)
    strip2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(300)
    strip2.clear()
    basic.pause(300)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(300)
    strip.clear()
    strip2.clear()
    basic.clearScreen()
}
function Stage1Move () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(300)
    strip.clear()
    basic.pause(300)
    strip2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(300)
    strip2.clear()
    basic.pause(300)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(300)
    strip.clear()
    strip2.clear()
    basic.clearScreen()
}
let Player_3 = 0
let Player_2 = 0
let Player1 = 0
let strip2: neopixel.Strip = null
let strip: neopixel.Strip = null
let TEMP = ""
basic.showString("?")
// Change
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
// Change
strip2 = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
radio.setGroup(25)
let Stage1Com = "ABA"
let Stage2Com = "BAB"
let Stage3Com = "ABA"
let Stage4Com = "AAB"
let Stage5Com = "AAB"
let Stage6Com = "ABB"
let Stage7Com = "BAB"
let Stage8Com = "BAB"
let Stage9Com = "BAB"
