radio.onReceivedNumber(function (receivedNumber) {
    if (!(sent)) {
        enemy = receivedNumber
        sent = true
    }
})
function doLose () {
    basic.showString("L")
    score += -1
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
}
input.onGesture(Gesture.Shake, function () {
    if (!(punched)) {
        basic.clearScreen()
        player = randint(0, 2)
        if (player == 0) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . . # . .
                . # . # .
                `)
        } else if (player == 1) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                # . # . #
                # . # . #
                # . # . #
                # . # . #
                # # # # #
                `)
        }
    }
})
function doWin () {
    basic.showString("W")
    score += 1
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
}
let enemy = 0
let sent = false
let punched = false
let player = 0
radio.setGroup(1)
radio.setTransmitPower(7)
player = 0
let score = 0
punched = false
sent = false
basic.forever(function () {
    if (punched && sent) {
        if (player == enemy) {
            basic.showString("D")
        } else if (player == 0) {
            if (enemy == 1) {
                doLose()
            } else {
                doWin()
            }
        } else if (player == 1) {
            if (enemy == 2) {
                doLose()
            } else {
                doWin()
            }
        } else {
            if (enemy == 0) {
                doLose()
            } else {
                doWin()
            }
        }
        punched = false
        sent = false
    }
})
