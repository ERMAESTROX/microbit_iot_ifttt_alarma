function doSomething () {
    ESP8266ThingSpeak.connectThingSpeak(
    "api.thingspeak.com",
    "5K11JOM9O82WSUF3",
    presencia,
    0,
    0,
    0,
    0,
    0,
    0,
    0
    )
    ESP8266ThingSpeak.wait(5000)
    presencia = 0
}
let presencia = 0
presencia = 0
ESP8266ThingSpeak.connectWifi(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200,
"HABLAND-45",
"habland0846"
)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        presencia = 1
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
loops.everyInterval(5000, function () {
    doSomething()
})
