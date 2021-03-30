function Stage2open () {
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(300)
    range.clear()
    basic.pause(300)
    range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(300)
    range2.clear()
    basic.pause(300)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(300)
    range.clear()
    range2.clear()
    basic.clearScreen()
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 50) {
        Player1 = 1
        basic.showString("P1")
        if (Player_2 == 1) {
            Stage1Move()
        }
    }
    if (receivedNumber == 51) {
        Player_2 = 1
        basic.showString("P2")
        if (Player1 == 1) {
            Stage1Move()
        }
    }
    if (receivedNumber == 10) {
        radio.setGroup(69)
        range.showColor(neopixel.colors(NeoPixelColors.Green))
        range2.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        basic.showString("P1 WON")
        range.clear()
        range2.clear()
        radio.setGroup(25)
        basic.clearScreen()
    }
    if (receivedNumber == 20) {
        radio.setGroup(69)
        range.showColor(neopixel.colors(NeoPixelColors.Green))
        range2.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        basic.showString("P2 WON")
        range.clear()
        range2.clear()
        basic.clearScreen()
        radio.setGroup(25)
    }
    if (receivedNumber == 11) {
        radio.setGroup(69)
        range.showColor(neopixel.colors(NeoPixelColors.Green))
        range2.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        basic.showString("P1 WON")
        range.clear()
        range2.clear()
        radio.setGroup(25)
        basic.clearScreen()
    }
    if (receivedNumber == 21) {
        radio.setGroup(69)
        range.showColor(neopixel.colors(NeoPixelColors.Green))
        range.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        basic.showString("P2 WON")
        range.clear()
        range2.clear()
        radio.setGroup(25)
        basic.clearScreen()
    }
    if (receivedNumber == 12) {
        radio.setGroup(69)
        range.showColor(neopixel.colors(NeoPixelColors.Green))
        range2.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        basic.showString("P1 WON")
        range.clear()
        range2.clear()
        radio.setGroup(25)
        basic.clearScreen()
    }
    if (receivedNumber == 22) {
        radio.setGroup(69)
        range.showColor(neopixel.colors(NeoPixelColors.Green))
        range2.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        basic.showString("P2 WON")
        range.clear()
        range2.clear()
        radio.setGroup(25)
        basic.clearScreen()
    }
    if (receivedNumber == 13) {
        radio.setGroup(69)
        range.showColor(neopixel.colors(NeoPixelColors.Green))
        range2.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        basic.showString("P1 WON")
        range.clear()
        range2.clear()
        radio.setGroup(25)
        basic.clearScreen()
    }
    if (receivedNumber == 23) {
        radio.setGroup(69)
        range.showColor(neopixel.colors(NeoPixelColors.Green))
        range2.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        basic.showString("P2 WON")
        range.clear()
        range2.clear()
        radio.setGroup(25)
        basic.clearScreen()
    }
})
function Stage4open () {
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(300)
    range.clear()
    basic.pause(300)
    range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(300)
    range2.clear()
    basic.pause(300)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(300)
    range.clear()
    range2.clear()
    basic.clearScreen()
}
function Stage3Open () {
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(300)
    range.clear()
    basic.pause(300)
    range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(300)
    range2.clear()
    basic.pause(300)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(300)
    range.clear()
    range2.clear()
    basic.clearScreen()
}
function Stage1Move () {
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(300)
    range.clear()
    basic.pause(300)
    range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(300)
    range2.clear()
    basic.pause(300)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(300)
    range.clear()
    range2.clear()
    basic.clearScreen()
}
let Player_2 = 0
let Player1 = 0
let range2: neopixel.Strip = null
let range: neopixel.Strip = null
let TEMP = ""
basic.showString("?")
// Change
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
range = strip.range(0, 12)
range2 = strip.range(12, 24)
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
