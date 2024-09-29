// Car Class
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getDetails() {
        return 'Car: ${this.make} ${this.model}';
    }
}

const car1 = new Car("Toyota", "Corolla");
console.log(car1.getDetails()); // Output: Car: Toyota Corolla