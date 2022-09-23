input.onPinPressed(TouchPin.P0, function () {
    C = A + B
    basic.showNumber(C)
})
input.onButtonPressed(Button.A, function () {
    A += 1
    basic.showNumber(A)
})
input.onGesture(Gesture.Shake, function () {
    A = 0
    B = 0
})
input.onPinPressed(TouchPin.P2, function () {
    C = A / B
    basic.showNumber(C)
})
input.onButtonPressed(Button.AB, function () {
    C = A * B
    basic.showNumber(C)
})
input.onButtonPressed(Button.B, function () {
    B += 1
    basic.showNumber(B)
})
input.onPinPressed(TouchPin.P1, function () {
    C = A - B
    basic.showNumber(C)
})
let C = 0
let B = 0
let A = 0
A = 0
B = 0
