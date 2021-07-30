class Rat {
    constructor(weight, speed, status) {
        this.weight = weight;
        this.speed = speed;
        this.status = status;
    }
    talk = function () {
        document.write("chip chip")
    }
}
class Cat {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }
    talk = function () {
        document.write("meomeo")
    }
    catch(rat) {
        return this.speed >= rat.speed
    }
    eat (rat) {
        if (this.catch(rat)) {
            if (rat.status) {
                this.weight += rat.weight;
            }
        }
    }
}