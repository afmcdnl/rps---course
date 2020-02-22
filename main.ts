let item = 0
input.onGesture(Gesture.Shake, function () {
    item = Math.randomRange(1, 3)
    if (item == 1) {
        basic.showIcon(IconNames.Scissors)
    } else if (item == 2) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
