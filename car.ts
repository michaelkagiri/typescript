//define car
interface Vehicle{
    make:string;
    model:string;
    year:number;
    start(): void;
}

//implement the car class
class Car implements Vehicle{
    make: string;
    model: string;string;
    year: number;

    constructor(make:string, model: string, year: number){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("car engine start");
        
    }
}

//create an instance
const myCar = new Car("Toyota", "Corolla", 2024);

myCar.start();