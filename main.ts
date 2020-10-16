for (let index = 0; index < 2; index++) {
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.showIcon(IconNames.Yes)
    basic.pause(100)
}
