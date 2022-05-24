function Open_Lock () {
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        # # # . .
        # . # . .
        . . # # #
        . . # # #
        `)
    basic.clearScreen()
    basic.showArrow(ArrowNames.North)
    basic.clearScreen()
    basic.showArrow(ArrowNames.West)
    basic.pause(200)
    basic.showArrow(ArrowNames.East)
    basic.clearScreen()
    Lock = 0
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
	
})
function StarFlix () {
    while (Game_Screen_var == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            `)
    }
}
input.onButtonPressed(Button.AB, function () {
    Game_run_clicm = 1
    click = 0
    if (Game_Screen_var == 1) {
        click_game()
    }
    if (Game_Screen_var == 2) {
        basic.clearScreen()
        StarFlix()
    }
})
function click_game () {
    Game_Screen_var = 0
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.clearScreen()
    while (Game_run_clicm == 1) {
        basic.showString("" + (click))
    }
}
input.onGesture(Gesture.Shake, function () {
    click += 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (Lock == 1) {
        Open_Lock()
    } else if (Game_Screen_var < 1) {
        Game_Screen_var = 0
    } else {
        Game_Screen_var += 1
    }
})
let Game_run_clicm = 0
let Lock = 0
let Game_Screen_var = 0
let click = 0
click = 0
Game_Screen_var = 0
for (let index = 0; index < 2; index++) {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        . . . # #
        `)
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        . . # # #
        `)
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        . # # # #
        `)
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        # # # # #
        `)
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        . . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
}
Lock = 1
basic.showLeds(`
    . . # # #
    . . # . #
    . . # . #
    . . # # #
    . . # # #
    `)
basic.forever(function () {
    if (Game_Screen_var == 1) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . # .
            . # # # .
            . # # # .
            `)
    }
    if (Game_Screen_var == 2) {
        basic.showLeds(`
            . # . . .
            . # # . .
            . # # # .
            . # # . .
            . # . . .
            `)
    }
})
