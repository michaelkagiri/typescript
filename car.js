//implement the car class
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("car engine start");
    };
    return Car;
}());
//create an instance
var myCar = new Car("Toyota", "Corolla", 2024);
myCar.start();
