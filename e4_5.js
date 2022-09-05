class Device {
    constructor(name) {
        this.name = name;
        this.isOn = false;
    }

    turnOff() {
        this.isOn = false;
    }

    turnOn() {
        this.isOn = true;
    }

    getStatus() {
        console.log(`The ${this.name} is ${this.isOn?'on':'off'}`);
    }
}


class Notebook extends Device {
    prototype (name, weight) {
        this.name = name;
        this.weight = weight;
    }

    visitURL(url) {
        console.log(`Connecting to ${url}`);
    }

}


class Heater extends Device {
    prototype (name, power) {
        this.name = name;
        this.power = power;
        this.heatingPower = 0;
    }

    setHeatingPower(amount) {
        if (amount <= 0) {
            this.heatingPower = 0;
        } else if (amount >= this.power) {
            this.heatingPower = this.power;
        } else {
            this.heatingPower = amount;
        }
        console.log(`The heat is set at ${this.heatingPower} watts`);
    }

}


let msiNotebook = new Notebook('MSI', 2.2);
let hyundaiHeater = new Heater('Hyundai', 2500);
msiNotebook.turnOn();
msiNotebook.getStatus();
msiNotebook.visitURL('skillfactory.ru');
hyundaiHeater.turnOn();
hyundaiHeater.getStatus();
hyundaiHeater.setHeatingPower(2200);
hyundaiHeater.setHeatingPower(-10);
