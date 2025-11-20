// 4.1 Define a Class
class Car {
    // The constructor method runs when a new object is created
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.isRunning = false;
    }

    // Method to describe the car
    getDescription() {
        return `${this.year} ${this.brand} ${this.model}`;
    }

    // Method to perform an action
    startEngine() {
        this.isRunning = true;
        console.log(`The ${this.getDescription()} engine is now running.`);
    }
}

// 4.2 Create Objects (Instances of the Class)
const myCar = new Car("Toyota", "Corolla", 2023);
const partnersCar = new Car("Honda", "Civic", 2024);

// 4.3 Access properties and methods of the objects
console.log(`I own a ${myCar.brand} ${myCar.model}.`);
console.log(`My car description: ${myCar.getDescription()}`);
myCar.startEngine();

console.log(`My partner's car description: ${partnersCar.getDescription()}`);