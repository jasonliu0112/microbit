function turnon () {
    x = target[item] % 5
    y = target[item] / 5
    led.plot(x, y)
}
function turnoff () {
    x = target[olditem] % 5
    y = target[olditem] / 5
    led.unplot(x, y)
}
input.onButtonPressed(Button.AB, function () {
    dice = randint(1, 6)
    count = 100 + randint(0, 25)
    delay = count
    for (let index = 0; index < count; index++) {
        turnoff()
        turnon()
        basic.pause(count - delay)
        olditem = item
        item += 1
        if (item > target.length) {
            item = 0
        }
        delay += -1
    }
    basic.showNumber(dice)
})
let delay = 0
let count = 0
let dice = 0
let y = 0
let x = 0
let target: number[] = []
let olditem = 0
let item = 0
item = 0
olditem = 0
target = [
0,
1,
2,
3,
4,
9,
14,
19,
24,
23,
22,
21,
20,
15,
10,
5
]
