class Car {
    setDriveSound(sound) {
        this.sound = sound;
    }

    drive() {
        return this.sound;
    }
}

let car = new Car();
car.setDriveSound('crooo');
car.drive(); //"crooo"

const truck = {
    sound: 'putputput',
    driveMyTruck: car.drive
}

truck.driveMyTruck(); //"putputput"