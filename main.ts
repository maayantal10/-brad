radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        SuperBit.Servo(SuperBit.enServo.S1, 60)
    } else if (receivedNumber == 2) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M3,
        255
        )
    } else if (receivedNumber == 3) {
        SuperBit.Servo(SuperBit.enServo.S1, 0)
    } else if (receivedNumber == 4) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M3,
        -255
        )
    } else if (receivedNumber == 5) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M3,
        255,
        SuperBit.enMotors.M1,
        -255
        )
    } else if (receivedNumber == 6) {
        SuperBit.MotorStopAll()
    } else if (receivedNumber == 7) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -200,
        SuperBit.enMotors.M3,
        -200
        )
    }
})
SuperBit.Servo(SuperBit.enServo.S1, 0)
radio.setGroup(179)
basic.showIcon(IconNames.Pitchfork)
