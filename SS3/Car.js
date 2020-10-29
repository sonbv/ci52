import {} from "./Vehicle.js";

class Car extends Vehicle {
  static Wheels = 4;
  about() {
    console.log(`Xe hơi ${this.name} chạy với tốc độc ${this.speed}`);
  }
  static aboutCar() {
    console.log(`Đây là xe hơi. Xe hơi được ra đời vào năm yyyy`);
  }

  get infor() {
    return `
        Đây là xe hơi
        Tên của nó là ${this.name}.
        Nó có thể chạy với tốc độ ${this.speed}.
        Nó được sản xuất bởi hãng ${this.brand}.
        `;
  }
  set preferedSpeed(preferedSpeed) {
    if (isNaN(preferedSpeed)) {
      console.log("Hãy điền vào một số");
    } else {
      this.speed = preferedSpeed;
    }
  }
}

let mercedes = new Car("Mercedes", "200km/h", "Mer");
let lexux2020 = new Car(`Lexus`, 120, "Toyota");
lexux2020.preferedSpeed = 200;

console.log(lexux2020.infor);
// console.log(mercedes);
// console.log(Car.Wheels);

// console.log(Bike.Wheels);
// console.log(Plane.Wheels);
// mercedes.about();
// Car.aboutCar();
