class SwitchBotton{
    constructor() {
        this.status = false;
    }
    connectTolamp(lamp) {
        this.lamp=lamp;
    }
    swithOn() {
        this.lamp.turnOn();

    }
    swithOff() {
        this.lamp.turnOff();

    }
}