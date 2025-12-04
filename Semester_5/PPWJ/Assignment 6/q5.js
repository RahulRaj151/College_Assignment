class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }

    move() {
        console.log(`moving at ${this.currentSpeed}`);
    }

    accelerate(amount) {
        this.currentSpeed += amount;
        if (this.currentSpeed > this.maxSpeed) {
            this.currentSpeed = this.maxSpeed;
        }
    }
}

class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
        super(color, currentSpeed, maxSpeed);
        this.fuel = fuel;
    }

    doWheelie() {
        console.log("Driving on one wheel!");
    }
}

let motorcycle = new Motorcycle("Black", 0, 200, 10);

console.log(motorcycle.color);

motorcycle.accelerate(50);

motorcycle.move();

motorcycle.doWheelie();
