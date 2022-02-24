def on_button_pressed_a():
    global guess
    basic.show_number(guess)
    if guess > 5:
        basic.show_icon(IconNames.HAPPY)
    else:
        basic.show_icon(IconNames.SAD)
    guess = randint(0, 9)
    basic.pause(1000)
    basic.show_icon(IconNames.HEART)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global guess
    basic.show_number(guess)
    if guess < 5:
        basic.show_icon(IconNames.HAPPY)
    else:
        basic.show_icon(IconNames.SAD)
    guess = randint(0, 9)
    basic.pause(1000)
    basic.show_icon(IconNames.HEART)
input.on_button_pressed(Button.B, on_button_pressed_b)

guess = 0
guess = randint(0, 9)
basic.show_icon(IconNames.HEART)