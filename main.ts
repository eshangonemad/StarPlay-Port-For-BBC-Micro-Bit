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
    Game_Screen_var = 1
})
input.onButtonPressed(Button.A, function () {
	
})
function StarFlix () {
    Game_Screen_var = 0
    Sf = 1
    while (Sf == 1) {
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
    if (Game_Screen_var == 1) {
        Game_run_clicm = 1
        click = 0
        click_game()
    }
    if (Game_Screen_var == 2) {
        basic.clearScreen()
        StarFlix()
    }
    if (Game_Screen_var == 3) {
        basic.clearScreen()
        cf = 1
        basic.showString("Shake To Flip Coin")
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # # # .
            . # # # .
            `)
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
    if (cf == 1) {
        coin = randint(1, 2)
        if (coin == 1) {
            basic.showLeds(`
                # . . . #
                # . . . #
                # # # # #
                # . . . #
                # . . . #
                `)
        } else {
            basic.showLeds(`
                # # # # #
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                `)
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (Lock == 1) {
        Open_Lock()
    } else {
        Game_Screen_var += 1
    }
    if (Sf == 1) {
        Sf = 0
    }
    if (Game_run_clicm == 1) {
        Game_run_clicm = 0
    }
    if (cf == 1) {
        cf = 0
    }
})
let coin = 0
let cf = 0
let Game_run_clicm = 0
let Sf = 0
let Lock = 0
let Game_Screen_var = 0
let click = 0
music.playMelody("G D F G - - - - ", 120)
images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . # . .
    . . # # . . # # # .
    . # # # # . . # . .
    # # # # # # . . . .
    `).scrollImage(1, 500)
music.playMelody("G F D F G - - - ", 120)
basic.clearScreen()
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
basic.forever(function () {
	
})
basic.forever(function () {
    if (Lock == 1) {
        basic.showLeds(`
            . . . . .
            . . # # #
            . . # . #
            . . # # #
            . . # # #
            `)
    }
    if (input.isGesture(Gesture.ScreenDown)) {
        Lock = 1
    }
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
    if (Game_Screen_var == 3) {
        basic.showLeds(`
            . # # # .
            # . # . #
            # . # . #
            # . # . #
            . # # # .
            `)
    }
    if (Game_Screen_var == 4) {
        Game_Screen_var = 1
    }
})
