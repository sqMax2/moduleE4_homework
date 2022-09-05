function Device(name) {
    this.name = name;
    this.isOn = false;
}

Device.prototype.turnOff = function () {
    this.isOn = false;
};

Device.prototype.turnOn = function () {
    this.isOn = true;
};

Device.prototype.getStatus = function () {
    console.log(`The ${this.name} is ${this.isOn?'on':'off'}`);
};

function Notebook (name, weight) {
    this.name = name;
    this.weight = weight;
}

Notebook.prototype = new Device();
Notebook.prototype.visitURL = function (url) {
    console.log(`Connecting to ${url}`);
};

function Heater (name, power) {
    this.name = name;
    this.power = power;
    this.heatingPower = 0;
}

Heater.prototype = new Device();
Heater.prototype.setHeatingPower = function (amount) {
    if (amount <= 0) {
        this.heatingPower = 0;
    } else if (amount >= this.power) {
        this.heatingPower = this.power;
    } else {
        this.heatingPower = amount;
    }
    console.log(`The heat is set at ${this.heatingPower} watts`);
};

let samsungNotebook = new Notebook('Samsung', 2.5);
let lgHeater = new Heater('LG', 2000);
samsungNotebook.turnOn();
samsungNotebook.getStatus();
samsungNotebook.visitURL('skillfactory.ru');
lgHeater.turnOn();
lgHeater.getStatus();
lgHeater.setHeatingPower(1800);
lgHeater.setHeatingPower(3000);
