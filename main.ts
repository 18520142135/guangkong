input.onButtonPressed(Button.B, function () {
    x = 0
    basic.clearScreen()
})
let x = 0
x = 0
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        x = 1
    }
    if (x == 1) {
        if (input.lightLevel() <= 1) {
            basic.showIcon(IconNames.Sad)
            control.waitMicros(4065)
        } else {
            basic.showIcon(IconNames.Happy)
        }
    }
})
