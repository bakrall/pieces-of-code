function Car(name) {
    this.name = name;
}

Car.prototype.setDriveSound = function(sound) {
    this.sound = sound;
}

Car.prototype.drive = function() {
    return this.sound;
}

const car = new Car();

car.setDriveSound('croo');

car.drive(); //"croo"

const truck = {
    sound: 'putputput',
    driveMyTruck: car.drive
}

truck.driveMyTruck(); //"putputput"