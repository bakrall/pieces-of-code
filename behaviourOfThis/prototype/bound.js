function Car(name) {
    this.name = name;
    this.drive = this.drive.bind(this);
}

Car.prototype.setDriveSound = function(sound) {
    this.sound = sound;
}

Car.prototype.drive = function() {
    return this.sound;
}

const car = new Car();

car.setDriveSound('croo');

const truck = {
    sound: 'putputpu',
    driveMyTruck: car.drive
}

truck.driveMyTruck(); //"croo"